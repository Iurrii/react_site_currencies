import React from "react";
import './Calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,

    }
  }

  static getDerivedStateFromProps(props, state) {
    return { rate: props.rate };
  }

  calcRate = (event) => {
    event.preventDefault();
    let elements = event.target.elements;
    let countCurrency = elements['count-currency'].value;
    let typeCurrency = elements['type-currency'].value;
    let resultCurrent = (countCurrency * typeCurrency).toFixed(2);
    this.setState({ result: resultCurrent });
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="calculator">
        <h3> Калькулятор обмена</h3>
        <div className="block">
          {/* <div>Я хочу</div>
          <div>
            <label>
              <input type="radio" name="radio" defaultValue="0" />
              купить
            </label>
          </div>
          <div>
            <label>
              <input type="radio" name="radio" defaultValue="1" />
              продать
              value for sale
            </label>
          </div> */}
          <h2>Стоимость покупки по курсу ЦБ РФ:</h2>

          <form onSubmit={this.calcRate}>
            <input type="number" defaultValue="100" name="count-currency"/>
            <select name="type-currency">
              {Object.keys(this.props.rate).map((keyName) => (
                <option value={this.props.rate[keyName].Value} key={keyName}>{this.props.rate[keyName].CharCode}</option>
              ))}
            </select>

            <input type="submit" defaultValue="calc" />
          </form>

          <div>
            <ul className="calc-res">
              <li>RUB {this.state.result}</li>
            </ul>
          </div>
        </div>
      </div>

    );
  }
}

export default Calculator;