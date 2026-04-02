import { StrictMode, useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import store from './store.ts'
import routes from './routes/routes.tsx'
import { createBrowserRouter, RouterProvider } from "react-router";
import SplashScreen from './pages/SplashScreen.tsx'

export function Routes() {
  const [showSplashScreen, setShowSplashScreen] = useState(() => !JSON.parse(localStorage.getItem("showedSplashScreen") ?? "false"))
  useEffect(() => {
    setTimeout(() => {
      setShowSplashScreen(false)
      localStorage.setItem("showedSplashScreen", JSON.stringify(true))
    }, 4000);
  }, [])
  return showSplashScreen ? (
    <SplashScreen />) : (
    <RouterProvider router={router} />
  )

}

const router = createBrowserRouter(routes)

const root = createRoot(document.getElementById("root")!)

root.render(
  <StrictMode>
    <Provider store={store}>
      <Routes />
    </Provider>
  </StrictMode>,
)
