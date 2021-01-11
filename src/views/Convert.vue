<template>
  <v-app class="grey lighten-4">
    <v-container>
      <v-row>
        <v-col cols="12">
          <span class="text-h4 font-weight-thin">Document Conversion</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-card tile outlined>
            <v-card-title class="text-h6 font-weight-medium"
              >How it works</v-card-title
            >
            <v-divider></v-divider>
            <v-card-text>
              <div>
                <ol class="body-1">
                  <li>Select a document using the file picker below.</li>
                  <li>Click on upload and wait as the file uploads.</li>
                  <li>
                    The converted document/file will be returned back to you as
                    a pdf file which you can either view in the browser or
                    download.
                  </li>
                </ol>
              </div>
              <v-form @submit.prevent ref="form" class="mt-4">
                <div>
                  <v-col cols="6" class="d-flex align-center">
                    <v-row>
                      <v-col cols="12" md="6" lg="6">
                        <v-file-input
                          hide-details
                          show-size
                          filled
                          accept=".doc,.docx,.txt,.pptx,.odt,.rtf,.xls,.xlsx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                          color="#00a368"
                          label="Select File"
                          prepend-icon="mdi-file-document"
                          @change="selectFile"
                        ></v-file-input>
                      </v-col>
                      <v-col cols="12" md="6" lg="6">
                        <v-btn
                          :loading="loading"
                          dark
                          class="ml-4"
                          color="#00a368"
                          @click="uploadFile(currentFile)"
                        >
                          <v-icon class="mr-2">mdi-cloud-upload-outline</v-icon>
                          Upload FIle
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-col>
                </div>
                <v-col cols="12" md="6" lg="6">
                  <div v-if="currentFile">
                    <div v-if="showProgress">
                      <v-progress-linear
                        v-model="progress"
                        color="#00a368"
                        height="20"
                        reactive
                        dark
                      >
                        <strong>{{ progress }} %</strong>
                      </v-progress-linear>
                      <span
                        >Uploaded: {{ loadedData }} bytes of Total:
                        {{ totalData }} bytes</span
                      >
                      <div>
                        <span class="mr-2 text-h6"
                          >Please wait while your document finishes
                          processing/converting and downloads.</span
                        >
                      </div>
                    </div>
                  </div>
                  <v-alert
                    class="mt-2"
                    v-if="messageSuccess"
                    border="left"
                    color="#00a368"
                    dark
                    >{{ messageSuccess }}</v-alert
                  >
                  <v-alert
                    class="mt-2"
                    v-if="messageError"
                    border="left"
                    color="red"
                    dark
                    >{{ messageError }}</v-alert
                  >
                </v-col>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import helpers from '../services/helpers'
export default {
  data() {
    return {
      currentFile: undefined,
      loading: false,
      progress: 0,
      messageSuccess: '',
      messageError: '',
      showProgress: false,
      File: '',
      loadedData: 0,
      totalData: 0,
    }
  },
  methods: {
    selectFile(file) {
      this.progress = 0
      this.currentFile = file
    },

    uploadFile() {
      if (!this.currentFile) {
        this.messageError = 'Please select a File!'
        setTimeout(() => {
          this.messageError = ''
        }, 5000)
        return
      }
      this.loading = true
      helpers
        .uploadFileConvert(this.currentFile, (event) => {
          this.showProgress = true
          this.progress = Math.round((100 * event.loaded) / event.total)
          this.loadedData = event.loaded
          this.totalData = event.total
        })
        .then(async (response) => {
          const blob = await response.data
          const obj = new Blob([blob], {
            type: 'application/pdf',
          })

          //Polyfill
          if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveOrOpenBlob(obj)
          } else {
            const objUrl = window.URL.createObjectURL(obj)

            const link = document.createElement('a')
            link.href = objUrl
            link.download = 'download.pdf'
            link.click()
            this.loading = false
            this.currentFile = undefined
            this.messageSuccess = 'Document to PDF Conversion Successful'

            setTimeout(() => {
              window.URL.revokeObjectURL(objUrl)
            }, 250)

            setTimeout(() => {
              this.messageSuccess = ''
            }, 5000)
          }
        })
        .catch((err) => {
          console.log('Error>>', err.message)
          this.progress = 0
          this.loading = false
          this.messageError = err.message
          this.currentFile = undefined

          setTimeout(() => {
            this.messageError = ''
          }, 5000)
        })
    },
  },
}
</script>
