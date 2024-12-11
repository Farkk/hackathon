import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Catalog from "./pages/Catalog.jsx";
import Nav from "./componets/navigation/nav.jsx";
import Search from "./componets/search/search.jsx";
import Trends from "./pages/Trends.jsx";

// Оборачиваем все в BrowserRouter
const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
    <BrowserRouter>
        {/* Навигация и поиск размещаем вне Routes, чтобы они показывались на всех страницах */}
        <div className="container">
            <Nav />
            <Search />
            <Routes>
                {/* Главная страница */}
                <Route path="/" element={<App />} />
                {/* Страница каталога с параметром category */}
                <Route path="/catalog/:category" element={<Catalog />} />
                <Route path="/trends" element={<Trends />} />
            </Routes>
        </div>
    </BrowserRouter>
);
