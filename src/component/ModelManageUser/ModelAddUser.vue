<template>
  <div class="addModal">
    <b-button v-b-modal.modal-prevent class="bg-color">Tạo tài khoản</b-button>
    <b-modal
      class="model modal-content"
      id="modal-prevent"
      ref="modal"
      title="Tạo mới tài khoản"
      cancel-variant="light"
      ok-title="Save"
      @hidden="resetModal"
      @ok="handleOk"
      hide-header-close
    >
      <form @submit.prevent="">
        <div class="form-group">
          <label for="">Họ tên: </label>
          <input
            class="form-control"
            type="text"
            v-model.trim="$v.name.$model"
            :class="{
              'is-invalid': $v.name.$error,
              'is-valid': !$v.name.$invalid,
            }"
          />
          <div class="invalid-feedback">
            <span v-if="!$v.name.required">Bạn cần nhập họ tên</span>
          </div>
        </div>
        <div class="form-group">
          <label for="">Email: </label>
          <input
            class="form-control"
            type="text"
            v-model.trim="$v.email.$model"
            :class="{
              'is-invalid': $v.email.$error,
              'is-valid': !$v.email.$invalid,
            }"
          />
          <div class="invalid-feedback">
            <span v-if="!$v.email.required">Bạn cần nhập email</span>
            <span v-if="!$v.email.email">Email không hợp lệ</span>
          </div>
        </div>

        <div class="form-group">
          <label for="">Mật khẩu: </label>
          <input
            class="form-control"
            type="password"
            v-model.trim="$v.password.$model"
            :class="{
              'is-invalid': $v.password.$error,
              'is-valid': !$v.password.$invalid,
            }"
          />
          <div class="invalid-feedback">
            <span v-if="!$v.password.required">Bạn cần nhập mật khẩu</span>
            <span v-if="!$v.password.minLength">
              Mật khẩu phải lớn hơn 6 kí tự
            </span>
          </div>
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


      
           
          <div class="form-group">
             <label for="date">Ngày sinh: </label>
            <input
              id="date"
              type="date"
              max="2011-10-25"
              v-model.trim="$v.dateOfBirth.$model"
              :class="{
                'is-invalid': $v.dateOfBirth.$error,
                'is-valid': !$v.dateOfBirth.$invalid,
              }"
            />
            <div class="invalid-feedback">
              <span class="invalid-date" v-if="!$v.dateOfBirth.required">
               Bạn cần nhập ngày sinh
              </span>
            </div>
          </div>

          <div class="form-group">
            <label>Giới tính:</label>
            <div class="boy">
               <input  type="radio" name="gender" id="nam" value="0"  checked/>
               <label class="mg" for="nam">Nam</label>
            </div>
            <div class="girl">
                <input type="radio" name="gender" id="nu" value="1" />
                <label class="mg" for="nu">Nữ</label>
            </div>
            
          </div>
        

        <div class="form-group">
          <label for="">Vai trò:</label>
          <select class="red" name="" id="role" v-model="roleId">
            <option v-for="role in roles" v-bind:value="role.id" :key="role.id">
              {{ role.name }}
            </option>
          </select>
          <div class="invalid-feedback"></div>
        </div>
      </form>
    </b-modal>
  </div>
</template>
<script>
import {
  required,
  maxLength,
  minLength,
  email,
} from "vuelidate/lib/validators";
import { mapActions } from "vuex";
export default {
  name:"ModelAddUser",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      address:"",
      dateOfBirth: "",
      gender: 0,
      roles: [
        { id: 1, name: "Quản trị viên" },
        { id: 2, name: "Người dùng" },
      ],
     
      roleId: 2,
    };
  },
  validations: {
    name: {
      required,
      maxLength: maxLength(50),
    },
    email: {
      required,
      maxLength: maxLength(50),
      email,
    },
    password: {
      required,
      minLength: minLength(7),
      maxLength: maxLength(254),
    },
     dateOfBirth: {
      required,
    },
     address: {
      required,
    },
    roleId: {
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
        fullName: this.name,
        email: this.email,
        password: this.password,
        address:this.address,
        dateOfBirth:this.dateOfBirth,
        gender:this.gender,
        roleId: this.roleId,
      });
     
      this.$nextTick(() => {
        this.email="",
        this.name="",
        this.password="",
        this.$bvModal.hide("modal-prevent");
      });
    },
    resetModal() {
      this.email="",
      this.name="",
      this.password="",
      this.$bvModal.hide("modal-prevent");
    },
  },
  mounted() {},
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
form {
  width: 100%;
  margin: 0 auto;
  .form-group {
    display: flex;
    margin: 15px 0;
    flex-wrap: wrap;

    .boy {
      width: 100px;
      display: flex;
      align-items: center;
      .mg {
        margin-bottom: 0 !important;
      }
    }
    .girl {
      width: 100px;
      display: flex;
      align-items: center;
      .mg  {
        margin-bottom: 0 !important;
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
      margin-left: 120px;
    }
  }
}
</style>