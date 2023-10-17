import './component_css/landing_sc_buttons.scss'

export function LandingPageShortcutButtons(){
    return(
        <>
            <article className={"scParent"}>
                <a href="/mapa-punktow" className='scMap'>
                    <div className={"cross"}></div>
                    <span className={"scMapText"}>Nasze<br/>placówki</span>
                </a>
                <a className={"scList"} href="/lista-badan">
                    <div className={"cross"}></div>
                    <span className={"scMapText"}>Lista<br/>badań</span>
                </a>
                <a className={"scCheck"} href="/wyniki-online-start">
                    <div className={"cross"}></div>
                    <span className={"scMapText"}>Sprawdź<br/>wyniki</span>
                </a>

            </article>

        </>
    )
}


