import React from 'react'
import { useEffect, useState } from 'react'
import { Orders } from './orders'


export default function Header(props) {

    const { isCanPay, ordersCount} = props
    const [orders, setData] = useState([])
    const [isClickOrder, orderPageTrigger] = useState(false)


    useEffect(() => {
        fetch('https://localhost:5001/api/order/GetAll')
            .then(response => response.json())
            .then(data => {
                setData(data)
            })
    }, [])

   


    return (
        <div className='block col-1'>
            <a href='#/orders' onClick={() => { orderPageTrigger(!isClickOrder) }}><strong>Управление заказами ({ordersCount + orders.length})</strong></a>
            {isClickOrder && <Orders />}
        </div>
    )
}