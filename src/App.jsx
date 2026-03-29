import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ChapterDetails from './pages/ChapterDetails';
import TestContainer from './pages/TestContainer';
import Result from './pages/Result';

// Protected Route wrapper
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

// Route that redirects to dashboard if already logged in
const PublicRoute = ({ children }) => {
  const { user } = useAuth();
  if (user) {
    return <Navigate to="/" replace />;
  }
  return children;
};

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={
        <PublicRoute>
          <Login />
        </PublicRoute>
      } />
      
      <Route path="/" element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      } />
      
      <Route path="/chapter/:id" element={
        <ProtectedRoute>
          <ChapterDetails />
        </ProtectedRoute>
      } />
      
      <Route path="/test/:id" element={
        <ProtectedRoute>
          <TestContainer />
        </ProtectedRoute>
      } />
      
      <Route path="/result" element={
        <ProtectedRoute>
          <Result />
        </ProtectedRoute>
      } />
      
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-background text-white selection:bg-primary/30">
          <AppRoutes />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
