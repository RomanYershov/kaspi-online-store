import React, { useState } from "react";


export default function PayForm(props){


function orderInsert(){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ address: address, cardNumber: cardNumber, state: 2 })}


    fetch('https://localhost:5001/api/Order/OrderInsert', requestOptions)
}

const [address, setAddress] = useState("")
const [cardNumber, setCardNumber] = useState("")



const handleSubmit = (event) => {
    event.preventDefault();
    orderInsert()
    alert('Заказ оплачен')
  }

    return(
        <div className="block col-1">
            <h2>Форма оплаты</h2>
           <form onSubmit={handleSubmit}>
           <div style={{paddingBottom: '15px'}}>
                Адрес:
                <input value={address} onChange={(e) => setAddress(e.target.value)} title="test"></input>
            </div>
            <div>
                Карта:
                <input value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} title="test"></input>
            </div>
            <div>
                <button type="submit">Оплатить</button>
            </div>
           </form>
        </div>
    )
}