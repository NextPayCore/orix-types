# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- 

### Changed
- 

### Deprecated
- 

### Removed
- 

### Fixed
- 

### Security
- 

## [1.0.0] - 2025-09-12

### Added
- Initial release of @nextpay/orix-types package
- Core interfaces for Order management (`IOrderDetail`, `IOrderRequest`, `IOrderItem`, etc.)
- Core interfaces for Wallet management (`IBankAccount`, `ITransaction`, etc.)
- Core interfaces for User authentication
- Core interfaces for BFF Web (`Response<T>`, `ResponseWithAbort<T>`, etc.)
- File and Menu interfaces
- Order enums (`OrderStatus`, `PaymentMethod`, `CommissionReceiveStatus`, etc.)
- Wallet enums (`BankAccountStatus`, `TransactionType`, `TransactionStatus`, etc.)
- User and Auth enums
- Layout, Permission, and Theme enums
- Complete TypeScript declaration files generation
- Comprehensive documentation and usage examples
- Git-based npm package setup for internal distribution

### Technical
- TypeScript 5.8.3 support
- ESNext module system
- Vite build system integration
- Automatic declaration file generation
- Proper module exports configuration