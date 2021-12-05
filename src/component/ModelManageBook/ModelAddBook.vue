<template>
  <div class="addModal">
    <b-button v-b-modal.modal-prevent class="bg-color">Create account</b-button>
    <b-modal
      class="model modal-content"
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
        <!-- <div>
          <label for="">Name: </label>
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
            <span v-if="!$v.name.required">Name is requied</span>
            <span v-if="!$v.name.maxLength">
              Name is less than{{ $v.name.$params.maxLength.max}} letters
            </span>
          </div>
        </div> -->
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
            <span v-if="!$v.email.email">Invalid email</span>
            <span v-if="!$v.email.required">Email is requied</span>
          </div>
        </div>

        <div class="form-group">
          <label for="">Password: </label>
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
            <span v-if="!$v.password.required">Password is requied</span>
            <span v-if="!$v.password.minLength">
              Password is more than{{ $v.password.$params.minLength.min - 1 }} letters
            </span>
          </div>
        </div>

        <div class="form-group">
          <label for="">Role name:</label>
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
      roles: [
        { id: 1, name: "Admin" },
        { id: 2, name: "User" },
      ],
      email: "",
      name: "",
      password: "",
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
        userName: this.name,
        userPassword: this.password,
        emailAddress: this.email,
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
  background-color: #468faf;
}
.bg-color:hover,
.bg-color:active,
.bg-color:visited {
  background-color: #468faf;
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