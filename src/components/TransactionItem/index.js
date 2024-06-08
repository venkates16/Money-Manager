// Write your code here

import './index.css'

const TranscationItems = props => {
  const {obj, deleteListItem} = props
  const {title, amount, type, uniqueNo} = obj
  console.log('hii')
  const deleteItem = () => {
    deleteListItem(uniqueNo)
  }
  return (
    <div>
      <li>
        <p>{title}</p>
        <p>{amount}</p>
        <p>{type}</p>
        <button className="bin" onClick={deleteItem} data-testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png "
            className="img"
            alt="delete"
          />
        </button>
      </li>
    </div>
  )
}

export default TranscationItems
