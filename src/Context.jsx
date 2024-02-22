import { createContext, useState } from "react";

const UserContext = createContext();
export const ContextProvider = ({ children }) => {
  const data = [
    { name: "Apple" },
    { name: "Banana" },
    { name: "Orange" },
    { name: "Strawberry" },
    { name: "Pineapple" },
    { name: "Grapes" },
  ];

  const updateSearchInput = (event) => {
    setQuery(event.target.value);
    const filteredResults = data.filter((item) =>
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
        data,
        isFocus,
        setIsFocus,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserContext;
