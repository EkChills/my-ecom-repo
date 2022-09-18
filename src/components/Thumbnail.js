import Data from "./Data";

export default function Thumbnail (thumbprop) {

  
  return (
    <>
    <img className={` hidden w-[5rem] rounded-md md:flex hover:opacity-30 hover:border-4 border-Orange transition-all ease-in-out cursor-pointer`}  onClick={()=>thumbprop.toggle(thumbprop.id)} src={thumbprop.pic} />
   </>
  )
}