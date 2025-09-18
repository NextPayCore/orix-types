# @nextpay/orix-types

Shared TypeScript types, interfaces, enums, constants, and utilities for Orix projects.

## 📦 Installation

```bash
# Install latest version
pnpm install git+https://gitlab.saobang.vn/nextpay1/orix/fe/web/orix-types.git

# Install specific version
pnpm install git+https://gitlab.saobang.vn/nextpay1/orix/fe/web/orix-types.git#v1.0.1

# Install specific branch  
pnpm install git+https://gitlab.saobang.vn/nextpay1/orix/fe/web/orix-types.git#develop
```

## 🚀 Usage

### Main Import (All Types)
```typescript
import { 
  // Interfaces
  IOrderDetail, IBankAccount, IUser,
  
  // Enums
  OrderStatus, TransactionType, UserRole,
  
  // Constants
  SHARE_LINK_URL, mapOrderStatusText,
  
  // Utils
  formatCurrency, parseDate
} from '@nextpay/orix-types';
```

### Service-Based Imports (Recommended)
```typescript
// Auth Service
import { IUser, AuthInfoRes } from '@nextpay/orix-types/interfaces/auth';
import { UserRole, AuthStatus } from '@nextpay/orix-types/enums/auth';

// Order Service  
import { IOrderDetail, IProduct } from '@nextpay/orix-types/interfaces/order';
import { OrderStatus, PaymentMethod } from '@nextpay/orix-types/enums/order';
import { mapOrderStatusText, listOrderStatus } from '@nextpay/orix-types/constants/order';

// Wallet Service
import { IBankAccount, ITransaction } from '@nextpay/orix-types/interfaces/wallet';
import { WalletType, TransactionStatus } from '@nextpay/orix-types/enums/wallet';
import { TRANSACTION_TYPES } from '@nextpay/orix-types/constants/wallet';

// BFFWeb Service
import { ILesson, IExam } from '@nextpay/orix-types/interfaces/bffweb';
import { LessonStatus } from '@nextpay/orix-types/enums/bffweb';

// Constants & Utils
import { SHARE_LINK_URL, MIN_AMOUNT_WITHDRAW } from '@nextpay/orix-types/constants';
import { formatCurrency, parseDate } from '@nextpay/orix-types/utils';
```

### Namespace Imports (Avoid Conflicts)
```typescript
import { Interfaces, Enums, Constants, Utils } from '@nextpay/orix-types';

// Usage
const user: Interfaces.IUser = { ... };
const status = Enums.OrderStatus.PENDING;
const config = Constants.SHARE_LINK_URL;
const formatted = Utils.formatCurrency(1000);
```

## 📋 Available Exports

### 🔗 Subpath Exports
| Import Path | Description |
|-------------|-------------|
| `@nextpay/orix-types` | All types, interfaces, enums, constants, utils |
| `@nextpay/orix-types/interfaces` | All interfaces |
| `@nextpay/orix-types/enums` | All enums |
| `@nextpay/orix-types/constants` | All constants |
| `@nextpay/orix-types/utils` | All utility functions |
| `@nextpay/orix-types/interfaces/auth` | Auth service interfaces |
| `@nextpay/orix-types/interfaces/order` | Order service interfaces |
| `@nextpay/orix-types/interfaces/wallet` | Wallet service interfaces |
| `@nextpay/orix-types/interfaces/bffweb` | BFFWeb service interfaces |
| `@nextpay/orix-types/enums/auth` | Auth service enums |
| `@nextpay/orix-types/enums/order` | Order service enums |
| `@nextpay/orix-types/enums/wallet` | Wallet service enums |
| `@nextpay/orix-types/enums/bffweb` | BFFWeb service enums |
| `@nextpay/orix-types/constants/order` | Order service constants |
| `@nextpay/orix-types/constants/wallet` | Wallet service constants |

### � Interfaces by Service

