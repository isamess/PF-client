

export const url = "https://pf-api-e8h6.onrender.com"
// export const url = "http://localhost:3001/api/dist";

export const setHeaders = () => {
  const headers: any = {
    headers: {
      "x-auth-token": localStorage.getItem("token"),
    },
  };
  return headers;
};
