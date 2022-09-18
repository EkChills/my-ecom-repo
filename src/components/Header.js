
import { useState } from "react"
import useOnclickOutside from "react-cool-onclickoutside"

export default function Header (headProp) {


  
  const [cartShow, setCartShow] = useState(false)
  const [navState, setNavState] = useState(false)


  const cartShowToggle = () => {
    setCartShow(prev => !prev)
  }
  const ref = useOnclickOutside(() => {
    setCartShow(false)
  })

  const toggleNav =() => {
    setNavState(prev => prev ? false : true)
  }

  const bod = document.querySelector('body')

  if(navState) {
    bod.style.overflow = 'hidden'
  } else {
    bod.style.overflow = 'unset'
  }

  const navRef = useOnclickOutside(() => {
  setNavState(navState ? false : false)
  })




  return (
    <nav className="container  items-center mx-auto p-6 border-b-2 ">
      <div className="justify-between flex items-center">
        <div className="flex space-x-4">
          {<img src='../images/icon-menu.svg' ref={navRef} onClick={toggleNav} className="md:hidden z-50"/>}
          <img src="images/logo.svg"/>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <a href="#">Collections</a>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

     
        {navState  && <div ref={navRef} className="flex fixed flex-col font-bold top-0 left-0 right-1/2 p-10 space-y-6 py-20  z-40 -bottom-0 bg-white">
          <a href="#">Collections</a>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>}        

        <div className="flex space-x-5 relative">
          <div className="relative">
          <img src="images/icon-cart.svg" ref={ref} className="w-10 cursor-pointer" onClick={cartShowToggle}/>
          <div className="absolute p-1 rounded-full text-white bg-Orange -top-2 text-[0.6rem] right-0 font-bold ">{headProp.cart}</div>
          </div>
          <img src="images/image-avatar.png" className="w-10" />
        </div>

       {cartShow && headProp.shoeCount == 0 && <div ref={ref} className="absolute  bg-white shadow-xl md:right-9 top-20 empt z-50">
          <div className="font-bold  border-b-2 py-3 px-5">Cart</div>
          <div className="flex w-full justify-center items-center py-32">
            <span>
              Your cart is empty
            </span>
          </div>
        </div>}

        { cartShow && headProp.shoeCount > 0 && <div ref={ref} className="absolute right-3 flex flex-col space-y-4 max-w-[20rem] pb-5 px-4 bg-white shadow-xl md:right-9 top-20 w-96 z-50">
          <div className="font-bold  border-b-2 py-3 px-5">
            Cart
          </div>

          <div className="flex space-x-3 items-center">
            <img src={headProp.cartPic}  className='w-10 rounded-md'/>
            <p>{`Fall Limited Edition Sneakers $125.00 x ${headProp.shoeCount} $${125*headProp.shoeCount}`}</p>
            <img src='../images/icon-delete.svg ' className="cursor-pointer"  onClick={headProp.del}/>
          </div>

          <a href="#" className="bg-Orange text-center w-[100%] py-2 rounded-md  text-white font-bold text-sm md:text-base" >Checkout</a>
        </div>}

      </div>

    </nav>
  )
}