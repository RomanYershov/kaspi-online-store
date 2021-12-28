import React, { useState } from "react";


export default function PayForm(props){

    const {isCanPay, onPay} = props
    // const [isCanPay, onPay] = useState(false)
    const [address, setAddress] = useState("")
    const [cardNumber, setCardNumber] = useState("")

const orderInsert = () => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ address: address, cardNumber: cardNumber, state: 2 })}


    fetch('https://localhost:5001/api/Order/OrderInsert', requestOptions)
}

const handleSubmit = (event) => {
    event.preventDefault();
    orderInsert()
    onPay(false)
    alert('Заказ оплачен')
  }

   const styles = {
       paddingBottom :{
           paddingBottom: '15px'
       }
   }


    return(
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
        </div>
    )
}