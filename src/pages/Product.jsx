import {useState, useEffect} from "react";
import {products} from "../constants"
function Product(){
	return(
<div className=" flex justify-start bg-transparent p-4 gap-10  items-center flex-wrap">
{products.map((e,index)=>{
	return (
		<div  className="flex  border-2  min-h-[150px] min-w-[250px] max-w-[350px] border-back " key={index}>
	<div className="min-w-[100px]  min-h-[100px] bg-gray-200 max-w-[200px] ">
	</div>
	<div className="flex flex-col p-2">
	<p className="text-lg font-medium rubik text-gray-800 ">{e.name}</p>
	<p className="text-base font-semibold text-red-500">₹{e.price}</p>
	 {/*<p> {e.metal}</p>*/}
	<p className="text-sm text-gray-600">{e.description}</p>
	</div>
	</div>)
})}
</div>
)}
export default Product;