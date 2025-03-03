import { defineCollection, z } from "astro:content"

const post = defineCollection({
    schema: z.object({
        title: z.string(),
        img: z.string(),
        description: z.string(),
        tags: z.array(z.string()),
    })
})

export const collections = { post }