import React from 'react';
import Calculator from './Calculator.js';
import './Rate.css'


class Rate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      currencyRate: { }
    }
    this.currency = ['USD', 'EUR', 'CAD', 'AMD'];
  }

  getRate = () => {
    fetch("https://www.cbr-xml-daily.ru/daily_json.js")
      .then(data => {

        return data.json();
      })
      .then(data => {

        this.setState({ date: data.Date });
        let result = {};
        for (let i = 0; i < this.currency.length; i++){
          result[this.currency[i]] = data.Valute[this.currency[i]];
        }

        this.setState({ currencyRate: result });
        console.log(result);
      });
  };
  
  componentDidMount() {
    this.getRate();
  }

  render() {
    return (
      <section className="rate">

        <h3> Курс валют на {this.state.date.substring(0, 10)}</h3>
        <div className="flex-container">

          {Object.keys(this.state.currencyRate).map((keyName) => (
            <div className="block flex-item" key={keyName}>
              <div className="currency-name">{keyName}</div>
              <div className="currency-in">{this.state.currencyRate[keyName].Value.toFixed(2)} руб</div>
              <p>за 1 {this.state.currencyRate[keyName].Name}</p>
            </div>
          ))}

        </div>
        <Calculator rate={this.state.currencyRate}/>
      </section>
    )
  }
};

export default Rate;


// let palochka = {
//   crabovaya: { miaso: "crab" },
//   twix: { miaso: "otsytstvyet"}
// }


// console.log(Object.entries(palochka));
// console.log(Object.entries(palochka)[0]);
// console.log(Object.entries(palochka)[0][1]);
// console.log(Object.entries(palochka)[0][1].miaso);