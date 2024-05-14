import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Homes',
      links: [],
      href:'#home'
    },
    {
      text: 'About',
      href: '#about',
    },
    {
      text: 'Our Services',
      href: '#services',
    },
    // projects
    {
      text: 'Projects',
      href: '#projects',
    },
    
    {
      text: 'Contact',
      href: '#contact',
    }
    
  ],
};

export const footerData = {
  links: [
    {
      title: 'Project',
      links: [
        { text: 'Project 1', href: '#' },
        { text: 'Project 2', href: '#' },
        { text: 'Project 3', href: '#' },
        
      ],
    },
    {
      title: 'Services',
      links: [
        { text: 'Building construction', href: '#' },
        { text: 'Hydroelectric', href: '#' },
        { text: 'Road construction', href: '#' },
        { text: 'Irrigation', href: '#' },
        
      ],
    },
   
    {
      title: 'Company',
      links: [
        { text: 'Home', href: '#home' },
        { text: 'About', href: '#about' },
        { text: 'Services', href: '#services' },
        { text: 'Project', href: '#projects' },
        { text: 'Contact', href: '#contacts' },

      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
     All rights reserved.
  `,
};
