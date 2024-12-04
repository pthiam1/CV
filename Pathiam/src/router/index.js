import Contact from '@/components/Contact.vue'
import Experience from '@/components/Experience.vue'
import Home from '@/components/Home.vue'
import Projects from '@/components/Projects.vue'
import Skills from '@/components/Skills.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },

    {
      path: '/experience',
      name: 'Experience',
      component: Experience
    },

    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
      
    {
      path: '/skills',
      name: 'Skills',
      component: Skills
    }
]

// Inclure le CSS de Font Awesome
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
document.head.appendChild(link);


const router = createRouter({
    history: createWebHashHistory(),
    routes,
  })

export default router