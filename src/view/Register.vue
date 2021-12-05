<template>
  <div class="containers">
    <div class="section">
      <div class="content">
        <div class="mybook">
          <img src="../assets/logo.png" width="50px" height="50px"/>
          <h2>My book</h2>
        </div>
        <p>
          Việc đọc sách rất quan trọng. Nếu bạn biết cách đọc, cả thế giới sẽ mở
          ra cho bạn.
        </p>
      </div>
    </div>

    <div class="aside">
      <div class="formRegister">
        <div class="form-group padding-field-name">
          <input
            class="form-control pos_input"
            type="text"
            placeholder="Họ tên"
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

        <div class="form-group padding-field-password">
          <input
            class="form-control pos_input"
            type="password"
            placeholder="Nhập lại mật khẩu"
            v-model.trim="$v.retypePassword.$model"
            :class="{
              'is-invalid': $v.retypePassword.$error,
              'is-valid': !$v.retypePassword.$invalid,
            }"
          />
          <div class="invalid-feedback">
            <span v-if="!$v.retypePassword.required">Bạn cần nhập xác nhận mật khẩu</span>
             <span v-if="(password && !$v.retypePassword.sameAsPassword) && $v.retypePassword.required">Mật khẩu không khớp với mật khẩu trước đó</span>
          </div>
        </div>

        <div class="dateAndGender">
          <div class="date">
            <input
              type="text"
              onfocus="this.type='date'"
              placeholder="Ngày sinh"
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

          <div class="gender">
            <div class="boy">
               <input type="radio" name="gender" id="nam" value="false" checked/>
              <label for="nam">Nam</label>
            </div>
            <div class="girl">
                <input type="radio" name="gender" id="nu" value="true" />
                <label for="nu">Nữ</label>
            </div>
            
          </div>
        </div>

        <div class="form-group padding-field-email ">
          <input
            class="form-control pos_input"
            type="text"
            placeholder="Địa chỉ"
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

        <div class="btn">
          <button
            type="button"
            class="btn btn-primary"
            v-on:click="handleSubmit"
          >
            <span>Đăng ký</span>
          </button>
        </div>

         <div redirectLogin>
         <p>Bạn đã có tài khoản ? <router-link to = "/" class="linkToLogin">Đăng nhập tại đây </router-link></p> 
        </div>

      </div>

    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import {
  required,
  minLength,
  email,
  maxLength,
  sameAs
} from "vuelidate/lib/validators";
export default {
  name: "Register",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      retypePassword: "",
      dateOfBirth: "",
      gender: "",
      address: "",
      roleId:2
    };
  },
  methods: {
      ...mapActions({
      register: "AUTH/registerUsers",
    }),
    handleRegister() {
      this.register({ 
        fullName:this.name,
        email: this.email,
        password: this.password,
        address:this.address,
        dateOfBirth:this.dateOfBirth,
        gender:this.gender,
        roleId:this.roleId 
        });
    },
    handleSubmit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
           this.handleRegister();
    },
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
  // background: rgb(241, 241, 241);
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
    width: 50%;
    margin-top: 3% !important;
    .formRegister {
      box-shadow: 0 20px 30px 0 rgba(0, 0, 0, 0.1);
      width: 70%;
      height: 96%;
      margin: 0 auto !important;
      background: #fff;
      border-radius: 15px;

      .padding-field-name {
        height: 80px;
        padding-top: 25px;
      }
      .padding-field-email {
        height: 55px;
      }
      .padding-field-password {
        height: 55px;
      }
      .form-group {
        .pos_input {
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
      .dateAndGender {
        text-align: left;
        margin-left: 25px !important;
        height: 55px;
        display: flex;
        .date {
          input {
            width: 200px;
            height: 33px;
          }
        }
        .gender {
          padding: 0 40px;
          display: flex;
          .boy {
            lable {
              padding:0 15px;
            }
          }
          .girl {
            margin-left: 30px;
            lable {
              padding:0 15px;
            }
          }
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
      .redirectLogin{
        
        .linkToLogin {
        color: royalblue;
      }

      }
      

    }
  }
}
</style>
