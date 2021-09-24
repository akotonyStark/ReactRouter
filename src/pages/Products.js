import { Link } from 'react-router-dom'
const Products = () => {
  return (
    <>
      <h2>Products Page</h2>
      <ul>
        <li>
          <Link to='/products/pro'>MacBook Pro</Link>
        </li>
        <li>
          <Link to='/products/air'>MacBook Air</Link>
        </li>
        <li>
          <Link to='/products/ipad'>iPad Pro</Link>
        </li>
      </ul>
    </>
  )
}

export default Products
