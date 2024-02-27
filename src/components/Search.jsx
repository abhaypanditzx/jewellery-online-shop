import React, { useContext } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import UserContext from '../Context';
import {products} from "../constants"
const Search = () => {
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

  return (
    <div className="searchbar mr-10 bg-[#eeeeee] max-xs:hidden">
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
      className="bg-transparent sm:w-[150px] md:w-[200px] outline-none placeholder:p-4"
    />
    <button className="bg-black px-4  py-2.5 text-white ">
      <IoSearchOutline />
    </button>
  </div>
  )
}

export default Search