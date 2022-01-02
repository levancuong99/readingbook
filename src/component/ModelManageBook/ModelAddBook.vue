<template>
  <div class="addModal">
    <b-button v-b-modal.modal-prevent class="bg-color">Thêm mới sách</b-button>
    <b-modal
      class="model modal-content wh"
      id="modal-prevent"
      ref="modal"
      title="Create book"
      cancel-variant="light"
      ok-title="Save"
      @hidden="resetModal"
      @ok="handleOk"
      hide-header-close
    >
      <form @submit.prevent="">
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
          <label for="">Nội dung sách:</label>
          <div>
            <ckeditor
              v-model="linkBook"
              :config="editorConfig"
              :editor-url="editorUrl"
            ></ckeditor>
          </div>

          <div class="invalid-feedback"></div>
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
  name: "ModelAddUser",
  data() {
    return {
      cates: [
        { id: 1, name: "Cuộc sống" },
        { id: 2, name: "Thể thao" },
        { id: 3, name: "Truyện ngắn" },
      ],
      bookId: "",
      bookName: "",
      cateId: 1,
      imgBook: "",
      description: "",
      linkBook: "",
      authorName: "",
      authorProfile: "",
      editorUrl: "https://cdn.ckeditor.com/4.14.1/full-all/ckeditor.js",
      editorConfig: {
        toolbarGroups: [
          { name: "document", groups: ["mode", "document", "doctools"] },
          { name: "clipboard", groups: ["clipboard", "undo"] },
          {
            name: "editing",
            groups: ["find", "selection", "spellchecker", "editing"],
          },
          { name: "forms", groups: ["forms"] },
          { name: "basicstyles", groups: ["basicstyles", "cleanup"] },
          {
            name: "paragraph",
            groups: ["list", "indent", "blocks", "align", "bidi", "paragraph"],
          },
          { name: "links", groups: ["links"] },
          { name: "insert", groups: ["insert"] },
          { name: "styles", groups: ["styles"] },
          { name: "colors", groups: ["colors"] },
          { name: "tools", groups: ["tools"] },
          { name: "others", groups: ["others"] },
          { name: "about", groups: ["about"] },
        ],
        removeButtons:
          "NewPage,Print,Save,Templates,Replace,Find,SelectAll,Scayt,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,CreateDiv,Anchor,Flash,Smiley,PageBreak,ShowBlocks,About,Language,Iframe,Image",
      },
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
  methods: {
    ...mapActions({
      createBook: "BOOK/createBook",
    }),
    handleOk(bvModalEvt) {
      bvModalEvt.preventDefault();
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      this.createBook({
      bookId: "",
      bookName: this.bookName,
      cateId: this.cateId,
      imgBook: this.imgBook,
      description: this.description,
      linkBook: this.linkBook,
      authorName: this.authorName,
      authorProfile: this.authorProfile,
      });

      this.$nextTick(() => {
        (this.bookName = ""),
          (this.imgBook = ""),
          (this.description = ""),
           (this.linkBook = ""),
          (this.authorName = ""),
          (this.authorProfile = ""),
          this.$bvModal.hide("modal-prevent");
      });
    },
    resetModal() {
        (this.bookName = ""),
          (this.imgBook = ""),
          (this.description = ""),
           (this.linkBook = ""),
          (this.authorName = ""),
          (this.authorProfile = ""),
        this.$bvModal.hide("modal-prevent");
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
  mounted() {},
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
