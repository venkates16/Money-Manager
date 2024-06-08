// Write your code here

import './index.css'

const Moneydetails = userddetaile => {
  const {detaile} = userddetaile
  console.log(detaile)
  const {balance, income, expense} = detaile
  return (
    <>
      <div className="moneyCard">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div>
          <p>Your Balance</p>
          <p data-testid="balanceAmount">Rs {balance}</p>
        </div>
      </div>
      <div className="moneyCard_1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div>
          <p>Your Income</p>
          <p data-testid="incomeAmount">Rs {income}</p>
        </div>
      </div>
      <div className="moneyCard_2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div>
          <p>Your Expenses</p>
          <p data-testid="expensesAmount">Rs {expense}</p>
        </div>
      </div>
    </>
  )
}

export default Moneydetails
