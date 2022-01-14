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
      <div className="calculator panel">
        <h3> Калькулятор обмена</h3>
        <div className="panel-body">
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
          <h4>Стоимость покупки по курсу ЦБ РФ:</h4>

          <form className="form-control-group" onSubmit={this.calcRate}>
            <input type="number" defaultValue="100" name="count-currency"/>
            <select name="type-currency">
              {Object.keys(this.props.rate).map((keyName) => (
                <option value={this.props.rate[keyName].Value} key={keyName}>{this.props.rate[keyName].CharCode}</option>
              ))}
            </select>

            <input type="submit" className="button-primary" defaultValue="calc" />
          </form>

          <div>
            <p>{this.state.result} РУБ</p>
          </div>
        </div>


      </div>


    );
  }
}

export default Calculator;