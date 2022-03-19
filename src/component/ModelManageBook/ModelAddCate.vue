<template>
  <div class="addModal">
    <b-button v-b-modal.modal-prevent1 class="bg-color">Thêm thể loại sách</b-button>
    <b-modal
      class="model modal-content wh"
      id="modal-prevent1"
      ref="modal"
      title="Thêm thể loại"
      cancel-variant="light"
      ok-title="Save"
      @ok="handleOk"
      hide-header-close
    >
      <form @submit.prevent="">
  

        <div class="form-group">
          <label for="">Các thể loại sách đang có:</label>
          <select class="red" name="" id="cate" v-model="cateId">
            <option v-for="cate in cates" v-bind:value="cate.cateId" :key="cate.cateId">
              {{ cate.cateName }}
            </option>
          </select>
          <div class="invalid-feedback"></div>
        </div>

          <div class="form-group">
          <label for="">Nhập thể loại cần thêm: </label>
          <input
            class="form-control"
            type="text"
            v-model.trim="$v.cateName.$model"
            :class="{
              'is-invalid': $v.cateName.$error,
              'is-valid': !$v.cateName.$invalid,
            }"
          />
          <div class="invalid-feedback">
            <span v-if="!$v.cateName.required">Bạn cần nhập tên thể loại</span>
          </div>
        </div>

      
      </form>
    </b-modal>
  </div>
</template>
<script>
import { required } from "vuelidate/lib/validators";
import { mapActions ,mapGetters} from "vuex";

export default {
  name: "ModelAddCate",
  data() {
    return {
    
      cateId: 1,
      cateName:""
     
    };
  },
  computed: {
    ...mapGetters({
      cates: "CATE/getAllCate",
    }),
  },
  validations: {
    cateName: {
      required,
    },
  },
  methods: {
    ...mapActions({
      createCate: "CATE/createCate",
      listcates: "CATE/getAllCate",
    }),
    handleOk(bvModalEvt) {
      bvModalEvt.preventDefault();
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      this.createCate({
       cateName:this.cateName
      });

      this.$nextTick(() => {
        (this.cateName = ""),
          this.$bvModal.hide("modal-prevent1");
      });
    },
  },
  mounted() {
     this.listcates();
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
  height: 350px;
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
      margin-left: 190px;
      .invalid-preview {
        margin-left: -740px;
      }
    }
  }
}
</style>
