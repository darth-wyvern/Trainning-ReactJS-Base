import './App.css';
import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Dashboard = lazy(() => import('./page/Dashboard'));
const Layout = lazy(() => import('./page/Layout'));
const Content = lazy(() => import('./page/Content'));
const Architecture = lazy(() => import('./page/Architecture'));
const Rendering = lazy(() => import('./page/Rendering'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="rendering" element={<Rendering />} />
        <Route path="content" element={<Content />} />
        <Route path="component-achitecture" element={<Architecture />} />
      </Route>
    </Routes>
  );
}

export default App;
