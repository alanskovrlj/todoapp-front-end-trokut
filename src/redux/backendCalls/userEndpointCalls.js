import { BACKEND_PATH } from "../../App";

export const loginCall = async (data) => {
  const response = await fetch(`${BACKEND_PATH}/api/users/login`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "omit",
    headers: {
      "Content-Type": "application/json",
    },
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
  return response;
};
