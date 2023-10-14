import './App.scss';
import {Navbar} from './components/Navbar';
import {Footer} from './components/Footer'
import {MainPage} from "./components/pages/MainPage";
import {About} from "./components/pages/About";
import {Contact} from "./components/pages/Contact"
import {BrowserRouter, Routes, Route, Outlet} from "react-router-dom";

function App() {
    const Layout = () => {
        return(
            <>
                <Navbar/>
                <Outlet/>
                <Footer/>
            </>
        )
    }
  return (
      <>
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Layout/>}>
                    <Route path={"/"} element={<MainPage/>}/>
                    <Route path={"/about"} element={<About/>}/>
                    <Route path={"/kontakt"} element={<Contact/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
      </>
  )
}

export default App
