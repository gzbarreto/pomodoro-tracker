import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { History } from "./pages/History"
import { Configuration } from "./pages/Settings"
import { DefaultLayout } from "./layout/DefaultLayout"

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/settings" element={<Configuration />} />
      </Route>
    </Routes>
  )
}
