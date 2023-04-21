import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useReducer, useState } from "react";
import { PostModel } from "../../api/Api";
import apiClient from "../../ApiClient";
import CardPost from "../../shared/CardPost/CardPost";
import { Button, Col, Row } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import "./PostViewCard.scss";

export const PostViewCard = () => {
  const { id } = useParams();
  const [post, setPost] = useState<PostModel>();
  const [refresher, refresh] = useReducer((x: number) => x + 1, 0);
  let navigate = useNavigate();

  const postId = id || 0;

  const navigateBack = () => {
    navigate("/posts");
  };

  useEffect(() => {
    apiClient.api.getPostData(Number(postId)).then((result) => setPost(result.data));
  }, [refresher]);

  return (
    <Row className="post-view-card">
      <Button type="dashed" shape="circle" icon={<LeftOutlined />} onClick={navigateBack} />
      <Col flex={1} span={24} offset={2}>
        {post && <CardPost className="post-view-card__card" key={postId} post={post} refresh={refresh} />}
      </Col>
    </Row>
  );
};

export default PostViewCard;
