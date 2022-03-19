<template>
    <div class="contain">
    <div class="top">
      <div class="search">
        <b-form-input
          class="b_search"
          type="search"
          placeholder="Tìm kiếm theo tên sách"
          v-model="infoSearch"
        ></b-form-input>
      </div>

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
export default {
      name: "prop",
  data() {
    return {
      name: "",
      columns: COLUMNS["props"],
      infoSearch: "",
    };
  },
  components: {
    MainTable,
  },
  computed: {
    ...mapGetters({
      dataArray: "PROP/getAllProp",
    }),
  },
  mounted() {
    this.getAllProp();
  },
  methods: {
    ...mapActions({
      props: "PROP/getAllProp",
    }),
    getAllProp() {
      this.props();
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