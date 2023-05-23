import { BrowserRouter, Route, Routes } from "react-router-dom"
import IndexPage                        from "./pages/indexPage"
import NotFoundPage                     from "./pages/NotFoundPage"
import "./styles/global.css"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< IndexPage />} />
        <Route path="*" element={ <NotFoundPage /> } />
      </Routes>
    </BrowserRouter>
  )
}
