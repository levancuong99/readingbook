<template>
  <div class="containers">
    <div class="section">
      <div class="content">
        <h2>Sách </h2>
        <p>
         Đọc sách hay cũng giống như trò chuyện với các bộ óc tuyệt vời nhất của những thế kỷ đã trôi qua
        </p>
      </div>
    </div>

    <div class="aside">
      <div class="formLogin">
        <div class="form-group padding-field-email ">
          <input
            class="form-control pos_input"
            type="text"
            placeholder="Email"
            v-model.trim="$v.email.$model"
            :class="{
              'is-invalid': $v.email.$error,
              'is-valid': !$v.email.$invalid,
            }"
          />
          <div class="invalid-feedback">
            <span v-if="!$v.email.required">Email is requied</span>
          </div>
        </div>

        <div class="form-group padding-field-password">
          <input
            class="form-control pos_input"
            type="password"
            placeholder="Email"
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

        <div class="btn">
            <button type="button" class="btn btn-primary"  v-on:click="handleSubmit"> 
              <span>Đăng nhập</span>
              </button>
        </div>

        <div class="forgotPass">
          <router-link to = "/#">Quên mật khẩu ? </router-link>
        </div>

        <hr/>

        <div class="btn">
            <router-link to = "/register" tag="button" class="btn btn-success"><span>Đăng ký</span> </router-link>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { required, minLength,email } from "vuelidate/lib/validators";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password:""
    };
  },
   methods: {
    handleSubmit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
    },
  },
  validations: {
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(7)
    }
  },
};
</script>

<style lang="scss" scoped>
.containers {
  background:rgb(241, 241, 241);
  // background-image: url(../assets/img.jpg);
  //  background-position: center; /* Center the image */
  // background-repeat: no-repeat; /* Do not repeat the image */
  // // background-size: cover; /* Resize the background image to cover the entire container */
  //  background-size: 100% 100%;
  height: 100vh;
  display: flex;
  .section {
    width: 50%;
    .content {
      margin-left: 80px;
      margin-top: 30%;
      text-align: left;

      h2 {
        font-size: 45px;
        color: blue;
        font-weight: 800;
      }
      p {
        padding-top: 30px;
        font-size: 28px;
        font-weight: 700;
        // color:rgb(91, 243, 248);
      }
    }
  }
  .aside {
    width: 50%;
    margin-top: 10%;
    .formLogin {
      width: 60%;
      height: 75%;
      margin: 0 auto;
      background: #fff;
      border-radius: 15px;
      .padding-field-email {
        height: 80px;
        padding-top: 25px;
      }
      .padding-field-password {
         height: 50px;
      }
      .form-group{
        .pos_input{
          margin-top: 20px;
          width: 90%;
          margin: 0 auto;
        }
        label {
          flex-basis: 25%;
          text-align: left;
          align-items: center;
        }
        input {
          width: 100%;
          flex-basis: 70%;
          border: 1px solid grey;
          border-radius: 5px;
          padding: 4px;
        }
        .invalid-feedback {
          margin-top: 8px;
          text-align: left;
          margin-left: 5%;
        }
      }

      .btn {
        width: 98%;
        span {
          font-weight: 700;
          color: #fff;
          font-size: 20px;
        }
      }
      .forgotPass {
        color:royalblue;
      }
    }
  }
}
</style>
