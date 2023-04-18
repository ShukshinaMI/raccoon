import { useEffect, useState } from "react";
import { PostModel } from "../../api/Api";
import CardPost from "../../shared/card-post/CardPost";
import apiClient from "../../ApiClient";
import HomeHeader from "./HomeHeader/HomeHeader";

export const Home = () => {
    const [posts, setPosts] = useState<PostModel[]>([]);

    useEffect(() => {
        apiClient.api.getPostsData().then((result) => console.log(result));
    }, []);

    return (
        <>
            <HomeHeader />

            <div style={{ display: "flex", flexDirection: "column" }}>
                {posts.map((post) => (
                    <CardPost post={post} />
                ))}
            </div>
        </>
    );
};

export default Home;
