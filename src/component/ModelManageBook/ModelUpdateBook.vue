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
      title="Update account"
      ok-title="Save"
      cancel-variant="light"
      hide-header-close
      @ok.prevent="submitUpdatePlace"
    >
      <form @submit.prevent="submit">
        <div class="form-group">
          <label for="">Tên sách: </label>
          <input
            class="form-control"
            type="text"
            v-model.trim="$v.bookName.$model"
            :class="{
              'is-invalid': $v.bookName.$error,
              'is-valid': !$v.bookName.$invalid,
            }"
          />
          <div class="invalid-feedback">
            <span v-if="!$v.bookName.required">Bạn cần nhập email</span>
          </div>
        </div>

        <div class="form-group">
          <label for="">Hình ảnh sách: </label>
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
              :src="imgBook"
              :class="{
                'is-invalid': $v.imgBook.$error,
                'is-valid': !$v.imgBook.$invalid,
              }"
            />

            <div class="invalid-feedback">
              <span class="invalid-preview" v-if="!$v.imgBook.required">
                Bạn cần thêm hình ảnh sách
              </span>
            </div>
          </div>
        </div>

        <div class="form-group mgtop">
          <label for="">Mô tả: </label>

          <b-form-textarea
            class="textarea"
            v-model="description"
            placeholder="Enter something..."
            rows="3"
            max-rows="6"
            :class="{
              'is-invalid': $v.description.$error,
              'is-valid': !$v.description.$invalid,
            }"
          ></b-form-textarea>

          <div class="invalid-feedback">
            <span v-if="!$v.description.required">Bạn cần nhập mô tả</span>
          </div>
        </div>

        <div class="form-group">
          <label for="">Tên tác giả: </label>
          <input
            class="form-control"
            type="text"
            v-model.trim="$v.authorName.$model"
            :class="{
              'is-invalid': $v.authorName.$error,
              'is-valid': !$v.authorName.$invalid,
            }"
          />
          <div class="invalid-feedback">
            <span v-if="!$v.authorName.required">Bạn cần nhập tên tác giả</span>
          </div>
        </div>

        <div class="form-group">
          <label for="">Tiểu sử tác giả: </label>

          <b-form-textarea
            class="textarea"
            v-model="authorProfile"
            placeholder="Enter something..."
            rows="3"
            max-rows="6"
            :class="{
              'is-invalid': $v.authorProfile.$error,
              'is-valid': !$v.authorProfile.$invalid,
            }"
          ></b-form-textarea>
          <div class="invalid-feedback">
            <span v-if="!$v.authorProfile.required"
              >Bạn cần nhập tiểu sử tác giả</span
            >
          </div>
        </div>

        <div class="form-group">
          <label for="">Thể loại:</label>
          <select class="red" name="" id="cate" v-model="cateId">
            <option v-for="cate in cates" v-bind:value="cate.id" :key="cate.id">
              {{ cate.name }}
            </option>
          </select>

          <div class="invalid-feedback"></div>
        </div>

           <div class="form-group">
          <label for="">Link nội dung sách: </label>

          <b-form-textarea
            class="textarea"
            v-model="linkBook"
            placeholder="Nhập link nội dung sách."
            rows="3"
            max-rows="6"
            :class="{
              'is-invalid': $v.linkBook.$error,
              'is-valid': !$v.linkBook.$invalid,
            }"
          ></b-form-textarea>
          <div class="invalid-feedback">
            <span v-if="!$v.linkBook.required"
              >Bạn cần nhập link sách</span
            >
          </div>
        </div>
      </form>
    </b-modal>
  </div>
</template>

<script>
import { required, maxLength } from "vuelidate/lib/validators";
import { mapActions } from "vuex";
import axios from "axios";
export default {
  data() {
    return {
      cates: [
        { id: 1, name: "Tâm Lý – Kỹ Năng Sống" },
        { id: 2, name: " Y Học – Sức Khỏe " },
        { id: 3, name: "Văn Hoá – Nghệ Thuật" },
        { id: 4, name: "Kinh Tế – Quản Lý" },
        { id: 5, name: " Học Ngoại Ngữ" },
        { id: 6, name: "Marketing – Bán Hàng" },
      ],
      bookId: "",
      bookName: "",
      cateId: 1,
      imgBook: "",
      description: "",
      linkBook: "",
      authorName: "",
      authorProfile: "",
    };
  },
  validations: {
    bookName: {
      required,
      maxLength: maxLength(250),
    },
    imgBook: {
      required,
    },
    description: {
      required,
    },
    linkBook: {
      required,
    },
    authorName: {
      required,
    },
    authorProfile: {
      required,
    },
  },
  // computed: {
  //   ...mapGetters({
  //     account: "AUTH/getUserInfor",
  //   }),
  // },
   props: {
    data: {
      type: Object,
      require: true,
    },
  },
  methods: {
    ...mapActions({
      updateBook: "BOOK/updateInforBookById",
    }),

    showUpdatePlaceModel(index, data) {
      this.dataRow = JSON.parse(JSON.stringify(data));
      this.bookId = this.dataRow.bookId;
      this.bookName = this.dataRow.bookName;
      this.cateId = this.dataRow.cateId;
      this.imgBook = this.dataRow.imgBook;
      this.description = this.dataRow.description;
      this.linkBook = this.dataRow.linkBook;
      this.authorName = this.dataRow.authorName;
      this.authorProfile = this.dataRow.authorProfile;
      this.$refs.UpdatePlaceModal.show();
    },

    submitUpdatePlace() {
     
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      let params= {
        bookId:this.bookId,
        obj:{
          bookId: "",
      bookName: this.bookName,
      cateId: this.cateId,
      imgBook: this.imgBook,
      description: this.description,
      linkBook: this.linkBook,
      authorName: this.authorName,
      authorProfile: this.authorProfile,
        }
      }
      this.updateBook(params);

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
          this.imgBook = res.data.url;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .modal-content {
  width: 800px;
  height: 600px;
  right: 140px;
  overflow: auto;
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
