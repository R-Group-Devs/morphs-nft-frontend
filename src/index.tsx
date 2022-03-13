import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import HomePage from './pages/HomePage';
import MorphsByAddressPage from './pages/MorphsByAddressPage';
import MorphDetailsPage from './pages/MorphDetailsPage';
import AlignmentsPage from './pages/AlignmentsPage';
import MorphsByAlignmentPage from './pages/MorphsByAlignmentPage';
import ConnectWalletPage from './pages/ConnectWalletPage';
import SearchTestPage from './pages/SearchTestPage';
import './polyfills';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/address/:addressOrName" element={<MorphsByAddressPage />} />
          <Route path="/token/:tokenId" element={<MorphDetailsPage />} />
          <Route
            path="/search-test"
            element={
              <Suspense fallback={null}>
                <SearchTestPage />
              </Suspense>
            }
          />
          <Route path="/alignments" element={<AlignmentsPage />} />
          <Route path="/alignment/:sigil" element={<MorphsByAlignmentPage />} />
          <Route path="/connect" element={<ConnectWalletPage />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </App>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
