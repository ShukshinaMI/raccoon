import { Avatar, Button, Card, Space, Tooltip } from "antd";
import { HeartOutlined, CommentOutlined, EditOutlined, DeleteOutlined, UserOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { PostModel, UpdatePostModel, UserModel } from "../../api/Api";
import Meta from "antd/es/card/Meta";
import apiClient from "../../ApiClient";
import { useNavigate } from "react-router-dom";
import Tags from "../Tags/Tags";
import cn from "classnames";
import "./CardPost.scss";

interface CardFormProps {
  post: PostModel;
  author?: UserModel;
  refresh: () => void;
  className?: string;
}

function CardPost({ post, refresh, className }: CardFormProps) {
  const [loading, setLoading] = useState(false);

  const { title, description, tags } = post;
  let navigate = useNavigate();

  const titleCard = (
    <Space>
      <Avatar size={40} icon={<UserOutlined />} />
      <h4>baaby_an</h4>
    </Space>
  );

  const statisticsCard = (
    <Space>
      <h5 style={{ margin: 0 }}>Понравилось: {post.likes}</h5>
    </Space>
  );

  const mapPostToUpdatePostData = (): UpdatePostModel => {
    return {
      postId: post.postId,
      title: post.title,
      description: post.description,
      likes: post.likes,
      tags: post.tags,
    };
  };

  const onSetLike = (e: any) => {
    setLoading(true);
    apiClient.api.updatePostData(post.postId, { ...mapPostToUpdatePostData(), likes: post.likes + 1 }).then(() => {
      refresh();
      setLoading(false);
    });
    e.stopPropagation();
  };

  const onOnEddComment = (e: any) => {
    // TODO
    e.stopPropagation();
  };

  const onEdit = (e: any) => {
    navigate(`/posts/edit/${post.postId}`);
    e.stopPropagation();
  };

  const onDelete = (e: any) => {
    setLoading(true);
    apiClient.api.deletePostData(post.postId).then(() => {
      refresh();
      setLoading(false);
    });
    e.stopPropagation();
  };

  const onViewCard = () => {
    navigate(`/posts/view/${post.postId}`);
  };

  // TODO: добавить изображения
  // cover={
  //   post.images && (
  //       <Carousel autoplay>
  //         {post.images.map((image) => {
  //           return <img alt="example" src={image} />;
  //         })}
  //       </Carousel>
  //   )
  // }

  return (
    <>
      <Card
        loading={loading}
        style={{ marginBottom: 20 }}
        className={cn("card-post", className)}
        bordered={false}
        hoverable
        onClick={onViewCard}
        title={titleCard}
        actions={[
          <Tooltip key="like" color="#C2C6CC" title="Поставить лайк">
            <Button icon={<HeartOutlined />} onClick={(e) => onSetLike(e)} />
          </Tooltip>,
          <Tooltip key="comment" color="#C2C6CC" title="Оставить комментарий">
            <Button icon={<CommentOutlined />} onClick={(e) => onOnEddComment(e)} />
          </Tooltip>,
          <Tooltip key="edit" color="#C2C6CC" title="Редактировать запись">
            <Button icon={<EditOutlined />} onClick={(e) => onEdit(e)} />
          </Tooltip>,
          <Button key="ellipsis" icon={<DeleteOutlined />} onClick={(e) => onDelete(e)} />,
        ]}>
        {statisticsCard}
        <Meta style={{ marginTop: 10 }} title={title} description={description} />
        <Tags style={{ marginTop: 20 }} value={tags} />
      </Card>
    </>
  );
}

export default CardPost;
