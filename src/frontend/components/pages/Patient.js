import React from 'react'
import diag_pic from './page_elements/diag_aside_pic.jpg';
import "./page_css/diag_check.scss"
export function Patient() {
  return (
    <>
      <main className='diagCon'>
        <aside className='diagAside'>
          <h1>Jesteś zarejestrowanym pacjentem? Zaloguj się tutaj!</h1>
          <br/>
          <form className='diagForm'>
            <label for='patient_id'><h2>Numer Pacjenta: </h2></label>
            <input name='patiend_id' type='number' placeholder="672368" required></input>
            <label for='patient password'><h2>Hasło: </h2></label>
            <input name='patient_password' type='password' required></input>
            <label> </label>
            <input type='submit' value='Zaloguj się'/>
          </form>
          <a href="/wyniki-online-start"><h2>Nie masz konta? Sprawdź swoje wyniki tutaj!</h2></a>
        </aside>
        <aside className='diagAside'>
          <img src={diag_pic} alt="background"></img>
        </aside>
      </main>
    </>
  )
}
