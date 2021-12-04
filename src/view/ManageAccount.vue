<template>
  <div class="contain">
    <div class="top">
      <div class="search">
        <b-form-input
          class="b_search"
          type="search"
          placeholder="Search user name..."
          v-model="infoSearch"
        ></b-form-input>
      </div>

      <ModelAddUser />
    </div>

    <div class="table">
      <MainTable
        v-bind:dataArray="dataArray"
        v-bind:columns="columns"
        v-bind:infoSearch="infoSearch"
      />
    </div>
  </div>
</template>

<script>
import MainTable from "../component/MainTable";
import { COLUMNS } from "../constants/table_column";
import { mapGetters, mapActions } from "vuex";
import ModelAddUser from "../component/ModelManageUser/ModelAddUser.vue";
export default {
  name: "accounts",
  data() {
    return {
    //   nameAccount: localStorage.getItem("nameAccount"),
      name: "",
      columns: COLUMNS["accounts"],
      infoSearch: "",
    };
  },
  components: {
    MainTable,
    ModelAddUser
  },
  computed: {
    ...mapGetters({
      dataArray: "AUTH/getAllUser",
    }),
  },
  mounted() {
    this.getAllUser();
  },
  methods: {
    ...mapActions({
      users: "AUTH/getAllUser",
    }),
    getAllUser() {
      this.users();
    },
  },
};
</script>

<style lang="scss" scoped>
.contain {
    width: 100%;
  height: 100%;
  padding: 25px 35px;
  .top {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 2px;
    .search {
      .b_search {
        background: rgb(219, 219, 208);
        width: 280px;
      }
    }
    .middle {
    }
  }
  .table {
    margin-top: 10px;
  }
}
</style>
