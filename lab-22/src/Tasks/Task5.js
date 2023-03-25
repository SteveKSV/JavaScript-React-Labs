import {Component} from 'react'

class Task5 extends Component {
    constructor(props) {
      super(props);
      this.state = {
        amount: '',
        fromCurrency: 'USD',
        toCurrency: 'EUR',
        convertedAmount: '',
        exchangeRates: null,
      };
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSelectChange = this.handleSelectChange.bind(this);
      this.convertCurrency = this.convertCurrency.bind(this);
    }
  
    componentDidMount() {
      fetch('https://api.exchangerate-api.com/v4/latest/USD')
        .then((response) => response.json())
        .then((data) => this.setState({ exchangeRates: data.rates }))
        .catch((error) => console.log(error));
    }
  
    handleInputChange(event) {
      this.setState({ amount: event.target.value });
    }
  
    handleSelectChange(event) {
      if (event.target.name === 'fromCurrency') {
        this.setState({ fromCurrency: event.target.value });
      } else if (event.target.name === 'toCurrency') {
        this.setState({ toCurrency: event.target.value });
      }
    }
  
    convertCurrency(event) {
      event.preventDefault();
      const { amount, fromCurrency, toCurrency, exchangeRates } = this.state;
      const conversionRate = exchangeRates[toCurrency] / exchangeRates[fromCurrency];
      const convertedAmount = amount * conversionRate;
      this.setState({ convertedAmount: convertedAmount });
    }
  
    render() {
      const { amount, fromCurrency, toCurrency, convertedAmount, exchangeRates } = this.state;
  
      if (!exchangeRates) {
        return <p>Loading...</p>;
      }
  
      return (
        <div>
          <form onSubmit={this.convertCurrency}>
            <label>
              Amount:
              <input
                type="number"
                value={amount}
                onChange={this.handleInputChange}
              />
            </label>
            <br />
            <label>
              From:
              <select
                name="fromCurrency"
                value={fromCurrency}
                onChange={this.handleSelectChange}
              >
                {Object.keys(exchangeRates).map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
            </label>
            <br />
            <label>
              To:
              <select
                name="toCurrency"
                value={toCurrency}
                onChange={this.handleSelectChange}
              >
                {Object.keys(exchangeRates).map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
            </label>
            <br />
            <button type="submit">Convert</button>
          </form>
          <p>Converted amount: {convertedAmount}</p>
        </div>
      );
    }
  }
  
export default Task5;