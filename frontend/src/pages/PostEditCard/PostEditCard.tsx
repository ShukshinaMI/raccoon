import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { AddPostModel, PostModel } from "../../api/Api";
import apiClient from "../../ApiClient";
import { Button, Card, Col, Form, Input, Row, Skeleton, Space } from "antd";
import TextArea from "antd/lib/input/TextArea";
import "./PostEditCard.scss";
import ImageList from "../../shared/ImageList/ImageList";
import Tags from "../../shared/Tags/Tags";
import { LeftOutlined } from "@ant-design/icons";
import { FormNames } from "../../helpers/helpers";

const cardNameFields: FormNames<PostModel> = {
  postId: "postId",
  title: "title",
  description: "description",
  dateCreate: "dateCreate",
  likes: "likes",
  tags: "tags",
};

const DEFAULT_CARD_VALUES: AddPostModel = {
  title: "",
  description: "",
  tags: [],
};

interface PostEditCardProps {
  isEdit?: boolean;
}

export const PostEditCard = ({ isEdit }: PostEditCardProps) => {
  const [form] = Form.useForm();
  const { id } = useParams();

  let navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id) {
      setLoading(true);
      apiClient.api.getPostData(Number(id)).then((result) => {
        form.setFieldsValue(result.data);
        setLoading(false);
      });
    }
  }, [id]);

  const navigateBack = () => {
    navigate("/posts");
  };

  const onFinish = (values: PostModel) => {
    setLoading(true);
    if (id) {
      apiClient.api
        .updatePostData(Number(id), {
          postId: Number(id),
          title: values.title,
          description: values.description,
          likes: values.likes,
          tags: values.tags,
        })
        .then(() => navigateBack())
        .finally(() => setLoading(true));
    } else {
      apiClient.api
        .addPostData(values)
        .then(() => navigateBack())
        .finally(() => setLoading(true));
    }
  };

  return (
    <Card className="post-edit-card">
      <Row>
        <Button
          className="post-edit-card__button-back"
          type="dashed"
          shape="circle"
          icon={<LeftOutlined />}
          onClick={navigateBack}
        />
        <Col span={12} offset={6}>
          <h2>{isEdit ? "Редактирование поста" : "Создание поста"}</h2>
          <Form
            hidden={loading}
            layout="vertical"
            form={form}
            onFinish={onFinish}
            initialValues={DEFAULT_CARD_VALUES}
            style={{ marginTop: "60px" }}>
            <Form.Item name={cardNameFields.postId} hidden>
              <Input />
            </Form.Item>

            <Form.Item name={cardNameFields.dateCreate} hidden>
              <Input />
            </Form.Item>

            <Form.Item name={cardNameFields.likes} hidden>
              <Input />
            </Form.Item>

            <Form.Item
              name={cardNameFields.title}
              label="Заголовок"
              rules={[{ required: true }, { max: 50 }, { min: 2 }]}>
              <Input showCount maxLength={50} />
            </Form.Item>

            <Form.Item name={cardNameFields.description} label="Описание" rules={[{ max: 500 }]}>
              <TextArea showCount maxLength={500} />
            </Form.Item>

            <Form.Item name={"images"} hidden>
              <ImageList />
            </Form.Item>

            <Form.Item name={cardNameFields.tags}>
              <Tags isEdit />
            </Form.Item>

            <Form.Item style={{ marginTop: "32px" }}>
              <Space>
                <Button onClick={navigateBack}>Отменить</Button>
                <Button type="primary" htmlType="submit">
                  Сохранить
                </Button>
              </Space>
            </Form.Item>
          </Form>
          <Form hidden={!loading}>
            <Form.Item>
              <Skeleton active paragraph={{ rows: 20 }} />
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Card>
  );
};

export default PostEditCard;
