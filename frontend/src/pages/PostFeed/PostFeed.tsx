import { MainHeader } from "../../core/components/MainHeader/MainHeader";
import { useEffect, useState } from "react";
import { PostModel } from "../../api/Api";
import CardPost from "../../shared/card-post/CardPost";
import apiClient from "../../ApiClient";

export const PostFeed = () => {
  const [posts, setPosts] = useState<PostModel[]>([]);

  useEffect(() => {
    apiClient.api.getPostsData().then((result) => setPosts(result.data));
  }, []);

  return (
      <>
        <MainHeader />
        <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "100%",
              margin: "20px 0",
              overflowY: "scroll",
            }}>
          {posts.map((post) => (
              <CardPost key={post.id} post={post} />
          ))}
        </div>
      </>
  );
};

export default PostFeed;
