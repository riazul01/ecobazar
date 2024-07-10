// import paths from 'routes/paths';

export interface SubMenuItem {
  name: string;
  pathName: string;
  path: string;
  icon?: string;
  active?: boolean;
  items?: SubMenuItem[];
}

export interface MenuItem {
  id: string;
  subheader: string;
  path?: string;
  icon?: string;
  avatar?: string;
  active?: boolean;
  items?: SubMenuItem[];
}

const sitemap: MenuItem[] = [
  {
    id: 'home',
    subheader: 'Home',
    path: '/',
    active: true,
  },
  {
    id: 'shop',
    subheader: 'Shop',
    path: '#!',
  },
  {
    id: 'blog',
    subheader: 'Blog',
    path: '#!',
  },
  {
    id: 'about',
    subheader: 'About Us',
    path: '#!',
  },
  {
    id: 'contact',
    subheader: 'Contact Us',
    path: '#!',
  },
];

export default sitemap;
