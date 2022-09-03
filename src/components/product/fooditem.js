import './fooditem.css';
import {useState} from 'react';
// import image from './zomato-image/banner.png';


function Fooditem(props) {
   
    const [price, setPrice] = useState(props.price)

    const button = () => {
        let newprice = props.price - (props.offer/100)*props.price
        setPrice(newprice);
    }
    return (
        <div>
           <div className='food-container'>
                <div className='item'>
                    <div className='img'></div>
                    <div className='details'>
                        <h1>{props.item}</h1>
                        <p>{"Rs."}{price}</p>
                        <p>{props.offer}{"%Offer"}</p>
                        <h5>{props.restaurant}</h5>
                        <button onClick={button}>Apply Offer</button>
                    </div>
                </div>
           </div>
        </div>

    );
                
}

export default Fooditem;
