// Document Conversion - /doc/convert/office
// OCR - /ocr/tika/form
// Watermark - /water/watermark
import axios from "axios";

export default {
  refreshToken() {
    return axios
      .post(`https://api.narr.ng/refreshtoken`, {}, {
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
    return axios.post("https://image2text.narr.ng/tika/form", formData, {
      headers: { 
        'Accept': 'text/plain', 
      }, onUploadProgress
    });
  },

  uploadFileConvert(file, onUploadProgress) {
    const formData = new FormData();
    formData.append("file", file);
    return axios.post("https://doc2pdf.narr.ng/convert/office", formData, {
      headers: { 
        'Accept': 'multipart/form-data', 
      },responseType: 'blob', onUploadProgress
    })
  },

  uploadFileResearch(file, researchUserObject, onUploadProgress) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("researchUserObject", researchUserObject);
    return axios.post("https://doc2pdf.narr.ng/convert/office", formData, {
      headers: { 
        'Accept': 'multipart/form-data', 
      },responseType: 'blob', onUploadProgress
    })
  },
};