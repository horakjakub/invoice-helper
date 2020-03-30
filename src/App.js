import React from 'react';
import logo from './logo.svg';
import './App.css';
import InvoicePage from './pages/invoices-page';
import LoginPage from './pages/login-page';
import ErrorBoundary from './components/error-bounry';

function App() {
  return (
    <ErrorBoundary>
      <InvoicePage />
      <LoginPage />
    </ ErrorBoundary>
  )
}

export default App;
