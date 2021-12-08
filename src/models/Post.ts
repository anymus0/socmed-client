export interface Post {
  title: string;
  text: string;
  timestamp: Date;
  version: number;
};

export interface postResponse {
  success: boolean,
  allPost: Array<Post>
}

export interface postData {
  isLoaded: boolean;
  posts: Post[]
}

export const defaultPostData: postData = {
  isLoaded: false,
  posts: []
}