import axios from 'axios'
import store from '../store/index'

export default {
  //Base Auth URL
  // https://api.narr.ng/
  apiBaseUrl: 'https://api.narr.ng/',
  appBaseUrl: 'https://narr.ng/',
  //Ocr Image to Text
  uploadImageOcr(file, onUploadProgress) {
    const formData = new FormData()
    formData.append('image', file)
    return axios.post('/ocr', formData, {
      headers: {
        Accept: 'text/plain',
        // 'x-token': store.state.token
      },
      onUploadProgress,
    })
  },
  //Document Conversion
  uploadFileConvert(file, onUploadProgress) {
    const formData = new FormData()
    formData.append('file', file)
    return axios.post('/doc', formData, {
      headers: {
        Accept: 'multipart/form-data',
        // 'x-token': store.state.token
      },
      responseType: 'blob',
      onUploadProgress,
    })
  },
  //Upload Research Document
  uploadFileResearch(meta, file, onUploadProgress) {
    const formData = new FormData()
    const strMeta = JSON.stringify(meta)
    formData.append('meta', strMeta)
    formData.append('file', file)
    return axios.post('/upload', formData, {
      headers: {
        Accept: 'multipart/form-data',
        // 'x-token': store.state.token
      },
      onUploadProgress,
    })
  },
  //Get all research document
  fetchResearches() {
    return axios.get('/research', {
      headers: {
        // 'x-token': store.state.token
      },
    })
  },
  //Get one research document
  fetchSingleResearch(id) {
    return axios.get('/research/' + id, {
      headers: {
        'x-token': store.state.token,
      },
    })
  },
}
