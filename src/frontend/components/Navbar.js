import './component_css/navbar.scss';
import logo from './component_elements/logo.png';
import {Link} from "react-router-dom";

export function Navbar(){
    return(
        <>
            <header>
                <div>
                    <img className={'bannerLogo'} src={logo} alt={'Praktyka Lekarska'}/>
                </div>
            </header>
                <ul className={'navList'}>
                    <CustomLink to={"/"}>Strona główna</CustomLink>
                    <CustomLink to={"/lista-badan"}>Lista badań</CustomLink>
                    <CustomLink to={"mapa-punktow"}>Mapa punktów</CustomLink>
                    <CustomLink to={"/about"}>O nas</CustomLink>
                    <CustomLink to={"/kontakt"}>Kontakt</CustomLink>

                </ul>
                <ul className={'navLoginList'}>
                    <CustomLink to={"wyniki-online-start"}>Wyniki online</CustomLink>
                    <CustomLink to={"strefa-pacjenta-login"}>Strefa pacjenta</CustomLink>
                    <CustomLink to={"lekarz-login"}>Logowanie lekarza</CustomLink>
                </ul>
        </>
    )
}
export default Navbar();

function CustomLink({to, children}) {
    return(
        <li>
            <Link to={to}>{children}</Link>
        </li>
    )
}
