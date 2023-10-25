import React from 'react'
import diag_pic from './page_elements/diag_aside_pic.jpg';
import "./page_css/diag_check.scss"
export function Medic() {
  return (
    <>
      <main className='diagCon'>
        <aside className='diagAside'>
          <h1>Witaj w strefie lekarza!</h1>
          <br/>
          <form className='diagForm'>
            <label for='patient_id'><h2>Numer Lekarza: </h2></label>
            <input name='patiend_id' type='number' placeholder="672368" required></input>
            <label for='patient password'><h2>Hasło: </h2></label>
            <input name='patient_password' type='password' required></input>
            <label> </label>
            <input type='submit' value='Zaloguj się'/>
          </form>
        </aside>
        <aside className='diagAside'>
          <img src={diag_pic} alt="background"></img>
        </aside>
      </main>
    </>
  )
}
