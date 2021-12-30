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

        <div class="form-group">
          <label for="">Mô tả: </label>
          <input
            class="form-control"
            type="text"
            v-model.trim="$v.description.$model"
            :class="{
              'is-invalid': $v.description.$error,
              'is-valid': !$v.description.$invalid,
            }"
          />
          <div class="invalid-feedback">
            <span v-if="!$v.description.required">Bạn cần nhập mô tả</span>
          </div>
        </div>



          <div class="form-group">
          <label for="">Tiểu sử tác giả: </label>
          <input
            class="form-control"
            type="text"
            v-model.trim="$v.authorProfile.$model"
            :class="{
              'is-invalid': $v.authorProfile.$error,
              'is-valid': !$v.authorProfile.$invalid,
            }"
          />
          <div class="invalid-feedback">
            <span v-if="!$v.authorProfile.required">Bạn cần nhập tiểu sử tác giả</span>
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
          <label for="">Thể loại:</label>
          <select class="red" name="" id="cate" v-model="cateId">
            <option v-for="cate in cates" v-bind:value="cate.id" :key="cate.id">
              {{ cate.name }}
            </option>
          </select>

          <div class="invalid-feedback"></div>
        </div>
      </form>
    </b-modal>
  </div>
</template>
<script>
import { required, maxLength } from "vuelidate/lib/validators";
import { mapActions } from "vuex";
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
      createUser: "AUTH/createUsers",
    }),
    handleOk(bvModalEvt) {
      bvModalEvt.preventDefault();
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      this.createUser({
        userName: this.name,
        userPassword: this.password,
        emailAddress: this.email,
        roleId: this.roleId,
      });

      this.$nextTick(() => {
        (this.email = ""),
          (this.name = ""),
          (this.password = ""),
          this.$bvModal.hide("modal-prevent");
      });
    },
    resetModal() {
      (this.email = ""),
        (this.name = ""),
        (this.password = ""),
        this.$bvModal.hide("modal-prevent");
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
  height: 700px;
  right: 140px;
}

form {
  width: 100%;
  margin: 0 auto;
  .form-group {
    display: flex;
    margin: 15px 0;
    flex-wrap: wrap;
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
      margin-left: 120px;
    }
  }
}
</style>