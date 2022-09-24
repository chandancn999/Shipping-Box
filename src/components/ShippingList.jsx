import React from 'react'
import { useState } from "react"
import ShippingForm from './ShippingForm'


function ShippingList() {
    const [items, setItems] = useState([])

    function addToList(item) {
        console.log(item)
        const itemsCopy = [...items]
        itemsCopy.push(item)
        setItems(itemsCopy)
    }
    return (
        <div className='block'>
            <ShippingForm addToListCallback={(value) => addToList(value)} />
            <div>
                <table>
                    <thead>
                        <th>Name</th>
                        <th>Title</th>
                        <th>Weight</th>
                        <th>Color</th>
                        <th>Destination</th>
                    </thead>
                    <tbody>
                        {
                            items.map(item => {
                                return (
                                    <tr key={item.name}>
                                        <td>{item.name}</td>
                                        <td>{item.title}</td>
                                        <td>{item.weight}</td>
                                        <td style={{ backgroundColor: item.color }}>{item.color}</td>
                                        <td>{item.destination}</td>
                                    </tr>

                                )
                            })
                        }
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default ShippingList