import React, { Component } from 'react'
import axios from 'axios'
export class DiagList extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
    };
  }

  async componentDidMount(){
     const r = await fetch('http://127.0.0.1:4000/fetchers/fetchDiagList', {
      headers: {
        'Cache-Control' : 'no-cache',
        'Content-type' : 'application/json'
      },
    }).then ((response)=>response.json())
    .then((data)=>this.setState({data}))
    .catch((error)=>console.error("Błąd podczas pobierania danych: "+ error))
    console.log(r);
  }
  render(){
  return (
    <main>
      Tutaj znajdziesz listę badań oferowanych przez nasze placówki
      <table>
        <tr>
          <th>Identyfikator Badania</th>
          <th>Nazwa Badania</th>
          <th>Kategoria Badania</th>
        </tr>
        {this.state.data.map((item) => (
          <tr>
            <td key={item.id_badania}>{item.id_badania}</td>
            <td>{item.nazwa_badania}</td>
            <td>{item.kategoria_badania}</td>
          </tr>
        ))}
      </table>
    </main>
  )
}
}