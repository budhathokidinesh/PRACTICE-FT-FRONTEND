import axios from "axios";
const rootApiEp = import.meta.env.VITE_ROOT_API + "/api/v1";

const getAccessJWT = () => {
  return localStorage.getItem("accessJWT");
};

const apiProcessor = async ({ method, url, data, headers }) => {
  try {
    const response = await axios({
      method,
      url,
      data,
      headers,
    });
    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error?.response?.data?.error || error.message,
    };
  }
};
// post new user
export const postNewUser = (data) => {
  const obj = {
    method: "post",
    url: rootApiEp + "/peoples",
    data,
  };
  return apiProcessor(obj);
};
// login usser
export const loginUser = (data) => {
  const obj = {
    method: "post",
    url: rootApiEp + "/peoples/login",
    data,
  };
  return apiProcessor(obj);
};
//Get user profile
export const getUser = () => {
  const obj = {
    method: "get",
    url: rootApiEp + "/peoples", //api/v1/users
    headers: {
      Authorization: getAccessJWT(),
    },
  };
  return apiProcessor(obj);
};

// Transaction api calls

// Post new Transactions
export const postNewTransaction = (data) => {
  const obj = {
    method: "post",
    url: rootApiEp + "/transactions",
    data,
    headers: {
      Authorization: getAccessJWT(),
    },
  };
  return apiProcessor(obj);
};
// Fetch the Transactions of the specific users.
export const fetchTransaction = () => {
  const obj = {
    method: "get",
    url: rootApiEp + "/transactions",
    headers: {
      Authorization: getAccessJWT(),
    },
  };
  return apiProcessor(obj);
};

// Deleting the selected transactions
export const deleteTransactions = (data) => {
  const obj = {
    method: "delete",
    url: rootApiEp + "/transactions",
    data,
    headers: {
      Authorization: getAccessJWT(),
    },
  };
  return apiProcessor(obj);
};
