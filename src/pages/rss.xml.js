import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';

export async function GET(context) {
    const posts = await getCollection('post');
    
    return rss({
        title: 'English Blog',
        description: 'Learn English with grammar lessons, idioms, and interactive quizzes',
        site: context.site,
        items: posts.map((post) => ({
            title: post.data.title,
            pubDate: new Date(),
            description: post.data.description,
            link: `/post/${post.slug}/`,
        })),
        customData: `<language>en-us</language>`,
    });
}
