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

  uploadImageOcr(file, onUploadProgress) {
    const formData = new FormData();
    formData.append("image", file);
    return axios.post("/ocr/tika/form", formData, {
      headers: { 
        'Accept': 'text/plain', 
      }, onUploadProgress
    });
  },

  uploadFileConvert(file, onUploadProgress) {
    const formData = new FormData();
    formData.append("file", file);
    // /doc/convert/office
    return axios.post("/water/watermark", formData, {
      headers: { 
        'Accept': 'multipart/form-data', 
      },responseType: 'blob', onUploadProgress
    })
  },

  uploadFileResearch(file, researchUserObject, onUploadProgress) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("researchUserObject", researchUserObject);
    return axios.post("/", formData, {
      headers: { 
        'Accept': 'multipart/form-data', 
      },responseType: 'blob', onUploadProgress
    })
  },
};