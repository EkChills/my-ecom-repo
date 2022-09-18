import Thumbnail from "./Thumbnail"


export default function ShoeCollection (mprop) {
  return(
    <div className="relative">
      <div onClick={mprop.next} className="absolute right-4 bottom-1/2 bg-white p-3 rounded-full flex justify-center items-center md:hidden" >
        <img src="../images/icon-next.svg" className=""/>
      </div>

      <div onClick={mprop.prev} className="bg-white p-3 rounded-full flex justify-center left-4 items-center absolute bottom-1/2 md:hidden">
      <img src="../images/icon-previous.svg" className="" />
      </div>

      <img src={(`${mprop.changed}`)} className="md:w-[22rem] md:rounded-lg mb-3"/>
    </div>
  )
}