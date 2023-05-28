import { useEffect, useReducer, useState } from "react";
import { PostModel } from "../../api/Api";
import apiClient from "../../ApiClient";
import CardPost from "../../shared/CardPost/CardPost";
import appStore from "../../store/AppStore";
import { observer } from "mobx-react-lite";
import EmptyRegistry from "../../shared/EmptyRegistry/EmptyRegistry";

export const Home = observer(() => {
  const [posts, setPosts] = useState<PostModel[]>([]);
  const [refresher, refresh] = useReducer((x: number) => x + 1, 0);

  useEffect(() => {
    apiClient.api
      .getPostsData({ searchString: appStore.searchString, searchType: appStore.searchType })
      .then(() => setPosts([]));
  }, [refresher, appStore.searchString, appStore.searchType]);

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {posts.map((post) => (
          <CardPost key={post.postId} post={post} refresh={refresh} />
        ))}
        {!posts.length && <EmptyRegistry />}
      </div>
    </>
  );
});

export default Home;
