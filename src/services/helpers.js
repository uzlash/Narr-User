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

  uploadFile(file, onUploadProgress) {
    let formData = new FormData();

    formData.append("file", file);
    return axios.post("/api/convert/office", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        // "Content-Type": "application/json"
      }, onUploadProgress
    });
  },

  getFiles () {
    return axios.get("http://localhost:3001/files");
  },

  uploadImageOCR(file, onUploadProgress) {
 
    const formdata = new FormData();
    formdata.append("image", file);

    return axios.post("/api/tika/form", FormData, {
      headers: { 
        'Accept': 'text/plain', 
      }, onUploadProgress
    });
  },

  // uploadImagesFetch(file) {
  //   var myHeaders = new Headers();
  //   myHeaders.append("Accept", "text/plain");

  //   var formdata = new FormData();
  //   formdata.append("image", file);

  //   var requestOptions = {
  //     method: "POST",
  //     headers: myHeaders,
  //     body: formdata,
  //     redirect: "follow",
  //   };

  //   fetch("/api/tika/form", requestOptions)
  //     .then((response) => response.text())
  //     .then((result) => console.log(result))
  //     .catch((error) => console.log("error", error));
  // },

};

// let fnGetFileNameFromContentDispostionHeader = function (header) {
//   let contentDispostion = header.split(';');
//   const fileNameToken = `filename*=UTF-8''`;

//   let fileName = 'downloaded.pdf';
//   for (let thisValue of contentDispostion) {
//       if (thisValue.trim().indexOf(fileNameToken) === 0) {
//           fileName = decodeURIComponent(thisValue.trim().replace(fileNameToken, ''));
//           break;
//       }
//   }

//   return fileName;
// };

// let postInfo = {
//   id: 0,
//   name: 'foo'
// };

// let headers = new Headers();
// headers.append('Content-Type', 'application/json');

// fetch(`api/GetPdf`, {
//   method: 'POST',
//   headers: headers,
//   body: JSON.stringify(postInfo)
// })
//   .then(async res => ({
//       filename: fnGetFileNameFromContentDispostionHeader(res.headers.get('content-disposition')),
//       blob: await res.blob()
//   }))
//   .then(resObj => {
//       // It is necessary to create a new blob object with mime-type explicitly set for all browsers except Chrome, but it works for Chrome too.
//       const newBlob = new Blob([resObj.blob], { type: 'application/pdf' });

//       // MS Edge and IE don't allow using a blob object directly as link href, instead it is necessary to use msSaveOrOpenBlob
//       if (window.navigator && window.navigator.msSaveOrOpenBlob) {
//           window.navigator.msSaveOrOpenBlob(newBlob);
//       } else {
//           // For other browsers: create a link pointing to the ObjectURL containing the blob.
//           const objUrl = window.URL.createObjectURL(newBlob);

//           let link = document.createElement('a');
//           link.href = objUrl;
//           link.download = resObj.filename;
//           link.click();

//           // For Firefox it is necessary to delay revoking the ObjectURL.
//           setTimeout(() => { window.URL.revokeObjectURL(objUrl); }, 250);
//       }
//   })
//   .catch((error) => {
//       console.log('DOWNLOAD ERROR', error);
//   });