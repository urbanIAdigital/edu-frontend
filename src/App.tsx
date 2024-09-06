// src/App.tsx
import { FC, ReactNode } from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { useAuth } from "./hooks/useAuth";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import DynamicIFrame from "./pages/DynamicIFrame";

const ProtectedRoute: FC<{ children: ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/" />;
};

const App: FC = () => {
  return (
    <AuthProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path={`/contrato/:contrato_id`}
              element={
                <ProtectedRoute>
                  <DynamicIFrame />
                </ProtectedRoute>
              }
            />
            <Route path="/*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </AuthProvider>
  );
};

export default App;
