import type { MenuItem } from '../interfaces/menu';

// Default menu items with badge colors
export const defaultMenuItems: MenuItem[] = [
  {
    title: 'Trang chủ',
    icon: 'home-o',
    path: '/'
  },
  {
    title: 'Sản phẩm',
    icon: 'bag-o',
    path: '/products',
    badge: 'New',
    badgeColor: '#07c160', // Màu xanh lá
    children: [
      {
        title: 'Điện thoại',
        path: '/products/phones',
        badge: 'Hot',
        badgeColor: '#ff976a', // Màu cam
        children: [
          { title: 'iPhone', path: '/products/phones/iphone' },
          { title: 'Samsung', path: '/products/phones/samsung' },
          { title: 'Xiaomi', path: '/products/phones/xiaomi' }
        ]
      },
      {
        title: 'Laptop',
        path: '/products/laptops',
        badge: 5,
        badgeColor: '#1989fa', // Màu xanh dương
        children: [
          { title: 'MacBook', path: '/products/laptops/macbook' },
          { title: 'Dell', path: '/products/laptops/dell' },
          { title: 'HP', path: '/products/laptops/hp' }
        ]
      },
      { title: 'Phụ kiện', path: '/products/accessories' }
    ]
  },
  {
    title: 'Đơn hàng',
    icon: 'orders-o',
    path: '/orders',
    badge: 3,
    badgeColor: '#ee0a24' // Màu đỏ (mặc định)
  },
  {
    title: 'Tài khoản',
    icon: 'user-o',
    path: '/profile',
    children: [
      {
        title: 'Thông tin cá nhân',
        path: '/profile/info',
        badge: '!',
        badgeColor: '#ffd21e' // Màu vàng
      },
      { title: 'Đổi mật khẩu', path: '/profile/change-password' },
      { title: 'Lịch sử giao dịch', path: '/profile/transactions' }
    ]
  },
  {
    title: 'Liên hệ',
    icon: 'phone-o',
    path: '/contact'
  },
  {
    title: 'Mục bị vô hiệu hóa',
    icon: 'warning-o',
    path: '/disabled',
    disabled: true,
    badge: 'X',
    badgeColor: '#969799' // Màu xám
  }
];

// Các màu badge phổ biến
export const badgeColors = {
  red: '#ee0a24', // Đỏ - cảnh báo, lỗi
  green: '#07c160', // Xanh lá - thành công, mới
  blue: '#1989fa', // Xanh dương - thông tin
  orange: '#ff976a', // Cam - nổi bật
  yellow: '#ffd21e', // Vàng - cảnh báo nhẹ
  purple: '#7232dd', // Tím - đặc biệt
  gray: '#969799' // Xám - vô hiệu hóa
};
