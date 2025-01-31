
import { useSelector } from "react-redux";
import {CartIcon,Testing} from "../icons"


/**const {amount}=useSelector((store)=>store.cart) */

const Navbar=()=>{
    const {amount}=useSelector((store)=>store.cart) 
    return(
        <nav>
       <div className="nav-center">
            <h3>redux toolkit </h3>
            <div>
                <Testing />
                <CartIcon />
           
            <div className="amount-container">
            <p className="total-amount">{amount}</p>
            </div>
            </div> 
           
        </div>
    </nav>
    )
}
export default Navbar;




