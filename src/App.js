
import Navbar from "./component/Navbar";
import { useDispatch,useSelector } from "react-redux";
import { calculateTotals } from "./features/cart/cartSlice";
import CartContainer from "./component/CartContainer";
import { useEffect } from "react";
import Modal from "./component/Modal";
function App() {
  const {cartItems}=useSelector((store)=>store.cart)
  const {isOpen}=useSelector((store)=>store.modal)
 
  
  const dispatch=useDispatch();
  useEffect(()=>{
dispatch(calculateTotals())
  },[cartItems])
  return (
    <main>
     {isOpen &&  <Modal/>}
    <Navbar />
    <CartContainer/>
  </main>
  )
}
export default App;
