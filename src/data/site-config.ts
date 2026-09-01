export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
    text_es?: string;
    text_en?: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    website: string;
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    website: 'https://agustinsilvio.github.io/',
    title: 'Agustín Silvio Andrés Rojas',
    subtitle: '',
    description: 'Sitio personal y profesional de Agustín Rojas — Modelos actuariales, gestión cuantitativa de riesgos y analítica de datos.',
    headerNavLinks: [
        {
            text: 'Home',
            text_es: 'Inicio',
            text_en: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            text_es: 'Proyectos',
            text_en: 'Projects',
            href: '/projects'
        },
        {
            text: 'Writing',
            text_es: 'Artículos',
            text_en: 'Writing',
            href: '/blog'
        },
        {
            text: 'About',
            text_es: 'Sobre mí',
            text_en: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            text_es: 'Contacto',
            text_en: 'Contact',
            href: '/contact'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            text_es: 'Sobre mí',
            text_en: 'About',
            href: '/about'
        },
        {
            text: 'Projects',
            text_es: 'Proyectos',
            text_en: 'Projects',
            href: '/projects'
        },
        {
            text: 'Writing',
            text_es: 'Artículos',
            text_en: 'Writing',
            href: '/blog'
        },
        {
            text: 'Contact',
            text_es: 'Contacto',
            text_en: 'Contact',
            href: '/contact'
        },
        {
            text: 'Terms',
            text_es: 'Términos',
            text_en: 'Terms',
            href: '/terms'
        }
    ],
    socialLinks: [
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/agustinsilviorojas/'
        },
        {
            text: 'GitHub',
            href: 'https://github.com/AgustinSilvio/'
        }
    ],
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;