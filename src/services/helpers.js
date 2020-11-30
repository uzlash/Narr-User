import axios from "axios";
import store from '../store/index'

export default {
  //Ocr Image to Text
  uploadImageOcr(file, onUploadProgress) {
    const formData = new FormData();
    formData.append("image", file);
    return axios.post("https://narr.ng/ocr", formData, {
      headers: { 
        'Accept': 'text/plain', 
      }, onUploadProgress
    });
  },
  //Document Conversion
  uploadFileConvert(file, onUploadProgress) {
    const formData = new FormData();
    formData.append("file", file);
    return axios.post("https://narr.ng/pdf", formData, {
      headers: { 
        'Accept': 'multipart/form-data', 
      },responseType: 'blob', onUploadProgress
    })
  },
  //Upload Research Document
  uploadFileResearch(meta, file, onUploadProgress,) {
    const formData = new FormData();
    const strMeta = JSON.stringify(meta)
    formData.append("meta", strMeta);
    formData.append("file", file);
    // https://narr.ng/api/v1/research/upload
    return axios.post("/upload", formData, {
      headers: { 
        'Accept': 'multipart/form-data',
        'x-token': store.state.token
      }, onUploadProgress
    })
  },

  fetchResearches() {
    return axios
      .get("/research", {
        headers: { 
        'x-token': store.state.token
      }
    })
  },
  // fetchSingleResearch(id) {
  //   return axios
  //     .get(`/research/${id}`, {
  //       headers: { 
  //       'x-token': store.state.token
  //     }
  //   })
  // },
};