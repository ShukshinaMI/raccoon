import React from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, Badge, Button, Space, Tooltip } from "antd";
import { HomeOutlined, LogoutOutlined, UserOutlined, BellOutlined } from "@ant-design/icons";
// @ts-ignore
import { ReactComponent as Logo } from "../../../icons/raccoon.svg";
import "./MainHeader.scss";

export const MainHeader = () => {
  let navigate = useNavigate();

  const countBadge = 30;
  const showLogout = false;

  return (
      <div className="main-header" style={{ display: "flex", justifyContent: "space-between" }}>
        <Space onClick={() => navigate("/posts")} style={{ cursor: "pointer" }}>
          <Logo />
          RACCOON
        </Space>
        <Space style={{ columnGap: "20px" }}>
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
