import { useEffect, useState } from "react";
import { PostModel } from "../../../api/Api";

export const HomeHeader = () => {
    const [posts, setPosts] = useState<PostModel[]>([]);

    useEffect(() => {
        // apiClient.api.getPostsData().then((result) => console.log(result));
    }, []);

    return (
        <>
            <HomeHeader />
        </>
    );
};

export default HomeHeader;
