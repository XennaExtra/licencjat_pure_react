import './component_css/landing_sc_buttons.scss'
export function LandingPageShortcutButtons(){
    return(
        <>
            <article className={"scParent"}>
                <section className={"scMap"}>
                    <div className={"cross"}></div>
                    <span className={"scMapText"}>Nasze<br/>placówki</span>
                </section>
                <section className={"scList"}>
                    <div className={"cross"}></div>
                    <span className={"scMapText"}>Lista<br/>badań</span>
                </section>
                <section className={"scCheck"}>
                    <div className={"cross"}></div>
                    <span className={"scMapText"}>Sprawdź<br/>wyniki</span>
                </section>
            </article>

        </>
    )
}
