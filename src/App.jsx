import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './page/Dashboard';
import Rendering from './page/Rendering';
import Layout from './page/Layout';
import Content from './page/Content';
import Architecture from './page/Architecture';

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
