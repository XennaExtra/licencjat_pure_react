import './App.scss';
import {Navbar} from './components/Navbar';
import {Footer} from './components/Footer'
import {MainPage} from "./components/pages/MainPage";
import {About} from "./components/pages/About";
import {Contact} from "./components/pages/Contact"
import { DiagCheck } from './components/pages/DiagCheck';
import { DiagList } from './components/pages/DiagList';
import { Medic } from './components/pages/Medic';
import { Patient } from './components/pages/Patient';
import { PointMap } from './components/pages/PointMap';
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
                    <Route path={"/lista-badan"} element={<DiagList/>}/>
                    <Route path={"/mapa-punktow"} element={<PointMap/>}/>
                    <Route path={"/wyniki-online-start"} element={<DiagCheck/>}/>
                    <Route path={"/strefa-pacjenta-login"} element={<Patient/>}/>
                    <Route path={"/lekarz-login"} element={<Medic/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
      </>
  )
}

export default App
