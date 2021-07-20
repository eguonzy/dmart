import axios from "axios";
export default axios.create({
  headers: { Authorization: "Bearer " + localStorage.getItem("token") },
});

export const apiVersion = "https://dm-node-server.herokuapp.com/api/v1";
