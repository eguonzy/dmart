import instance, { apiVersion } from "./apiCore";
const getItems = async (count, limit) => {
  return await instance
    .get(apiVersion + "/items", {
      params: { page_size: limit, page_number: count },
    })
    .then((items) => items.data);
};

export { getItems };
