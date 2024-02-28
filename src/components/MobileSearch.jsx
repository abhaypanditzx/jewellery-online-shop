import React, { useContext ,useState} from 'react'
import { IoSearchOutline } from "react-icons/io5";
import UserContext from '../Context';
import {products} from "../constants"
const MobileSearch = () => {
  const {
    isSidebarOpen,
    setIsSidebarOpen,
    query,
    setQuery,
    result,
    setResult,
    updateSearchInput,
    setIsFocus,
    isFocus,
  } = useContext(UserContext);
const changeFocus = ()=>{
  setIsSearchbarOpen(!isSearchbarOpen)
}
const [isSearchbarOpen, setIsSearchbarOpen] = useState(false)
  return (
    <div className="searchbar  bg-[#eeeeee] flex xs:hidden">
    <input
      type="text"
      placeholder="search ..."
      onChange={updateSearchInput}
      onFocus={() => {
        setIsFocus(true);
      }}
      onBlur={() => {
        setIsFocus(false);
      }}
      value={query}
      className={`bg-transparent max-xs:w-[140px] outline-none placeholder:p-4 ${isSearchbarOpen? 'block' : 'hidden'}`}
    />
    <button onClick={changeFocus}  className="bg-black px-2  py-2 text-white ">
      <IoSearchOutline />
    </button>
  </div>
  )
}

export default MobileSearch