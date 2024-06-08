import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import Moneydetails from '../MoneyDetails'
import TranscationItems from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    dataIncome: [],
    title: '',
    amount: '',
    balance: 0,
    income: 0,
    expense: 0,
    type: '',
  }

  onSubmitAdd = event => {
    event.preventDefault()
    const {title, amount, balance, income, expense, type} = this.state
    const parse = parseInt(amount)
    if (type === 'Income') {
      this.setState(pre => ({
        balance: pre.balance + parse,
        income: pre.income + parse,
      }))
    } else {
      this.setState(pre => ({
        balance: pre.balance - parse,
        expense: pre.expense + parse,
      }))
    }
    const obj = {
      uniqueNo: uuidv4(),
      title,
      amount,
      type,
    }

    this.setState(previous => ({
      dataIncome: [...previous.dataIncome, obj],
      amount: '',
      title: '',
      type: '',
    }))
  }

  InputTitle = event => {
    this.setState({title: event.target.value})
  }

  InputAmout = event => {
    this.setState({amount: event.target.value})
  }

  selectAmount = event => {
    this.setState({type: event.target.value})
  }

  deleteListItem = id => {
    const {dataIncome} = this.state

    const detailsDelete = dataIncome.filter(item => item.uniqueNo.includes(id))

    // console.log(detailsDelete[0].amount)

    const {amount, type} = detailsDelete[0]
    const chag = parseInt(amount)
    if (type === 'Expenses') {
      this.setState(prev => ({
        balance: prev.balance + chag,
        expense: prev.expense - chag,
      }))
    } else {
      this.setState(pre => ({
        balance: pre.balance - chag,
        income: pre.income - chag,
      }))
    }
    const newObj = dataIncome.filter(each => each.uniqueNo !== id)
    this.setState({
      dataIncome: newObj,
    })
  }

  render() {
    const {balance, income, expense, dataIncome, amount, title} = this.state
    console.log(dataIncome)
    const userMoneyDetails = {
      balance,
      income,
      expense,
    }

    return (
      <div className="container">
        <div className="detailes">
          <h1>Hi, Richard</h1>
          <p>
            Welcome back to your <span className="highlity">money manager</span>
          </p>
        </div>
        <div className="MoneyDetails">
          <Moneydetails detaile={userMoneyDetails} />
        </div>
        <div className="maxDevices">
          <div className="formDetailes">
            <form onSubmit={this.onSubmitAdd}>
              <h1>Add Transaction</h1>
              <label htmlFor="Title">Title</label>
              <input
                id="Title"
                type="text"
                value={title}
                onChange={this.InputTitle}
              />
              <label htmlFor="amount">Amount</label>
              <input
                id="amount"
                value={amount}
                type="text"
                onChange={this.InputAmout}
              />
              <label htmlFor="type">Type</label>
              <select onClick={this.selectAmount}>
                {transactionTypeOptions.map(each => (
                  <option id={each.optionId} key={each.optionId}>
                    {each.displayText}
                  </option>
                ))}
              </select>
              <div>
                <button className="button">Add</button>
              </div>
            </form>
          </div>
          <ul>
            <h1>History</h1>
            <li>
              <p>Title</p>
              <p>Amount</p>
              <p>Type</p>
            </li>
            {dataIncome.map(each => (
              <TranscationItems
                obj={each}
                deleteListItem={this.deleteListItem}
                key={each.uniqueNo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default MoneyManager
