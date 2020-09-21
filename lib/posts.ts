import fs from 'fs'
import path from 'path'
import matter, {GrayMatterFile} from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

export interface PostSummary {
    slug: string;
    title: string;
    date: number;
    author: string;
    main_image: string;
    description: string;
    tags: string[];
}

export interface PostDetail extends PostSummary {
    html: string;
}

const postsDirectory = path.join(process.cwd(), 'markdown')

const getSortedPosts = (): PostSummary[] => {
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData: PostSummary[] = fileNames.map((fileName: string): PostSummary => {
        const slug = fileName.replace(/\.md$/, '')
        const fullPath = path.join(postsDirectory, fileName)

        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const matterResult = matter(fileContents)
        return formatSummary(slug, matterResult)
    })

    return allPostsData.sort((a: PostSummary, b: PostSummary) => {
        if (a.date < b.date) {
            return 1
        }
        return -1
    })
}

const findPost = async (slug: string): Promise<PostDetail> => {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    if (!fs.existsSync(fullPath)) {
        throw new PostNotFound('the post is not found')
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content)

    return {
        ...formatSummary(slug, matterResult),
        html: processedContent.toString(),
    }
}

class PostNotFound extends Error {
}

const formatSummary = (slug: string, matterResult: GrayMatterFile<string>): PostSummary => {
    const {date, title, author, main_image, description, tags} = matterResult.data

    return {
        slug,
        date: Date.parse(date),
        title,
        author,
        main_image,
        description,
        tags
    }
}

export {
    PostNotFound,
    getSortedPosts,
    findPost,
}
