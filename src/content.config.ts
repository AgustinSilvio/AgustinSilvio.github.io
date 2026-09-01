import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    schema: z.object({
        title: z.string(),
        title_es: z.string().optional(),
        title_en: z.string().optional(),
        description: z.string().optional(),
        description_es: z.string().optional(),
        description_en: z.string().optional(),
        publishDate: z.coerce.date(),
        isFeatured: z.boolean().optional(),
        tags: z.array(z.string()).optional(),
        linkedinUrl: z.string().url().optional(),
        seo: z.object({
            title: z.string().optional(),
            description: z.string().optional(),
            image: z.object({ src: z.string(), alt: z.string().optional() }).optional()
        }).optional()
    })
});

const projects = defineCollection({
    schema: z.object({
        title: z.string(),
        title_es: z.string().optional(),
        title_en: z.string().optional(),
        description: z.string().optional(),
        description_es: z.string().optional(),
        description_en: z.string().optional(),
        publishDate: z.coerce.date(),
        isFeatured: z.boolean().optional(),
        tags: z.array(z.string()).optional(),
        linkedinUrl: z.string().url().optional(),
        seo: z.object({
            title: z.string().optional(),
            description: z.string().optional(),
            image: z.object({ src: z.string(), alt: z.string().optional() }).optional()
        }).optional()
    })
});

const pages = defineCollection({
    schema: z.object({
        title: z.string().optional(),
        seo: z.object({
            title: z.string().optional(),
            description: z.string().optional(),
            image: z.object({ src: z.string(), alt: z.string().optional() }).optional()
        }).optional()
    }).optional()
});

export const collections = { blog, projects, pages };