import React, { Component } from 'react';
import Header from './Header';

class IccID extends React.Component {
    constructor() {
        super();
        this.state = {
          textAreaValue: "",
          dataline : [] 
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.test = this.test.bind(this);
      }
    
      handleChange(event) {
        this.setState({ textAreaValue: event.target.value });
      }
      handleSubmit(event) {
        const data = this.state.textAreaValue;
        this.dataline = data.split('\n').reverse()
        const tablebody = document.querySelector('.resulttable')
        let j = '0';
        for ( let i = 0 ; i < this.dataline.length ;  i++ ){
            this.dataline[i] = this.dataline[i].replace('F', '')
            const line = tablebody.insertRow(0);
            const cell = line.insertCell(0);
            cell.innerHTML = this.dataline[i];
        }
        event.preventDefault()
      }
      test(){
        this.setState({ textAreaValue: "" , dataline : []});
        const tablebody = document.querySelector('.resulttable tbody')
        if (tablebody != null) tablebody.remove()
      }
    render() { 
        
        return(
            <React.Fragment>
                <Header/>
                <section className="section">
                    <h1>Corriger les numéros ICCID</h1>
                    <h2>Copier la liste de numéros ci-dessous et cliquer sur "Valider"</h2>
                    <form onSubmit={this.handleSubmit}>
                        <textarea placeholder="Saisissez les numéros ICCID au format '8933890000000000000F'" onClick={this.test} name="idlist" value={this.state.textAreaValue} onChange={this.handleChange} rows="15" cols="33"/>
                        <button type="submit" className="button is-danger">Valider</button>
                    </form>
                    <table className="resulttable">
                    </table>
                </section>
            </React.Fragment>            
        );
    }
}
 
export default IccID;