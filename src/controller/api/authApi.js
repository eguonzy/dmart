import instance, { apiVersion } from "./apiCore";
const loginUser = async (form) => {
  let req = await fetch(apiVersion + "/auth-customer", {
    method: "Post",
    body: form,
  });
  return req;
};

export { loginUser };
