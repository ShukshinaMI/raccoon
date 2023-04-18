import React from "react";
import locale from "antd/es/locale/ru_RU";
import { Navigate, Route, Routes } from "react-router-dom";
import { ConfigProvider } from "antd";
import "./App.scss";
import PostFeed from "./pages/PostFeed/PostFeed";
import designTokens from "./antd-design-tokens";
import Home from "./pages/Home/Home";

function App() {
    return (
        <ConfigProvider locale={locale} theme={designTokens}>
            <div className="page">
                <Routes>
                    <Route path="/" element={<Navigate to="posts" />} />
                    <Route path="/posts" element={<PostFeed />} />
                    <Route path="/home" element={<Home />} />
                </Routes>
            </div>
        </ConfigProvider>
    );
}

export default App;
