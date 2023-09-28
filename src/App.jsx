import { Link } from "react-router-dom";

import './App.css'

import { PATH as PRODUCTS_PATH } from './pages/Products/routes';

function App() {
  return (
    <>
      <Link className="appLink" to={PRODUCTS_PATH}>View all products</Link>
    </>
  )
}

export default App
