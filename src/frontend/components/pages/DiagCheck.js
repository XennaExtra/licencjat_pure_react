import React, { Component } from 'react'
import diag_pic from './page_elements/diag_aside_pic.jpg';
import "./page_css/diag_check.scss"

export class DiagCheck extends Component {
  constructor(props){
    super(props);
    this.state = {
      numberValue: '',
      codeValue: ''
    };

    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.handleCodeChange = this.handleCodeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleNumberChange(e){
      this.setState({numberValue: e.target.value});
  }

  handleCodeChange(e){
    this.setState({codeValue: e.target.value});
}

  handleSubmit(e){
      alert("Kod dostępu: " +this.state.codeValue +" Number badania: " + this.state.numberValue);
      e.preventDefault();
  }
  render(){
  return (
    <>
      <main className='diagCon'>
        <aside className='diagAside'>
          <h1>Sprawdź swoje wyniki nawet bez logowania!</h1>
          <br/>
          <form className='diagForm' onSubmit={this.handleSubmit}>
            <label for='diag_number'><h2>Numer Badania: </h2></label>
            <input name='diag_number' type='number' value={this.state.numberValue} onChange={this.handleNumberChange} required></input>
            <label for='diag_access_code'><h2>Kod dostępu: </h2></label>
            <input name='diag_access_code' type='password' value={this.state.codeValue} onChange={this.handleCodeChange} required></input>
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
}
