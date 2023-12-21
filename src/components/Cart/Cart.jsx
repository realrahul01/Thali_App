import { useDispatch, useSelector } from 'react-redux';
import {NavLink} from 'react-router-dom'
import { RiDeleteBin5Fill } from "react-icons/ri";
import { incrementItem, removeItem, decrementItem} from '../../features/counter/counterSlice';


const Cart=()=>{

const cart = useSelector((state)=>state.counter.addCart)
console.log(cart)


const dispatch = useDispatch()

const deleteHandler=(id)=>{
    dispatch(removeItem(id))
}

const incrementHandler=(index)=>{
    dispatch(incrementItem(index))
}

const decrementHandler=(id,quantityId)=>{
    if(quantityId <= 1){
        dispatch(removeItem(id))
    }else{
        dispatch(decrementItem(id))
    }
}

const totalValue = cart.reduce((acc,currentValue)=>{
    return acc + currentValue.price * currentValue.quantity
},0)

    return(
        <section>
            <div className="cart-container">
                <div className="cart-container-left">
                    <div className="cart-container-main">
                    <div className="cart-item">
                        <h1>Thali Items</h1>
                        <p> {cart.length} Items</p>
                    </div>
                    <hr />
                        <div className='addtocart-container'>
                            {cart.length == 0 ? (
                                <div>
                                    <h1 style={{color:'red'}}>Your cart is empty...</h1>                                    
                                </div>
                                ) : (
                                cart.map((x)=>(
                                    <div key={x.id} className='cartMap'>
                                                <img src={x.images} alt="error" className='cartImg' />
                                        <div className='cartItem'>
                                            <p>{x.name}</p>
                                            <div className='btnGp'>
                                                <button onClick={()=>incrementHandler(x.id)} className='btn1'>+</button>
                                                    <span className='controler'>{x.quantity}</span>
                                                <button onClick={()=>decrementHandler(x.id,x.quantity)} className='btn2'>-</button>
                                            </div>
                                            <p className='price'>$ {x.price}</p>
                                            <p style={{color:'red'}}> <RiDeleteBin5Fill onClick={()=>deleteHandler(x.id)}/> </p>
                                        </div>
                                    </div>
                                    
                                    ))
                                )}
                                <NavLink className="back-to-menu" to='/'>Back to Menu</NavLink>
                        </div>
                    </div>
                </div>
                <div className="cart-container-right">
                    <div className="cart-container-right-main">
                        <h2>Summary</h2>
                        <hr />
                        <div className='cart-container-right-amount'>
                            <h3>Total Price</h3>
                            <p>${totalValue}</p>
                        </div>
                        <button className='checkout'>Checkout</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Cart;