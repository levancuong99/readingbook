<template>
  <div class="wrapper">
  
  <b-button  variant="light"  @click="showUpdatePlaceModel()">Cập nhật thông tin</b-button>

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
          <label for="">Họ tên: </label>
          <input
            class="form-control"
            type="text"
            v-model.trim="$v.fullName.$model"
            :class="{
              'is-invalid': $v.fullName.$error,
              'is-valid': !$v.fullName.$invalid,
            }"
          />
          <div class="invalid-feedback">
            <span v-if="!$v.fullName.required">Bạn cần nhập họ tên</span>
            <span v-if="!$v.fullName.maxLength">
             Họ tên phải ít hơn {{
                $v.fullName.$params.maxLength.max
              }}
              kí tự
            </span>
          </div>
        </div>

        <div class="form-group">
          <label for="">Email: </label>
          <input
            class="form-control"
            type="text"
            v-model="email"
            disabled
          />
        </div>

            <div class="form-group">
          <label for="">Địa chỉ: </label>
          <input
            class="form-control"
            type="text"
            v-model.trim="$v.address.$model"
            :class="{
              'is-invalid': $v.address.$error,
              'is-valid': !$v.address.$invalid,
            }"
          />
          <div class="invalid-feedback">
            <span v-if="!$v.address.required">Bạn cần nhập địa chỉ</span>
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
export default {
  data() {
    return {
      fullName: "",
      email: "",
      address:"",
    };
  },
  
  validations: {
    fullName: {
      required,
      maxLength: maxLength(50),
    },
     address: {
      required,
    },
  },
  computed: {
    ...mapGetters({
      account: "AUTH/getUserInfor",
    }),
    
  },
  methods: {
     ...mapActions({
      infoUser: "AUTH/getInforUserById",
    }),
    ...mapActions({
      updateUser: "AUTH/updateInforUserById",
    }),
    
    showUpdatePlaceModel() {
      this.$refs.UpdatePlaceModal.show();
    },

    submitUpdatePlace() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      let params = {
        id: localStorage.getItem("userId"),
        obj: {
          fullName: this.fullName,
          address:this.address,
        },
      };
      this.updateUser(params);
      this.$router.go(0);
      this.$nextTick(() => {
        this.$refs.UpdatePlaceModal.hide();
      });
    },
   
    
  },

   mounted() {
     this.infoUser(JSON.parse(localStorage.getItem("userId")));
     this.fullName=this.account.fullName;
     this.email=this.account.email;
     this.address=this.account.address;
    },
};
</script>

<style lang="scss" scoped>
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