#### **Auth Service**
- `IUser`, `AuthInfoRes`, `IRegisterOtpRes`
- User management and authentication

#### **Order Service**  
- `IOrderDetail`, `IOrderRequest`, `IProduct`, `IProductList`
- Order processing and product management

#### **Wallet Service**
- `IBankAccount`, `ITransaction`, `IRevenueStatistic`
- Financial transactions and wallet management

#### **BFFWeb Service**
- `ILesson`, `IExam`, `Response<T>`, `IShortLink`
- Educational content and web responses

### 🏷️ Enums by Service

#### **Auth Service**
- `UserRole`, `AuthStatus` - Authentication states

#### **Order Service**
- `OrderStatus`, `PaymentMethod`, `CommissionReceiveStatus`
- Order lifecycle and payment processing

#### **Wallet Service**  
- `BankAccountStatus`, `TransactionType`, `WalletType`
- Financial transaction categorization

### 🔧 Constants by Service

#### **Order Constants**
```typescript
import { 
  mapOrderStatusText,     // OrderStatus → Label mapping
  mapOrderStatusClass,    // OrderStatus → CSS class mapping
  listOrderStatus,        // Dropdown options
  getStatusText,          // Helper function
} from '@nextpay/orix-types/constants/order';

// Usage in components
const statusLabel = mapOrderStatusText[OrderStatus.FULFILLED]; // "Đã giao hàng"
const statusClass = mapOrderStatusClass[OrderStatus.FULFILLED]; // "bg-[#00A57B]"
```

#### **General Configuration**
```typescript
import { 
  SHARE_LINK_URL,         // Share link base URL
  MIN_AMOUNT_WITHDRAW,    // Minimum withdrawal amount
  PRODUCT_ID              // Default product ID
} from '@nextpay/orix-types/constants';
```

### ⚙️ Utility Functions
```typescript
import { 
  formatCurrency,   // Format number as currency
  parseDate,        // Parse date strings
  // ... other utilities
} from '@nextpay/orix-types/utils';

// Usage
const price = formatCurrency(150000); // "150.000 ₫"
const date = parseDate("2024-01-01");
```

## 🏗️ Project Structure

```
src/
├── interfaces/          # TypeScript interfaces
│   ├── auth/           # Authentication & user management
│   ├── order/          # Order processing & products  
│   ├── wallet/         # Financial transactions
│   ├── bffweb/         # BFF Web responses
│   └── index.ts        # Main interfaces export
├── enums/              # TypeScript enums
│   ├── auth/           # Auth-related enums
│   ├── order/          # Order & payment enums
│   ├── wallet/         # Wallet & transaction enums
│   ├── bffweb/         # BFFWeb enums
│   └── index.ts        # Main enums export
├── constants/          # Application constants
│   ├── order/          # Order status mappings & labels
│   ├── wallet/         # Transaction type definitions
│   └── index.ts        # Main constants export
├── utils/              # Utility functions
│   └── index.ts        # Main utils export
└── index.ts            # Main package export
```

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

## 💡 Best Practices

### Import Organization
```typescript
// ✅ Recommended: Service-based imports
import { IUser } from '@nextpay/orix-types/interfaces/auth';
import { OrderStatus } from '@nextpay/orix-types/enums/order';

// ✅ Alternative: Namespace imports (avoid conflicts)
import { Interfaces, Enums } from '@nextpay/orix-types';
const user: Interfaces.IUser = { ... };

// ❌ Avoid: Mixed imports that can cause conflicts
import { IUser, OrderStatus } from '@nextpay/orix-types'; // Risk of naming conflicts
```

### Service Separation
Each service should use its own types to avoid naming conflicts:
- **Auth team** → `@nextpay/orix-types/interfaces/auth`
- **Order team** → `@nextpay/orix-types/interfaces/order`  
- **Wallet team** → `@nextpay/orix-types/interfaces/wallet`

## 📄 License

MIT