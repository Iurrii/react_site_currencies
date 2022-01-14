import React from 'react';
import Calculator from './Calculator.js';
import 'mustard-ui';
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
      <section className="panel">

        <h2> Курс валют на {this.state.date.substring(0, 10)}</h2>
        <div className="panel-body row">

          {Object.keys(this.state.currencyRate).map((keyName) => (
            <div className="col col-lg-3 col-md-6 col-sm-12" key={keyName}>
              <div className="card" key={keyName}>
                <p className="card-title">{keyName}</p>
                <p className="currency-in">{this.state.currencyRate[keyName].Value.toFixed(2)} руб</p>
                <p>за 1 {this.state.currencyRate[keyName].Name}</p>
              </div>
            </div>


          ))}

        </div>
        <Calculator rate={this.state.currencyRate}/>
      </section>
    )
  }
};

export default Rate;