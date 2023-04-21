import { useEffect, useReducer, useState } from "react";
import { PostModel } from "../../api/Api";
import apiClient from "../../ApiClient";
import CardPost from "../../shared/CardPost/CardPost";

export const Home = () => {
  const [posts] = useState<PostModel[]>([]);
  const [refresher, refresh] = useReducer((x: number) => x + 1, 0);

  useEffect(() => {
    apiClient.api.getPostsData().then((result: any) => console.log(result));
  }, [refresher]);

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {posts.map((post) => (
          <CardPost key={post.postId} post={post} refresh={refresh} />
        ))}
      </div>
    </>
  );
};

export default Home;
