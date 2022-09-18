import '../App.css'
export default function ShoeInfo (infoProp) {
  return (
    <div className="flex flex-col mx-auto text-left md:w-1/2 space-y-6 p-5 lg:justify-end">
      <h3 className="text-Orange font-bold ">Sneaker Company</h3>
      <h1 className="text-4xl font-bold max-w-md">Fall Limited Edition Sneakers</h1>
      <p className="max-w-md text-DarkGrayishBlue">These low profile sneakers are your perfect casual companion featuring a durable rubber outer sole. They'll withstand everything the weather can offer</p>
      <div className="flex  sm:space-x-5 md:block">
        <div className="flex space-x-3">
        <h1 className="text-3xl font-bold ">125.00$</h1>
        <div className="p-1 px-2 text-Orange bg-PaleOrange font-bold">50%</div>
        </div>
        <h2 className="text-GrayishBlue">250$</h2>
      </div>

      <div className="flex space-x-6 hover:cursor-pointer" >
        <div className=" justify-center flex  px-5 py-1 items-center space-x-7 bg-LightGrayishBlue rounded-lg">
          <div id="minus" className=" text-3xl text-center font-bold text-Orange rm-btn" onClick={infoProp.dec}>-</div>
          <div id="number" className="text-2xl font-bold count-sel">{infoProp.count}</div>
          <div id="plus" className="text-3xl text-center  font-bold text-Orange add-btn" onClick={infoProp.inc}>+</div>
        </div>
        <div className="px-7 py-1 items-center justify-center rounded-lg  flex bg-Orange text-White cart-btn" onClick={infoProp.cartTog}><img src="images/icon-cart.svg"  />Add to cart</div>
      </div>
    </div>
  )
}