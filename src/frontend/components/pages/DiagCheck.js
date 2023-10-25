import React from 'react'
import diag_pic from './page_elements/diag_aside_pic.jpg';
import "./page_css/diag_check.scss"

export function DiagCheck() {
  return (
    <>
      <main className='diagCon'>
        <aside className='diagAside'>
          <h1>Sprawdź swoje wyniki nawet bez logowania!</h1>
          <br/>
          <form className='diagForm'>
            <label for='diag_number'><h2>Numer Badania: </h2></label>
            <input name='diag_number' type='number' placeholder="672368" required></input>
            <label for='diag_access_code'><h2>Kod dostępu: </h2></label>
            <input name='diag_access_code' type='password' required></input>
            <label> </label>
            <input type='submit' value='Sprawdź wyniki'/>
          </form>
          <a href="/strefa-pacjenta-login"><h2>Masz już konto? Zaloguj się tutaj!</h2></a>
        </aside>
        <aside className='diagAside'>
          <img src={diag_pic} alt="background"></img>
        </aside>
      </main>
    </>
  )
}
