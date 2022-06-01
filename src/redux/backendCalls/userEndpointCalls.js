import { BACKEND_PATH } from "../../App";

export const loginCall = async (data) => {
  let response = await fetch(`${BACKEND_PATH}/api/users/login`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "omit",
    headers: {
      "Content-Type": "application/json",
    },
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  });
  response = await response.json();
  return response;
};
