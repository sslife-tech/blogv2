import {PostMetaData, PostData} from "~/@types";

export interface PostAdapter {
    getAll: () => Promise<PostMetaData[]>;
    get: (offset: number, amount: number) => Promise<PostMetaData[]>;
    count: () => Promise<number>;
    related: (post: PostMetaData, max: number) => Promise<PostMetaData[]>;
    find: (slug: string) => Promise<PostData>;
}

export {fileSystemPostAdapter, PostNotFound} from './fileSystemPostAdapter';
