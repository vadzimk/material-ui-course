import React from 'react'


const routes = [
  {
    path: '/services/custom-software',
    label: 'Custom software',
    component: () => (<div>Custom software</div>)
  },
  {
    path: '/services/mobile-apps',
    label: 'Mobile apps',
    component: () => (<div>Mobile apps</div>)
  },
  {
    path: '/services/websites',
    label: 'Websites',
    component: () => (<div>Websites</div>)
  },
  {
    path: '/services',
    label: 'Services',
    component: () => (<div>Services</div>)
  },
  {
    path: '/revolution',
    label: 'Revolution',
    component: () => (<div>Revolution</div>)
  },
  {
    path: '/about',
    label: 'About',
    component: () => (<div>About</div>)
  },
  {
    path: '/contact',
    label: 'Contact',
    component: () => (<div>Contact</div>)
  },
  {
    path: '/estimate',
    label: 'Estimate',
    component: () => (<div>Estimate</div>)
  },
  {
    path: '/',
    label: 'Home',
    component: null
  }
];

export default routes;