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
      title="Update account"
      ok-title="Save"
      cancel-variant="light"
      hide-header-close
      @ok.prevent="submitUpdatePlace"
    >
      <form @submit.prevent="submit">
        <div class="form-group">
          <label for="">Name: </label>
          <input
            class="form-control"
            type="text"
            v-model.trim="$v.accountName.$model"
            :class="{
              'is-invalid': $v.accountName.$error,
              'is-valid': !$v.accountName.$invalid,
            }"
          />
          <div class="invalid-feedback">
            <span v-if="!$v.accountName.required">Name is requied</span>
            <span v-if="!$v.accountName.maxLength">
              Name is less than{{
                $v.accountName.$params.maxLength.max
              }}
              letters
            </span>
          </div>
        </div>
        <div class="form-group">
          <label for="">Email: </label>
          <input
            class="form-control"
            type="text"
            v-model="emailAddress"
            disabled
          />
        </div>
        <div class="form-group">
          <label for="">Role name:</label>
          <select
            class="red"
            name=""
            id="role"
            v-model="roleId"
            :disabled="account.userId == this.accountId"
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
      accountId: "",
      accountName: "",
      emailAddress: "",
      roleId: 1,
      roles: [
        { id: 1, name: "Admin" },
        { id: 2, name: "Dac" },
        { id: 3, name: "Advertiser" },
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
    accountName: {
      required,
      maxLength: maxLength(50),
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
    
    showUpdatePlaceModel() {
      // this.dataRow = JSON.parse(JSON.stringify(data));
      // this.accountId = this.dataRow.userId;
      // this.accountName = this.dataRow.userName;
      // this.emailAddress = this.dataRow.userEmailAddress;
      // this.roleId = this.dataRow.roleId;
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
          userName: this.accountName,
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
