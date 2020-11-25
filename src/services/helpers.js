import axios from "axios";

export default {
  //Ocr Image to Text
  uploadImageOcr(file, onUploadProgress) {
    const formData = new FormData();
    formData.append("image", file);
    return axios.post("http://image2text.narr.ng/tika/form", formData, {
      headers: { 
        'Accept': 'text/plain', 
      }, onUploadProgress
    });
  },
  //Document Conversion
  uploadFileConvert(file, onUploadProgress) {
    const formData = new FormData();
    formData.append("file", file);
    return axios.post("http://doc2pdf.narr.ng/convert/office", formData, {
      headers: { 
        'Accept': 'multipart/form-data', 
      },responseType: 'blob', onUploadProgress
    })
  },
  //Upload Research Document
  uploadFileResearch(file, onUploadProgress) {
    const formData = new FormData();
    formData.append("file", file);
    return axios.post("http://narr.ng/api/v1/research/upload", formData, {
      headers: { 
        'Accept': 'multipart/form-data',
      }, onUploadProgress
    })
  },

  fetchResearches() {
    return axios
      .get("http://localhost:3005/repository")
  },
  fetchSingleResearch(id) {
    return axios
      .get("http://localhost:3005/repository/" + id)
  },
};