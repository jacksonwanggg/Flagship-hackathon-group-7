export interface Post {
  userName: string;
  caption: string;
}

export interface PostListProps {
  posts: Post[];
}

export interface QuestListProps {
  questName: string;
  foodCount: string;
  itemCount: string;
  itemSrc: string;
}

export interface RouteDataType {
	name: string;
	route: string;
}
