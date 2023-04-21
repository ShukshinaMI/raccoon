import React from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, Badge, Button, Space, Tooltip } from "antd";
import { HomeOutlined, LogoutOutlined, UserOutlined, BellOutlined, PlusOutlined } from "@ant-design/icons";
import { ReactComponent as Logo } from "../../../icons/raccoon.svg";
import "./MainHeader.scss";
import Search from "antd/lib/input/Search";

export const MainHeader = () => {
  let navigate = useNavigate();

  const countBadge = 30;
  const showLogout = false;

  const onSearch = (value: string) => console.log(value);

  return (
    <div className="main-header" style={{ display: "flex", justifyContent: "space-between" }}>
      <Space onClick={() => navigate("/posts")} style={{ cursor: "pointer" }}>
        <Logo />
        RACCOON
      </Space>
      <Space style={{ columnGap: "20px" }}>
        <Search placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 200 }} />
        <Tooltip color="#C2C6CC" title="Добавить новую запись">
          <Button type="dashed" shape="circle" icon={<PlusOutlined />} onClick={() => navigate("/posts/add")} />
        </Tooltip>
        <Tooltip color="#C2C6CC" title="Уведомления">
          <Badge count={countBadge} overflowCount={10}>
            <Button type="dashed" shape="circle" icon={<BellOutlined />} />
          </Badge>
        </Tooltip>
        <Tooltip color="#C2C6CC" title="Перейти в профиль">
          <Button type="dashed" shape="circle" icon={<HomeOutlined />} onClick={() => navigate("/home")} />
        </Tooltip>
        {showLogout && <Button type="dashed" shape="circle" icon={<LogoutOutlined />} />}
        <Avatar size={40} icon={<UserOutlined />} />
      </Space>
    </div>
  );
};
