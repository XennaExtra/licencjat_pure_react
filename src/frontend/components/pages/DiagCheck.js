import React from 'react'
<<<<<<< HEAD
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
=======
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
>>>>>>> 82f0646f9509430efa66a031dd92069611163c90
    </>
  )
}
