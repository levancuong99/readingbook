<template>
  <div class="containers">
    <div class="wrapper">
      <h2>Thông tin cá nhân</h2>
      <div class="info">
          <label class="title" for="name">Họ tên:</label>
        <div class="form-group" >
          <input
            class="form-control"
            type="text"
            placeholder="Nhập họ tên"
            v-model.trim="$v.name.$model"
            id="name"
            :class="{
              'is-invalid': $v.name.$error,
              'is-valid': !$v.name.$invalid,
            }"
          />
          <div class="invalid-feedback">
            <span v-if="!$v.name.required">Name is requied</span>
          </div>
        </div>
      </div>
      <div class="info">
          <label class="title" for="name">Email:</label>
        <div class="form-group">
          <input
            class="form-control"
            type="text"
             placeholder="Email"
             disabled
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
      </div>

      <div class="info">
          <label class="title" for="name">Mật khẩu:</label>
        <div class="form-group">
          <input
            class="form-control"
            type="password"
           placeholder="Mật khẩu"
            v-model.trim="$v.password.$model"
            :class="{
              'is-invalid': $v.password.$error,
              'is-valid': !$v.password.$invalid,
            }"
          />
          <div class="invalid-feedback">
            <span v-if="!$v.password.required">Password is requied</span>
            <span v-if="!$v.password.minLength">
              Password is greater than 6 letters
            </span>
          </div>
        </div>
      </div>

      <div class="info">
          <label class="title" for="name">Xác nhận mật khẩu:</label>
        <div class="form-group">
          <input
            class="form-control"
            type="password"
             placeholder="Nhập lại mật khẩu"
            v-model.trim="$v.retypePassword.$model"
            :class="{
              'is-invalid': $v.retypePassword.$error,
              'is-valid': !$v.retypePassword.$invalid,
            }"
          />
          <div class="invalid-feedback">
            <span v-if="!$v.retypePassword.required">Confirm password is requied</span>
             <span v-if="(password && !$v.retypePassword.sameAsPassword) && $v.retypePassword.required">Password and Confirm Password should match</span>
          </div>
        </div>
      </div>
      <div class="info">
          <label class="title" for="name">Địa chỉ:</label>
        <div class="form-group" >
          <input
            class="form-control"
            type="text"
            placeholder="Nhập địa chỉ"
           v-model.trim="$v.address.$model"
            :class="{
              'is-invalid': $v.address.$error,
              'is-valid': !$v.address.$invalid,
            }"
          />
          <div class="invalid-feedback">
            <span v-if="!$v.address.required">Address is requied</span>
          </div>
        </div>
      </div>

      <div class="btn">
           <b-button variant="primary">Cập nhật thông tin</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import {
  required,
  minLength,
  email,
  maxLength,
  sameAs
} from "vuelidate/lib/validators";
export default {
  data() {
    return {
      name: "Lê Vy",
      email: "",
      password: "",
      retypePassword: "",
      dateOfBirth: "",
      gender: "",
      address: "",
    };
  },
  validations: {
    name: {
      required,
      maxLength: maxLength(64),
    },
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(7),
    },
    retypePassword: {
      required,
      sameAsPassword: sameAs('password') 
    },
    address: {
      required,
      maxLength: maxLength(64),
    },
    dateOfBirth: {
      required,
    },
  },
};
</script>

<style lang="scss" scoped>
.containers {
  .wrapper {
    h2 {
      margin: 50px 0 50px 0;
      font-weight: 700;
    }
    .info {
      margin-top: 40px !important;
      width: 60%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      .title {
          line-height: 40px;
          font-size: 20px;
          font-weight: 700;
      }
       
      .form-group {
          height: 50px;
         input {
             width: 380px;
         }
         .invalid-feedback {
          margin-top: 12px;
          text-align: left;
         font-size: 16px;
        }
         
      }
      }
    }
    .btn {
        margin:30px 0 50px 0
    }
  }

</style>
