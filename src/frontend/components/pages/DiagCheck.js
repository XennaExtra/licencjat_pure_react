import React from 'react'
import './page_css/diag_check.scss'
export function DiagCheck() {
  return (
    <>
    <main className='diagCon'>
      <aside className={'diagAside'}>
      <span className='center'><h1>Sprawdź wyniki badań bez konta pacjenta</h1></span>
        <form className={'diagForm'}>
            <label for='diag_number_id'><h2>Numer badania: </h2></label>
            <input type={'number'} name="diag_number_id" placeholder="849285" required></input>
            <label for='diag_passcode'><h2>Kod dostępu: </h2></label>
            <input type='password' name="diag_passcode" required></input>
            <label> </label>
            <input type="submit" value="Sprawdź wyniki"></input>
        </form>
      </aside>
      <aside className='diagAside'>
        wefgihwoiewhgoewheoghi
      </aside>
    </main>
    </>
  )
}
