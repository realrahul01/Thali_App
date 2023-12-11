import { useSelector } from 'react-redux';
import {NavLink} from 'react-router-dom'
import { RiDeleteBin5Fill } from "react-icons/ri";


const Cart=()=>{

const cart = useSelector((state)=>state.counter.addCart)
console.log(cart)

    return(
        <section>
            <div className="cart-container">
                <div className="cart-container-left">
                    <div className="cart-container-main">
                    <div className="cart-item">
                        <h1>Thali Items</h1>
                        <p> 0 Items</p>
                    </div>
                    <hr />
                        <div className='addtocart-container'>
                            {cart.length == 0 ? (
                                <div>
                                    <h1>Your cart is empty</h1>                                    
                                </div>
                                ) : (
                                cart.map((x,index)=>(
                                    <div key={index} className='cartMap'>
                                            <img src={x.images} alt="error" className='cartImg' />
                                        <div className='cartItem'>
                                            <p>{x.name}</p>
                                            <div className='btnGp'>
                                                <button className='btn1'>+</button>
                                                    <span className='controler'>0</span>
                                                <button className='btn2'>-</button>
                                            </div>
                                            <p>$ {x.price}</p>
                                            <p> <RiDeleteBin5Fill /> </p>
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
                            <p>${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}</p>
                        </div>
                        <button className='checkout'>Checkout</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Cart;