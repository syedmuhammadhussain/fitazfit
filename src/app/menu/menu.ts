import { CoreMenu } from '@core/types'

export const menu: CoreMenu[] = [
  {
    id: 'home',
    title: 'Home',
    translate: 'MENU.HOME',
    type: 'item',
    icon: 'home',
    url: 'home'
  },
  {
    id: 'shop',
    title: 'Shop',
    type: 'item',
    icon: 'shopping-cart',
    url: 'apps/e-commerce/shop'
  },
  {
    id: 'blog',
    title: 'Blog',
    type: 'item',
    icon: 'edit',
    url: 'pages/blog-list'
  },
  {
    id: 'category',
    title: 'Category',
    type: 'item',
    icon: 'list',
    url: 'shopss'
  },
  {
    id: 'contact',
    title: 'Contact',
    type: 'item',
    icon: 'credit-card',
    url: 'shops'
  }
]
