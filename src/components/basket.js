import React from 'react'


export default function Basket(props) {
  const { cartItems, onAdd, onRemove, onPay } = props;

  const totalPrice = cartItems.reduce((a, c) => a + c.qty * c.cost, 0);

  return (
    <aside className='block col-1'>
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row" style={{ borderBottom: 'solid white .8px', paddingTop: '2px', paddingBottom: '2px' }}>
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => onAdd(item)} className="add">+</button>
              <button onClick={() => onRemove(item)} className="remove">-</button>
            </div>
            <div className="col-2 text-right">
              {item.qty} x ${item.cost.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (

          <div className='row'>
            <div className='col-2'>
              <strong>Total price</strong>
            </div>
            <div className='col-1 text-right'>{totalPrice}</div>
          </div>

        )}

      </div>
      {
        cartItems.length > 0 &&
        <button className='btn btn-success' onClick={() => onPay(true)}>Оплатить</button>
      }

    </aside>
  )
}