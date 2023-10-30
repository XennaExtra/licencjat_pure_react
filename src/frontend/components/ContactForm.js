import React from 'react'
import { Component } from 'react'
import './component_css/contact_form.scss'

export class ContactForm extends Component {

  constructor(props){
    super(props);
    this.state={
      full_name: "",
      patientId: "",
      patientEmail: "",
      patientMessage: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
  return (
    <>
        <h1>Skontaktuj się z nami!</h1>
        <form className='contactForm' action={''}>
            <label htmlFor='full_name'><h2>Imię i nazwisko*</h2></label>
            <input type='text' name='full_name' placeholder='Jan Kowalski' required></input>
            <label htmlFor='patient_id'><h2>Numer pacjenta`</h2></label>
            <input type='number' name='patient_id' placeholder=""></input>
            <label htmlFor='patient_email'><h2>Adres e-mail*</h2></label>
            <input type='email' name='patient_email' placeholder="jan.kowalski@poczta.pl" required></input>
            <label htmlFor='patient-message'><h2>Twoja wiadomość*</h2></label>
            <textarea name='patient_message' placeholder="Twoja wiadomość" required/>
            <label htmlFor='msgSubmit'></label>
            <input name='msgSubmit'type='submit' value='Wyślij wiadomość' className='submitButton'></input>
        </form>
        <h5>* - pole wymagane</h5>
        <h5>` - proszę o podanie, jeżeli jesteś zarejestrowanym pacjentem</h5>
        <h6>Wysyłając wiadomość, zgadzasz się na przetwarzanie swoich danych osobowych przez Praktykę Lekarską w celu odpowiedzi na twoją <br/> wiadomość poprzez email, bądź konto pacjenta. Administratorem danych osobowych jest Praktyka Lekarska. <br/> Dane osobowe nie są wykorzystywane w celach innych niż kontakt z pacjentem.</h6>
    </>
  )
}}
