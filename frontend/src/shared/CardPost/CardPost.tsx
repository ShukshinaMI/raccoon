import "./CardPost.scss";
import { Avatar, Button, Card, Space, Tooltip } from "antd";
import { HeartOutlined, CommentOutlined, EditOutlined, EllipsisOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { PostModel, UserModel } from "../../api/Api";
import { UserOutlined } from "@ant-design/icons";
import Meta from "antd/es/card/Meta";

interface CardFormProps {
    post: PostModel;
    author?: UserModel;
}

function CardPost({ post, author }: CardFormProps) {
    const [loading, setLoading] = useState(false);

    const { title, description } = post;

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

    const actionsCard = (
        <Space style={{ marginTop: 20 }}>
            <Tooltip color="#C2C6CC" title="Поставить лайк">
                <Button icon={<HeartOutlined />} />
            </Tooltip>
            <Tooltip color="#C2C6CC" title="Оставить комментарий">
                <Button icon={<CommentOutlined />} />
            </Tooltip>
        </Space>
    );

    return (
        <Card
            loading={loading}
            style={{ marginBottom: 20 }}
            className="card-post"
            bordered={false}
            hoverable
            title={titleCard}
            cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
            actions={[
                <Tooltip color="#C2C6CC" title="Редактировать запись">
                    <Button icon={<EditOutlined key="edit" />} />
                </Tooltip>,
                <Button icon={<EllipsisOutlined key="ellipsis" />} />,
            ]}>
            {statisticsCard}
            <Meta style={{ marginTop: 10 }} title={title} description={description} />
            {actionsCard}
        </Card>
    );
}

export default CardPost;
