import { Outlet } from 'react-router-dom'
import { getItems } from '../components/Data'
import ItemRow from '../components/ItemRow'

function Items(){
    const items = getItems()
    return(
        <>
            <h1>Item Page</h1>
            <p>Select an item to be shown</p>
            <table>
                <tr>
                    <th>Item</th>
                    <th>Action</th>
                </tr>
                {
                    items.map(item => (
                        <ItemRow key={item.id} item={item} />
                    ))
                }
            </table>

            <Outlet />
        </>
    )
}

export default Items