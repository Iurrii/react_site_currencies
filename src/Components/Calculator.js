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
    console.log(elements);
    let countCurrency = elements['count-currency'].value;
    let typeCurrency = elements['type-currency'].value;
    console.log(countCurrency);
    console.log(typeCurrency);
    this.setState({ result: (countCurrency * typeCurrency) });
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="calculator">
        <h3> Калькулятор обмена</h3>
        <div className="block">
          <div>Я хочу</div>
          <div>
            <label>
              <input type="radio" name="radio" defaultValue="0" />
              купить
            </label>
          </div>
          {/* <div>
            <label>
              <input type="radio" name="radio" defaultValue="1" />
              продать
              value for sale
            </label>
          </div> */}

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
            <h4>Результат</h4>
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