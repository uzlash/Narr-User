 import axios from "axios";

export default {
  refreshToken() {
    return axios
      .post(`http://192.168.1.4:3000/api/v1/refreshtoken`, {}, {
        headers: {
        "x-token": localStorage.getItem("token"),
          'refreshtoken': localStorage.getItem("refreshToken"),
        },
      })
      .then((response) => {
        return response.data;
      });
  },
};
