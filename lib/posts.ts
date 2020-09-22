import fs from 'fs';
import path from 'path';
import matter, {GrayMatterFile} from 'gray-matter';
import remark from 'remark';
import externalLinks from 'remark-external-links';
import html from 'remark-html';

export interface PostSummary {
    slug: string;
    title: string;
    date: number;
    author: string;
    thumbnail: string;
    description: string;
    tags: string[];
}

export interface PostDetail extends PostSummary {
    html: string;
}

const postsDirectory = path.join(process.cwd(), 'markdown');

const getSortedPosts = (): PostSummary[] => {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData: PostSummary[] = fileNames.map((fileName: string): PostSummary => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, fileName);

        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);
        return formatSummary(slug, matterResult);
    });

    return allPostsData.sort((a: PostSummary, b: PostSummary) => {
        if (a.date < b.date) {
            return 1;
        }
        return -1;
    });
};

const relatedPosts = (post: PostSummary, max = 5): PostSummary[] =>
    getSortedPosts()
        .filter((p) => {
            if (p.slug === post.slug) {
                return false;
            }
            return post.tags.find((tag) => p.tags.includes(tag)) !== undefined;
        })
        .slice(0, max);

const findPost = async (slug: string): Promise<PostDetail> => {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    if (!fs.existsSync(fullPath)) {
        throw new PostNotFound('the post is not found');
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    const processedContent = await remark()
        .use(externalLinks, {target: "_blank", rel: ['nofollow']})
        .use(html)
        .process(matterResult.content);

    return {
        ...formatSummary(slug, matterResult),
        html: processedContent.toString(),
    };
};

class PostNotFound extends Error {
}

const formatSummary = (slug: string, matterResult: GrayMatterFile<string>): PostSummary => {
    const {date, title, author, thumbnail, description, tags} = matterResult.data;

    return {
        slug,
        date: Date.parse(date),
        title,
        author,
        thumbnail,
        description,
        tags
    };
};

export {
    PostNotFound,
    getSortedPosts,
    relatedPosts,
    findPost,
};
