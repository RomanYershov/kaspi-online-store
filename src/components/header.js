import React from 'react'
import { useEffect, useState } from 'react'


export default function Header(props){

    const { isCanPay } = props
    const [ orders, setData ] = useState([])
    

    useEffect(() => {
        fetch('https://localhost:5001/api/order/GetAll')
        .then(response => response.json())
        .then(data => {
            setData(data)
        })
       }, [])
    
    const useOrdersUdate = () => {
        if(isCanPay){
            console.log(isCanPay)
            fetch('https://localhost:5001/api/order/GetAll')
                .then(response => response.json())
                .then(data => {
                    setData(data)
                })
        }
    }
    
    return(
        <div className='block col-1'>
            <h2>Header</h2>
            <strong>У вас {orders.length} заказов</strong>
          
        </div>
    )
}