import foodList from "../../services/foodList";
import foodLogo from '../../images/logo1.png'
import { useDispatch } from "react-redux";
import { thaliList } from "../../features/counter/counterSlice";


const Home=()=>{

const dispatch= useDispatch()


const addToThaliHandler=(x)=>{
    dispatch(thaliList(x))
}

let item = foodList.map((x,index)=>{
    return (
        <div key={index}>
            <div className="food-card">
                <img src={x.images} alt={x.name} className="food-image" />
                <div className="food-details">
                    <h3>{x.name}</h3>
                    <p>${x.price}</p>
                    <button className="addToCart" onClick={()=>addToThaliHandler(x)}>add to Thali</button>
                </div>
            </div>
        </div>
    )
})

    return (
        <>
        <section>
                <div className="HomeBanner">
                    <div className="bannerHadingBox">
                        <div className="foodLogo">
                             <h1>Thali</h1>
                             <img src={foodLogo} alt='error'/>
                        </div>
                        <p>Best Resturant in the world</p>
                        <a href="#orderBox"><button id="orderNow">Order Now</button></a>
                    </div>
                </div>
        </section>


        <div id="orderBox">
            <div className="foot-list">
                <h2>List of your favourite food item</h2>
                <div className="cardBox">
                    {item}
                </div>
            </div>
        </div>
        </>
    )
}
export default Home;