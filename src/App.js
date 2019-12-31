import React, { Component } from 'react';
import './App.css';

class App extends Component{

  constructor () {
    super()
    this.state = {
      isFeching: false,
      invalidValue: false,
      win: null,
      incomplet: false
    }
    this.handleSearch = this.handleSearch.bind(this)
  }

  jogos = [
    [9,19,23,47,51,60],
    [5,12,17,43,46,57],
    [14,23,24,32,34,44],
    [2,4,7,21,22,31],
    [7,15,16,25,26,43],
    [2,3,7,20,30,57],
    [3,12,14,19,27,49],
    [1,15,31,45,59,60],
    [3,5,17,31,40,48],
    [2,23,34,44,56,60],
    [7,27,40,55,56,59],
    [11,17,29,31,47,54],
    [8,16,21,24,38,48],
    [1,14,25,26,43,49],
    [3,4,13,15,19,28],
    [18,25,26,27,34,46],
    [13,23,27,32,35,44],
    [4,5,37,49,55,60],
    [14,15,22,38,47,59],
    [10,12,19,26,31,58],
    [6,23,37,44,50,51],
    [5,28,33,39,47,51],
    [10,12,25,27,30,37],
    [6,11,13,19,33,49],
    [13,15,31,35,40,56],
    [1,11,25,44,50,58],
    [7,12,19,21,37,41],
    [25,27,33,45,55,57],
    [1,16,20,26,27,53],
    [2,4,14,25,41,59],
    [10,15,34,41,55,59],
    [11,22,38,42,47,53],
    [1,4,7,8,25,45],	
    [1,12,19,21,23,34],	
    [1,3,12,19,22,42],	
    [8,13,16,20,29,38],	
    [7,17,23,29,35,39],	
    [9,14,26,33,38,47],	
    [20,30,34,44,51,59],	
    [4,16,24,29,36,39],	
    [20,39,41,50,51,56],	
    [17,22,26,27,30,38],	
    [8,16,21,26,43,49],	
    [1,14,24,25,38,48],
    [2,4,14,25,44,50],
    [2,4,14,25,44,59],
    [2,4,14,25,50,59],
    [2,4,14,44,50,59],
    [2,4,25,44,50,59],
    [2,14,25,44,50,59],
    [4,14,25,44,50,59]
  ];

  handleSearch (e) {
    this.setState({
      invalidValue: false,
      win: null,
      incomplet: false
    })
    const value = e.target.value;
    const keyCode = e.which || e.keyCode;
    const ENTER = 13;
    let valueCleaned = [];
    let resultado = []
    // console.log('change', keyCode)
    if (keyCode === ENTER) {
      if (value.indexOf('-') > 0) {
        valueCleaned = value.split('-');
        this.resultVerify(valueCleaned)
      } else if (value.indexOf(',') > 0){
        valueCleaned = value.split(',');
        this.resultVerify(valueCleaned)
      } else {
        this.setState({
          invalidValue: true
        })
      }
    }
  }

  resultVerify (value) {

    if(value.length < 6) {
      this.setState({ incomplet: true })
      return
    }
    let finalResult = [];

    for (let i = 0; value.length > i; i++) {
      const num = parseInt(value[i]);
      if(isNaN(num)) {
        this.setState({
          invalidValue: true
        });
        return
      } else {
        finalResult.push(num);
      }
    }

    if(!this.state.invalidValue) {
        const strFinalResult = finalResult.toString();
        for (let i = 0; this.jogos.length > i; i++){
          if (this.jogos[i].toString() === strFinalResult) {
            this.setState({ win: true });
            break;
          } else {
            this.setState({ win: false })
          }
        }
    }
  }

  render() {
    return (
      <div>
        <div className="search">
        <p>Insira os números separados por hífen ou vírgula:</p>
        <input
          type="search"
          placeholder="Ex.: 1-12-15-26-38-40"
          onKeyUp={this.handleSearch}
        />
        </div>
        {this.state.incomplet && <div>
          O jogo inserido está incompleto!
        </div>}
        {this.state.invalidValue && <div>
          O valor inserido não é válido
        </div>}
        {this.state.win && <div>
          Você está rico!!!
        </div>}
        {this.state.win === false && <div>
          Não foi dessa vez, otário!
        </div>}
    </div>
    );
  }

}






export default App;
