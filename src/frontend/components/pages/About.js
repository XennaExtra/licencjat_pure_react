import './page_css/about.scss'
export function About(){
    return(
        <main className={"aboutCon"}>
            <div id={"fullSize"}>
                <h2>Witaj w Praktyce Lekarskiej</h2>
            </div>
            <section className='aboutSec'>
                Praktyka Lekarska jest prywatną kliniką lekarską zajmującą się większością badań z ogólnej medycyny.
                <br/>
                Oferujemy bardzo duży wybór badań oraz konsultacji dostępnych <b>również bez skierowania</b>.
                <br/>
                W naszych placówkach możesz liczyć na przyjazną i kompleksową obsługę zapewnianą przez naszych specjalistów.
                <br/>
                Wielu naszych pacjentów korzysta z Konta Pacjenta za pomocą którego są w stanie: <wbr/>
                    <ul className='aboutList'>
                        <li>Sprawdzać wyniki zleconych badań</li>
                        <li>Przeglądać historię badań niezależnie od daty wykonania</li>
                        <li>Dodawać komentarze do badań w celu uzykania rekomendacji od lekarza</li>
                    </ul>
                <br/>
                Dla pacjentów nieposiadających Konta Pacjenta, wprowadziliśmy opcję sprawdzenia pojedynczego wyniku po podaniu prawidłowego Numeru Badania.
                <br/>
                Jeżeli chcesz założyć Konto Pacjenta, poproś lekarza prowadzącego, aby założył twoje Konto.        
            </section>
            
        </main>
    )
}