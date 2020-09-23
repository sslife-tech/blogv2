import {fileSystemPostAdapter, PostAdapter} from "~/adapter/post";

interface Registry {
    readonly postAdapter: PostAdapter;
}

const registry: Registry = {
    postAdapter: fileSystemPostAdapter,
};

export {
    registry
};
