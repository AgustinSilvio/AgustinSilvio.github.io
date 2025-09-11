export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
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
    subtitle: 'My personal web',
    description: 'Hi , I am Agustín Silvio Andrés Rojas. ',
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },

        {
            text: 'Github',
            href: 'https://github.com/AgustinSilvio/'
        },

        {
            text: 'CV',
            href: '/cv.pdf'
        }

                {
            text: 'CV',
            href: '/cv.pdf'
        },

    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Terms',
            href: '/terms'
        }
    ],
    socialLinks: [
        {
            text: 'Linkedin',
            href: 'https://www.linkedin.com/in/agustinsilviorojas/'
        }
        
    ],
hero: {
    title: 'Hi There & Welcome to My Corner of the Web!',
    text: `📈I'm specialized in actuarial data analysis, process automatization, model development, and information visualization for decision-making. I am continuously learning about data science, programming, capital markets, insurance and reinsurance.
I work with efficient methodologies and I am highly receptive to constructive feedback, with a strong interest in continuous learning and bringing value through technical knowledge and interdisciplinary collaboration. 

<img src="https://media.tenor.com/images/7e96d994f29b388f63f7aa77ff2bea78/tenor.gif" width="25">I have a strong enthusiasm for the ETL (Extract, Transform, Load) process, particularly in managing missing values, data inconsistencies, outliers, and other data quality challenges. I enjoy diving deep into data analysis, statistical modeling, and applying machine learning techniques for forecasting and classification tasks. My work is grounded in solid statistical principles, and I strive to turn complex data into actionable insights that support strategic decision-making.`,
    image: {
        src: '/foto_perfil.JPG',
        alt: 'profile_photo'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: 'mailto:agustinsilviorojas@outlook.com.ar'
            }
        ]
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
