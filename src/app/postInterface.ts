export interface postData {
  createdAt: string;
  Title: string;
  content: string;
  id: string;
  userId: string;
  author: {
    createdAt: string;
    name: string;
    avatar: string;
    id: string;
  };
}
