import { Comments } from "@/app/_types/posts";
import GoBackButton from "@/app/_components/goBackButton";
import UrlParametrsReadTitle from "@/app/_components/urlParametrsReadTitle";
import { Card } from "@/components/ui/card";

const PostComments = async ({ params }: { params: { id: string } }) => {
  const postId = Number(params.id);

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch comments");
  }

  const comments: Comments[] = await response.json();

  return (
    <div className="bg-background text-foreground dark:bg-gray-800 dark:text-darkForeground min-h-screen p-4">
      <GoBackButton />
      <UrlParametrsReadTitle />
      <h1 className="text-xl my-4">Comments for Post {postId}</h1>
      <div className="grid grid-cols-1 gap-4">
        {comments.map((comment) => (
          <Card
            key={comment.id}
            className="p-4 bg-white dark:bg-gray-900 shadow-md rounded-lg mb-4"
          >
            <p className="font-bold">{comment.name}</p>
            <p className="text-gray-500">{comment.email}</p>
            <p className="mt-2">{comment.body}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PostComments;
