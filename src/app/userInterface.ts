export interface userData {
  createdAt: string;
  name: string;
  avatar: string;
  id: string;
  recent_posts: [
    {
      createdAt: string;
      Title: string;
      content: string;
      id: string;
      userId: string;
    }
  ];
}
