import { defineCollection, z } from "astro:content"

const post = defineCollection({
    schema: z.object({
        title: z.string(),
        img: z.string(),
        description: z.string(),
        tags: z.array(z.string()),
    })
})

const idiom = defineCollection({
    schema: z.object({
        idiom: z.string(),
        meaning: z.string(),
        example: z.string().optional(),
        bgColor: z.string(),
        textColor: z.string(),
        size: z.enum(["small", "medium", "large"]),
        gridClass: z.string(),
    })
})

export const collections = { post, idiom }