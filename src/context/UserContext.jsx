import { createContext, useContext, useState } from "react";
import { fetchTransaction } from "../../helpers/axiosHelper";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [transactions, setTransactions] = useState([]);
  const [show, setShow] = useState(false);

  const toggleModel = (value) => setShow(value);

  const getTransactions = async () => {
    // call axios helper to call the api
    const { status, transactions } = await fetchTransaction();

    // recieve data and mount to the transactions by set transactions
    status === "success" && setTransactions(transactions);
  };
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        transactions,
        getTransactions,
        toggleModel,
        show,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export const useUser = () => useContext(UserContext);
