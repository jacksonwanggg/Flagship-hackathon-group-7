export interface Post {
  userName: string;
  caption: string;
}

export interface PostListProps {
  posts: Post[];
}

export interface RouteDataType {
	name: string;
	route: string;
}
