export interface PostMetaData {
    slug: string;
    title: string;
    date: number;
    author: string;
    thumbnail: string;
    description: string;
    tags: string[];
}

export interface PostData extends PostMetaData {
    html: string;
}
