import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { UIProvider, useColorMode, Button, extendConfig } from "@yamada-ui/react"
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'

const config = extendConfig({
  initialColorMode: "system"
})

// 認証状態をチェックする関数
const isAuthenticated = () => {
  return localStorage.getItem('isLoggedIn') === 'true';
};

// プライベートルートコンポーネント
const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  return isAuthenticated() ? <>{children}</> : <Navigate to="/login" />;
};

function App() {
  return (
    <UIProvider config={config}>
      <AppContent />
    </UIProvider>
  )
}

function AppContent() {
  const { toggleColorMode } = useColorMode()

  return (
    <>
      <Button onClick={toggleColorMode}>切り替え</Button>

      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route 
            path="/home" 
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            } 
          />
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
