import React from "react";
import locale from "antd/es/locale/ru_RU";
import { Navigate, Route, Routes } from "react-router-dom";
import { ConfigProvider } from "antd";
import "./App.scss";
import PostFeedRegistry from "./pages/PostFeedRegistry/PostFeedRegistry";
import designTokens from "./antd-design-tokens";
import Home from "./pages/Home/Home";
import PostViewCard from "./pages/PostViewCard/PostViewCard";
import { MainHeader } from "./core/components/MainHeader/MainHeader";
import PostEditCard from "./pages/PostEditCard/PostEditCard";

function App() {
  return (
    <ConfigProvider locale={locale} theme={designTokens}>
      <div className="page">
        <MainHeader />
        <Routes>
          <Route path="/" element={<Navigate to="posts" />} />
          <Route path="/posts" element={<PostFeedRegistry />} />
          <Route path="/posts/view/:id" element={<PostViewCard />} />
          <Route path="/posts/add" element={<PostEditCard />} />
          <Route path="/posts/edit/:id" element={<PostEditCard isEdit />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </ConfigProvider>
  );
}

export default App;
