<template>
  <div class="containers">
    <div class="section">
      <div class="content">
          <div class="mybook">
          <img src="../assets/newlogo.jpg" width="50px" height="50px" style="border-radius:50%"/>
          <h2>MY_BOOK</h2>
        </div>
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
               <span v-if="!$v.email.required">Bạn cần nhập email</span>
               <span v-if="!$v.email.email">Email không hợp lệ</span>
          </div>
        </div>

        <div class="form-group padding-field-password">
          <input
            class="form-control pos_input"
            type="password"
            placeholder="Mật khẩu"
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
import { mapActions } from "vuex";
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
      ...mapActions({
      login: "AUTH/login",
    }),
    handleLogin() {
      this.login({ email: this.email, password: this.password });
    },
    handleSubmit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
     this.handleLogin();
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
  // background:rgb(241, 241, 241);
  background-image: url(../assets/newimg3.jpeg);
   background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
   background-size: 100% 100%;
  height: 100vh;
  display: flex;
  .section {
    width: 50%;
    .content {
      margin-left: 80px !important;
      margin-top: 30% !important;
      text-align: left;
       .mybook {
        display: flex;
         h2 {
        font-size: 45px;
        color: blue;
        font-weight: 800;
        
      }
      }

      p {
        padding-top: 30px;
        font-size: 28px;
        font-weight: 700;
      }
    }
  }
  .aside {
    width: 50% !important;
    margin-top: 10% !important;
    .formLogin {
      width: 60%;
      height: 75%;
      margin: 0 auto !important;
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
      hr{
        width: 90%;
      }
    }
  }
}
</style>
