import Link from "next/link";
import { Post } from "./_types/posts";
import { Card } from "@/components/ui/card";

export default async function Home() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  const posts: Post[] = await response.json();

  return (
    <div className="bg-background text-foreground dark:bg-gray-800 dark:text-darkForeground min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <li key={post.id} className="mb-6">
            <Card className="p-4 bg-white dark:bg-gray-900 shadow-md rounded-lg">
              <Link
                href={`/posts/${post.id}?title=${encodeURIComponent(
                  post.title
                )}`}
              >
                <h2 className="text-xl font-semibold dark:text-white">
                  {post.title}
                </h2>
              </Link>
              <p className="dark:text-gray-300">{post.body}</p>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
}
