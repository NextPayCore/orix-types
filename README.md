# @nextpay/orix-types

Shared TypeScript types, interfaces, enums, and constants for Orix projects.

## 📦 Installation

```bash
# Install latest version
pnpm install git+https://gitlab.saobang.vn/nextpay1/orix/fe/web/orix-types.git

# Install specific version
pnpm install git+https://gitlab.saobang.vn/nextpay1/orix/fe/web/orix-types.git#v1.0.1

# Install specific branch  
pnpm install git+https://gitlab.saobang.vn/nextpay1/orix/fe/web/orix-types.git#develop

# For private repos (SSH)
pnpm install git+ssh://git@gitlab.saobang.vn:nextpay1/orix/fe/web/orix-types.git
```

Add to your `package.json`:
```json
{
  "dependencies": {
    "@nextpay/orix-types": "git+https://gitlab.saobang.vn/nextpay1/orix/fe/web/orix-types.git#v1.0.1"
  }
}
```

## 🚀 Usage

```typescript
import { 
  // Order interfaces
  IOrderDetail,
  IOrderRequest,
  IOrderItem,
  
  // Wallet interfaces
  IBankAccount,
  ITransaction,
  
  // Enums
  OrderStatus,
  TransactionType,
  BankAccountStatus
} from '@nextpay/orix-types';

// Example usage
const orderRequest: IOrderRequest = {
  orderStatus: OrderStatus.PROCESSING,
  fullTextSearch: 'laptop',
  page: 1,
  size: 10
};

const bankAccount: IBankAccount = {
  id: 1,
  userId: 123,
  accountHolderName: 'Nguyen Van A',
  accountNumber: '1234567890',
  bankShortName: 'VCB',
  bankFullName: 'Vietcombank',
  bankCode: 'VCB',
  isDefault: true,
  status: BankAccountStatus.ACTIVE,
  createdAt: '2024-01-01T00:00:00Z',
  updatedAt: '2024-01-01T00:00:00Z'
};
```

## 📋 Available Types

### Interfaces
- **Order**: `IOrderDetail`, `IOrderRequest`, `IOrderItem`, `IOrderCreateFast`
- **Wallet**: `IBankAccount`, `ITransaction`, revenue and wallet management
- **Auth**: Authentication and authorization interfaces
- **BFF Web**: `Response<T>`, `ResponseWithAbort<T>`, exam, lesson interfaces
- **User**: User management interfaces
- **File & Menu**: File handling and menu interfaces

### Enums
- **Order**: `OrderStatus`, `PaymentMethod`, `CommissionReceiveStatus`
- **Wallet**: `BankAccountStatus`, `TransactionType`, `TransactionStatus`
- **Auth**: Authentication status enums
- **Layout & Theme**: UI configuration enums
- **Permissions**: Permission and role enums

## 🛠️ Development

```bash
# Install dependencies
pnpm install

# Build TypeScript declarations
pnpm run build-types

# Watch mode for development
pnpm run dev-types

# Type checking only
pnpm run typecheck

# Clean build directory
pnpm run clean
```

## 📝 Publishing & Version Management

### For Package Maintainers

```bash
# Update version and publish
pnpm run release:patch   # Bug fixes: 1.0.1 → 1.0.2
pnpm run release:minor   # New features: 1.0.1 → 1.1.0  
pnpm run release:major   # Breaking changes: 1.0.1 → 2.0.0

# Manual workflow
pnpm run build-types     # Build first
pnpm version minor       # Update version
git push && git push --tags  # Push with tags
```

### Semantic Versioning Guidelines

- **PATCH** (x.x.1): Bug fixes, documentation updates, non-breaking changes
- **MINOR** (x.1.x): New interfaces/enums, optional properties (backward compatible)
- **MAJOR** (1.x.x): Breaking changes, removed/renamed interfaces, changed enum values

### Breaking Change Guidelines

⚠️ **Before making breaking changes:**
1. Notify all projects using this package
2. Mark old interfaces as `@deprecated` first
3. Provide clear migration instructions
4. Update all consuming projects before releasing

## 🏗️ Project Structure

```
src/
├── interfaces/
│   ├── bffweb/          # BFF Web interfaces
│   ├── order/           # Order management
│   ├── user/            # User management
│   ├── wallet/          # Wallet & transactions
│   └── index.ts         # Main interfaces export
├── enums/
│   ├── bffweb/          # BFF Web enums
│   ├── order/           # Order enums
│   ├── user/            # User enums
│   ├── wallet/          # Wallet enums
│   └── index.ts         # Main enums export
└── index.ts             # Main package export
```

## 🔧 Configuration

### TypeScript Path Aliases
The package supports path aliases:
- `@/` → `src/`
- `@/enums/*` → `src/enums/*`
- `@/interfaces/*` → `src/interfaces/*`

### Vite Integration
Includes `vite.config.ts` with proper alias configuration for development.

## 📚 Examples

See `examples.ts` for comprehensive usage examples including:
- Order management workflows
- Bank account handling
- Transaction processing
- Type validation patterns

## 📄 License

MIT