import { useEffect, useReducer, useState } from "react";
import { PostModel } from "../../api/Api";
import apiClient from "../../ApiClient";
import CardPost from "../../shared/CardPost/CardPost";
import "./PostFeedRegistry.scss";

export const PostFeedRegistry = () => {
  const [posts, setPosts] = useState<PostModel[]>([]);
  const [refresher, refresh] = useReducer((x: number) => x + 1, 0);

  useEffect(() => {
    apiClient.api.getPostsData().then((result) => setPosts(result.data));
  }, [refresher]);

  return (
    <div className="post-feed-registry">
      {posts.map((post) => (
        <CardPost key={post.postId} post={post} refresh={refresh} />
      ))}
    </div>
  );
};

export default PostFeedRegistry;
