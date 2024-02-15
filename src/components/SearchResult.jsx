import React, { useContext } from "react";
import UserContext from "../Context";
import { VscChromeClose } from "react-icons/vsc";

const SearchResult = () => {
  const {
    query,
    setQuery,
    result,
    setResult,
    updateSearchInput,
    isFocus,
    setIsFocus,
  } = useContext(UserContext);
  return (
    <div
      className={` fixed backdrop-blur-md   top-[80px] z-40 w-full h-[90vh]  ${
        isFocus ? "block " : "hidden"
      } `}
    >
      {" "}
      <div className=" bg-white w-[60%]  right-0 fixed  m-auto flex flex-col jusitfy-center h-full">
        <div className="flex p-5 flex-">
          <h1 className="text-2xl  font-medium  capitalize w-full ">
            related searches
          </h1>
         <button onClick={()=>{setIsFocus(false)}}>
         <VscChromeClose  className="text-xl cursor-pointer hover:scale-95 "/>
         </button>
        </div>
     <ul className=" bg-white w-[90%]   flex flex-col jusitfy-center h-full">
     {result.map((e, index) => (
          <li
            key={e.index}
            className="py-1 text-sm px-5 w-[90%] m-auto poppins border-b-[1px] "
          >
            <a href="#">{e.name}</a>
          </li>
        ))}
     </ul>
      </div>
    </div>
  );
};

export default SearchResult;
