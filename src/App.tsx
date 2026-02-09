import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from './pages/NotFound';
import { ThemeProvider } from "@/components/ThemeProvider";

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route 
            index 
            element={
              <ThemeProvider>
                <Home /> 
              </ThemeProvider>
            } 
          />
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
