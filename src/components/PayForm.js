import React, { useState } from "react";


export default function PayForm(props) {

    const { isCanPay, onPay, cartItems, onUpdateOrdersCount } = props

    const [address, setAddress] = useState("")
    const [cardNumber, setCardNumber] = useState("")


    const totalPrice = cartItems.reduce((a, c) => a + c.qty * c.cost, 0);

    const orderInsert = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ address: address, cardNumber: cardNumber, state: 2 })
        }


        fetch('https://localhost:5001/api/Order/OrderInsert', requestOptions)
            .then(response => {
                if (response.ok) {
                    onUpdateOrdersCount(1)
                    onPay(false)
                    alert('Заказ оплачен')
                }
                else{
                    alert('Необходимо заполнить форму оплаты')
                }
            })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        orderInsert()
    }

    const styles = {
        paddingBottom: {
            paddingBottom: '15px'
        }
    }


    return (
        <div className="block col-1">
            <h2>Форма оплаты</h2>
            <form onSubmit={handleSubmit}>
                <div style={styles.paddingBottom}>
                    Адрес:
                    <input value={address} onChange={(e) => setAddress(e.target.value)}></input>
                </div>
                <div style={styles.paddingBottom}>
                    Карта:
                    <input value={cardNumber} onChange={(e) => setCardNumber(e.target.value)}></input>
                </div>
                <div>
                    <button type="submit">Оплатить</button>
                </div>
            </form>
            <div>
                {cartItems.map((item) => (
                    <div key={item.id} className="row" style={{ borderBottom: 'solid white .8px', paddingTop: '2px', paddingBottom: '2px' }}>
                        <div className="col-2">{item.name}</div>
                        <div className="col-2 text-right">
                            {item.qty} x ${item.cost.toFixed(2)}
                        </div>
                    </div>
                ))}
                <div className='row'>
                    <div className='col-2'>
                        <strong>Total price</strong>
                    </div>
                    <div className='col-1 text-right'>{totalPrice}</div>
                </div>
            </div>
        </div>
    )
}