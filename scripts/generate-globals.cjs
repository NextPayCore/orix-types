const fs = require('fs');
const path = require('path');

function generateGlobalDeclarations() {
  const baseDir = 'src';
  const targetCategories = ['constants', 'utils']; // Chỉ gen cho 2 folder này
  
  let declarations = [
    '// Auto-generated global module declarations',
    '// Run "pnpm generate-globals" to regenerate this file',
    ''
  ];

  function scanCategoryForDeclarations(category) {
    const categoryPath = path.join(baseDir, category);
    
    if (!fs.existsSync(categoryPath)) return;
    
    // Add main category declaration
    declarations.push(`// ${category.charAt(0).toUpperCase() + category.slice(1)} modules`);
    declarations.push(`declare module '@nextpay/orix-types/${category}' {`);
    declarations.push(`  const _exports: any;`);
    declarations.push(`  export = _exports;`);
    declarations.push(`}`);
    declarations.push('');
    
    // Recursively scan for nested files/folders
    function scanFolder(currentPath = '', maxDepth = 3, depth = 0) {
      if (depth > maxDepth) return;
      
      const fullPath = path.join(categoryPath, currentPath);
      const items = fs.readdirSync(fullPath);
      
      items.forEach(item => {
        const itemPath = path.join(fullPath, item);
        const relativePath = currentPath ? path.join(currentPath, item) : item;
        const stat = fs.statSync(itemPath);
        
        if (stat.isDirectory()) {
          // Check if directory has index.ts
          const indexFile = path.join(itemPath, 'index.ts');
          if (fs.existsSync(indexFile)) {
            const modulePath = currentPath ? 
              `@nextpay/orix-types/${category}/${currentPath.replace(/\\/g, '/')}/${item}` : 
              `@nextpay/orix-types/${category}/${item}`;
              
            declarations.push(`declare module '${modulePath}' {`);
            declarations.push(`  const _exports: any;`);
            declarations.push(`  export = _exports;`);
            declarations.push(`}`);
            declarations.push('');
          }
          
          // Recursively scan subdirectories
          scanFolder(relativePath, maxDepth, depth + 1);
          
        } else if (item.endsWith('.ts') && item !== 'index.ts') {
          // Add individual TypeScript files
          const fileName = item.replace('.ts', '');
          const modulePath = currentPath ? 
            `@nextpay/orix-types/${category}/${currentPath.replace(/\\/g, '/')}/${fileName}` : 
            `@nextpay/orix-types/${category}/${fileName}`;
            
          declarations.push(`declare module '${modulePath}' {`);
          declarations.push(`  const _exports: any;`);
          declarations.push(`  export = _exports;`);
          declarations.push(`}`);
          declarations.push('');
        }
      });
    }
    
    scanFolder();
  }

  // Generate declarations for target categories
  targetCategories.forEach(category => {
    scanCategoryForDeclarations(category);
  });

  // Write to global.d.ts
  const globalDtsPath = path.join(process.cwd(), 'global.d.ts');
  const content = declarations.join('\n');
  
  fs.writeFileSync(globalDtsPath, content);
  
  console.log('✅ Global declarations generated successfully!');
  console.log(`📦 Generated declarations for: ${targetCategories.join(', ')}`);
  console.log(`📄 File: global.d.ts`);
  console.log(`📊 Total modules: ${declarations.filter(line => line.startsWith('declare module')).length}`);
}

// Run the generator
generateGlobalDeclarations();