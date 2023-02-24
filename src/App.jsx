import './styles/App.css';
import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Layout = lazy(() => import('./page/Layout'));
const Dashboard = lazy(() => import('./page/Dashboard'));
const Style = lazy(() => import('./page/Style'));
const State = lazy(() => import('./page/State'));
const Content = lazy(() => import('./page/Content'));
const Architecture = lazy(() => import('./page/Architecture'));
const Props = lazy(() => import('./page/Props'));
const Hook = lazy(() => import('./page/Hook'));
const Redux = lazy(() => import('./page/Redux'));
const ServerRendering = lazy(() => import('./page/ServerRendering'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="state" element={<State />} />
        <Route path="hook" element={<Hook />} />
        <Route path="redux" element={<Redux />} />
        <Route path="style" element={<Style />} />
        <Route path="props" element={<Props />} />
        <Route path="content" element={<Content />} />
        <Route path="server-rendering" element={<ServerRendering />} />
        <Route path="component-achitecture" element={<Architecture />} />
      </Route>
    </Routes>
  );
}

export default App;
