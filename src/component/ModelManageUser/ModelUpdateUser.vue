<template>
  <div class="wrapper">
    <b-icon
      icon="pen"
      aria-hidden="true"
      variant="success"
      @click="showUpdatePlaceModel(data.index, data.item)"
    >
    </b-icon>
    <b-modal
      id="modal-update"
      ref="UpdatePlaceModal"
      title="Cập nhật thông tin"
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
        <div class="form-group">
          <label for="">Role name:</label>
          <select
            class="red"
            name=""
            id="role"
            v-model="roleId"
          >

            <option v-for="role in roles" v-bind:value="role.id" :key="role.id">
              {{ role.name }}
            </option>
          </select>
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
      dataRow: {},
      fullName: "",
      email: "",
      address:"",
      roleId: 1,
      roles: [
        { id: 1, name: "Quản trị viên" },
        { id: 2, name: "Người dùng" },
      ],
    };
  },
  props: {
    data: {
      type: Object,
      require: true,
    },
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
      updateUser: "AUTH/updateUsersByAdmin",
    }),
    
    showUpdatePlaceModel(index, data) {
      this.dataRow = JSON.parse(JSON.stringify(data));
      this.fullName = this.dataRow.fullName;
      this.email = this.dataRow.email;
      this.address=this.dataRow.address;
      this.roleId = this.dataRow.roleId.toString();
      this.$refs.UpdatePlaceModal.show();
    },

    submitUpdatePlace() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      let params = {
        id: this.dataRow.userId,
        obj: {
          fullName: this.fullName,
          address:this.address,
          roleId: this.roleId,
        },
      };
      this.updateUser(params);
      this.$nextTick(() => {
        this.$refs.UpdatePlaceModal.hide();
      });
    },
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
