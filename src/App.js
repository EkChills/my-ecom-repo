import React from 'react';
import Header from "./components/Header"
import ShoeInfo from "./components/ShoeInfo"
import ShoeCollection from "./components/ShoeSelection"
import Thumbnail from './components/Thumbnail';
import Data from "./components/Data"
import imageData from './components/imageData';
import useOnclickOutside from 'react-cool-onclickoutside';



export default function App () {
  const [picChange, setPicChange] = React.useState('/images/image-product-1.jpg')
  const [counter, setCounter] = React.useState(0)
  const [itemArray, setItemArray] = React.useState([])
  const [cartItem, setCartItem] = React.useState(0)





  function increase () {
    setCounter(prevCounter => prevCounter + 1)
  }

  function decrease () {
    setCounter(prevCounter => prevCounter <= 0 ? prevCounter + 0 : prevCounter - 1)
  }

  const deleteItem = () => {
    setCartItem(0)
  }




  

  function picClick (id) {
    setPicChange(imageData[id])
    console.log(picChange)
  }



  const cartCLick = () => {
    setCartItem(prevItem => prevItem + counter)
    setCounter(0)
  }

  function prevToggle () {
    let imageEval = imageData.indexOf(picChange) 
    setPicChange((prev) => imageEval <= 0 ? prev : imageData[imageEval - 1])
  }
  
  
  
  function nextToggle () {
    let imageEval = imageData.indexOf(picChange) 
    setPicChange(prev => imageEval >= 3 ? prev : imageData[imageEval + 1])
  }



  

  const Thumb = Data.map(item => <Thumbnail
    id={item.id} 
    pic={item.img} 
    toggle={picClick}
    image={imageData}
    />)

  return(
    <>
    <Header   cart={cartItem} cartPic={picChange} shoeCount={cartItem} del={deleteItem}  />
    <div className="flex flex-col container mx-auto p-6 md:flex-row ">
    <div className='md:w-1/2'>  
      <div className='items-center flex flex-col'>
        <ShoeCollection changed={picChange} prev={prevToggle} next={nextToggle}/>
        <div className='flex space-x-3'>
        {Thumb}
        </div>
      </div>
    </div>
    <ShoeInfo 
    inc={increase} 
    dec={decrease} 
    count={counter}
    cartTog={cartCLick}
     />
    </div>
    </>
  )
}