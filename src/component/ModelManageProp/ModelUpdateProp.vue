<template>
  <div class="addModal">
    <b-button v-b-modal.modal-prevent1 variant="light" >Đề xuất sách</b-button>
    <b-modal
      class="model modal-content wh"
      id="modal-prevent1"
      ref="modal"
      title="Đề xuất sách"
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
            v-model.trim="$v.bookNameProp.$model"
            :class="{
              'is-invalid': $v.bookNameProp.$error,
              'is-valid': !$v.bookNameProp.$invalid,
            }"
          />
          <div class="invalid-feedback">
            <span v-if="!$v.bookNameProp.required">Bạn cần nhập tên sách</span>
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
          <label for="">Nhận xét: </label>

          <b-form-textarea
            class="textarea"
            v-model="itemProp.remark"
            placeholder="Nhập nhận xét..."
            rows="5"
            max-rows="5"
            :class="{
              'is-invalid': $v.remark.$error,
              'is-valid': !$v.remark.$invalid,
            }"
          ></b-form-textarea>
          <div class="invalid-feedback">
            <span v-if="!$v.remark.required"
              >Bạn cần nhập nhận xét</span
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

export default {
  name: "ModelAddUser",
  data() {
    return {
      propId: "",
      bookNameProp: "",
      authorName: "",
      remark:""
    };
  },
  validations: {
    bookNameProp: {
      required,
      maxLength: maxLength(250),
    },
  
    authorName: {
      required,
    },
    remark: {
      required,
    },
  },
  methods: {
    ...mapActions({
      updateProp: "PROP/updatePropById",
    }),
    handleOk(bvModalEvt) {
      bvModalEvt.preventDefault();
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      let params= {
        id:this.itemProp.propId,
        obj: {
          userId: localStorage.getItem("userId"),
          bookName: this.bookNameProp,
          authorName: this.authorName,
          remark: this.remark,
        }
      }
      console.log("id:",params.id);
      this.updateProp(params);
       this.$router.go(0);
          this.$bvModal.hide("modal-prevent1");
      // });
    },
    resetModal() {
      console.log("hh:",this.itemProp.propId);
        // (this.bookNameProp = ""),
        //   (this.authorName = ""),
        //   (this.remark = ""),
          // this.$router.go(0);
        // this.$bvModal.hide("modal-prevent1");
    },
  },
  mounted() {
    this.bookNameProp=this.itemProp.bookNameProp;
    this.authorName=this.itemProp.authorName;
    this.remark=this.itemProp.remark;
    console.log(this.itemProp);
  },
   props: {
    itemProp: {
      type:  Object,
      require: true,
      default: () => {},
    },
   },
};
</script>
<style lang="scss" scoped>
.bg-color {
  background-color: #000;
}
.bg-color:hover,
.bg-color:active,
.bg-color:visited {
  background-color: #000;
}

::v-deep .modal-content {
  width: 800px;
  height: 470px;
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
      height: 500px;
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
      margin-left: 195px;
      .invalid-preview {
        margin-left: -740px;
      }
    }
  }
}
</style>
