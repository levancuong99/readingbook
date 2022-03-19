<template>
  <div class="contain">
    <div class="top">
      <div class="search">
        <b-form-input
          class="b_search"
          type="search"
          placeholder="Tìm kiếm theo tên sách "
          v-model="infoSearch"
        ></b-form-input>
      </div>
      <ModelAddCate />
      <ModelAddBook />
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
import {mapActions ,mapGetters} from "vuex";
import ModelAddBook from "../component/ModelManageBook/ModelAddBook.vue";
import ModelAddCate from "../component/ModelManageBook/ModelAddCate.vue";
export default {
  name: "books",
  data() {
    return {
      name: "",
      columns: COLUMNS["books"],
      infoSearch: "",
    };
  },
  components: {
    MainTable,
    ModelAddBook,
    ModelAddCate
  },
  computed: {
    ...mapGetters({
      dataArray: "BOOK/getAllBook",
    }),
  },
  mounted() {
    this.getAllBook();
  },
  methods: {
    ...mapActions({
      books: "BOOK/getAllBook",
    }),
    getAllBook() {
      this.books();
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
