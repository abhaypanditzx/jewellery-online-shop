import { createContext, useState } from "react";
import {products} from "./constants"

const UserContext = createContext();
export const ContextProvider = ({ children }) => {

  const updateSearchInput = (event) => {
    setQuery(event.target.value);
    const filteredResults = products.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setResult(filteredResults);
  };


  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <UserContext.Provider
      value={{
        isSidebarOpen,
        setIsSidebarOpen,
        query,
        setQuery,
        result,
        setResult,
        updateSearchInput,
        products,
        isFocus,
        setIsFocus,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserContext;
