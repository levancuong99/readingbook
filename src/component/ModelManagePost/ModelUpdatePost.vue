<template>
  <div class="wrapper">
    <b-icon
      icon="pen"
      aria-hidden="true"
      variant="success"
      @click="showUpdatePlaceModel(data.index, data.item)"
    >
    </b-icon>
    <b-modal
      id="modal-update"
      ref="UpdatePlaceModal"
      title="Chỉnh sửa thông báo"
      ok-title="Lưu"
      cancel-variant="light"
      hide-header-close
      @ok.prevent="submitUpdatePlace"
    >
      <form @submit.prevent="">
        <div class="form-group">
          <label for="">Tiêu đề: </label>
          <input
            class="form-control"
            type="text"
            v-model.trim="$v.title.$model"
            :class="{
              'is-invalid': $v.title.$error,
              'is-valid': !$v.title.$invalid,
            }"
          />
          <div class="invalid-feedback">
            <span v-if="!$v.title.required">Bạn cần nhập tiêu đề thông báo</span>
          </div>
        </div>


        <div class="form-group">
          <label for="">Nội dung: </label>

          <b-form-textarea
            class="textarea"
            v-model="content"
            placeholder="Nội dung thông báo..."
            rows="3"
            max-rows="6"
            :class="{
              'is-invalid': $v.content.$error,
              'is-valid': !$v.content.$invalid,
            }"
          ></b-form-textarea>

          <div class="invalid-feedback">
            <span v-if="!$v.content.required">Bạn cần nhập nội dung</span>
          </div>
        </div>

        <div class="form-group">
          <label for="">Hình ảnh: </label>
          <div class="image">
            <div class="position_cam" v-on:click="handleClickInputFile">
              <i class="fa fa-camera"></i>
            </div>

            <input
              type="file"
              @change="onFileChange"
              ref="fileInputImg"
              style="display: none"
            />
            <img
              :src="imgPost"
              :class="{
                'is-invalid': $v.imgPost.$error,
                'is-valid': !$v.imgPost.$invalid,
              }"
            />

            <div class="invalid-feedback">
              <span class="invalid-preview" v-if="!$v.imgPost.required">
                Bạn cần thêm hình ảnh 
              </span>
            </div>
          </div>
        </div>

        

      </form>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { required, maxLength } from "vuelidate/lib/validators";
import { mapActions } from "vuex";
import axios from "axios";

export default {
  data() {
    return {
      postId: "",
      title: "",
      content: "",
      imgPost: "",
    };
  },
  validations: {
    title: {
      required,
      maxLength: maxLength(250),
    },
    content: {
      required,
    },
    imgPost: {
      required,
    },
  },
   props: {
    data: {
      type: Object,
      require: true,
    },
  },
  
 
  computed: {
    ...mapGetters({
      post: "POST/getPost",
    }),
  },
  methods: {
    ...mapActions({
      updatePost: "POST/updatePostById",
    }),
    
    showUpdatePlaceModel(index, data) {
      this.dataRow = JSON.parse(JSON.stringify(data));
      this.postId = this.dataRow.postId;
      this.title = this.dataRow.title;
      this.content = this.dataRow.content;
      this.imgPost = this.dataRow.imgPost;
      this.$refs.UpdatePlaceModal.show();
    },

    submitUpdatePlace() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      let params = {
        id: this.dataRow.postId,
        obj: {
          postId:this.postId,
          title: this.title,
          content: this.content,
          imgPost:this.imgPost
        },
      };
      console.log(params);
      this.updatePost(params);
      this.$nextTick(() => {
        this.$refs.UpdatePlaceModal.hide();
      });
    },

    handleClickInputFile() {
      this.$refs.fileInputImg.click();
    },
    onFileChange(e) {
      let form = new FormData();
      form.append("file", e.target.files[0]);
      form.append("upload_preset", "qjxf98ek");
      axios
        .post("https://api.Cloudinary.com/v1_1/dja5fb2gg/image/upload", form)
        .then((res) => {
          this.imgPost = res.data.url;
        });
    },


  },
};
</script>

<style lang="scss" scoped>
.bg-color {
  background-color: #468faf;
}
.bg-color:hover,
.bg-color:active,
.bg-color:visited {
  background-color: #468faf;
}

::v-deep .modal-content {
  width: 800px;
  height: 600px;
  right: 140px;
  overflow: auto;
}
.mgtop {
  margin-top: 15px !important;
}

form {
  width: 100%;
  margin: 0 auto;

  .form-group {
    display: flex;
    margin: 15px 0;
    flex-wrap: wrap;

    .textarea {
      width: 523px;
    }

    .image {
      width: 520px;
      height: 200px;
      text-align: center;
      border: 1px solid black;
      position: relative;
      .position_cam {
        position: absolute;
        width: 40px;
        height: 40px;
        background: lightgrey;
        bottom: 0;
        right: 0;
        text-align: center;
        i {
          padding-top: 10px;
        }
      }
      img {
        width: 400px;
        height: 100%;
      }
    }
    label {
      flex-basis: 25%;
      text-align: left;
      align-items: center;
    }
    input,
    select {
      width: 100%;
      flex-basis: 70%;
      border: 1px solid grey;
      border-radius: 5px;
      padding: 4px;
    }
    .invalid-feedback {
      margin-left: 185px;
      .invalid-preview {
        margin-left: -740px;
      }
    }
  }
}
</style>
