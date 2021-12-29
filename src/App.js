
import './App.css';
import Header from './components/header';
import Main from './components/main';
import Basket from './components/basket';
import { useEffect, useState } from 'react';
import PayForm from './components/PayForm';


function App(props) {
  const [products, setData] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [isCanPay, setOrderState] = useState()


  useEffect(() => {
    fetch('https://localhost:5001/api/Products/GetProducts')
      .then(response => response.json())
      .then(data => {
        setData(data)
      })
  }, [])



  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  }

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  const onPay = (isPaid) => {
    setOrderState(isPaid)
    { !isPaid && setCartItems([]) }
  }



  return (
    <div className="App">
      <Header isCanPay={isCanPay} setOrderState={setOrderState} />
      <div className='row'>
        <Main onAdd={onAdd} onRemove={onRemove} products={products} />
        {!isCanPay && <Basket onPay={onPay} onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />}
        {isCanPay && <PayForm cartItems={cartItems} isCanPay={isCanPay} onPay={onPay} />}
      </div>
    </div>
  );

}

export default App


