const fs = require('fs');
const path = require('path');

function scanDirectory(baseDir = 'src') {
  const exports = {};
  
  // Helper function to recursively scan directories
  function scanFolder(category, currentPath = '', maxDepth = 3, depth = 0) {
    if (depth > maxDepth) return;
    
    const fullPath = path.join(baseDir, category, currentPath);
    if (!fs.existsSync(fullPath)) return;
    
    const items = fs.readdirSync(fullPath);
    
    items.forEach(item => {
      const itemPath = path.join(fullPath, item);
      const relativePath = currentPath ? path.join(currentPath, item) : item;
      const stat = fs.statSync(itemPath);
      
      if (stat.isDirectory()) {
        // Check if directory has index.ts
        const indexFile = path.join(itemPath, 'index.ts');
        if (fs.existsSync(indexFile)) {
          const exportPath = currentPath ? 
            `./${category}/${currentPath.replace(/\\/g, '/')}/${item}` : 
            `./${category}/${item}`;
          
          exports[exportPath] = {
            "import": `./dist/${category}/${relativePath.replace(/\\/g, '/')}/index.js`,
            "require": `./dist/${category}/${relativePath.replace(/\\/g, '/')}/index.js`,
            "types": `./dist/${category}/${relativePath.replace(/\\/g, '/')}/index.d.ts`
          };
        }
        
        // Recursively scan subdirectories
        scanFolder(category, relativePath, maxDepth, depth + 1);
        
      } else if (item.endsWith('.ts') && item !== 'index.ts') {
        // Add individual TypeScript files
        const fileName = item.replace('.ts', '');
        const exportPath = currentPath ? 
          `./${category}/${currentPath.replace(/\\/g, '/')}/${fileName}` : 
          `./${category}/${fileName}`;
        
        exports[exportPath] = {
          "import": `./dist/${category}/${relativePath.replace(/\\/g, '/').replace('.ts', '.js')}`,
          "require": `./dist/${category}/${relativePath.replace(/\\/g, '/').replace('.ts', '.js')}`,
          "types": `./dist/${category}/${relativePath.replace(/\\/g, '/').replace('.ts', '.d.ts')}`
        };
      }
    });
  }
  
  // Helper function to add main category exports
  function addCategoryExports(category) {
    const categoryPath = path.join(baseDir, category);
    
    if (!fs.existsSync(categoryPath)) return;
    
    // Add main category export
    exports[`./${category}`] = {
      "import": `./dist/${category}/index.js`,
      "require": `./dist/${category}/index.js`,
      "types": `./dist/${category}/index.d.ts`
    };
    
    // Scan recursively for nested structure
    scanFolder(category);
  }
  
  // Scan all main categories
  addCategoryExports('interfaces');
  addCategoryExports('enums');
  addCategoryExports('constants');
  addCategoryExports('utils');
  
  return exports;
}

// Generate exports
const generatedExports = {
  // Root export
  ".": {
    "import": "./dist/index.js",
    "require": "./dist/index.js",
    "types": "./dist/index.d.ts"
  },
  
  // Auto-generated exports
  ...scanDirectory('src')
};

// Read current package.json
const packageJsonPath = path.join(process.cwd(), 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

// Update exports
packageJson.exports = generatedExports;

// Write back to package.json
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');

// Log results
console.log('✅ Exports generated successfully!');
console.log('📦 Generated exports:');

// Group exports by category for better readability
const categories = {};
Object.keys(generatedExports).forEach(key => {
  if (key === '.') {
    categories['Root'] = categories['Root'] || [];
    categories['Root'].push(key);
  } else {
    const category = key.split('/')[1];
    categories[category] = categories[category] || [];
    categories[category].push(key);
  }
});

Object.keys(categories).forEach(category => {
  console.log(`\n📂 ${category}:`);
  categories[category].forEach(exportPath => {
    console.log(`  ${exportPath}`);
  });
});

console.log(`\n📊 Total exports: ${Object.keys(generatedExports).length}`);