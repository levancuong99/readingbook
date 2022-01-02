<template>
     <div class="contain">
    <div class="top">
      <div class="search">
        <b-form-input
          class="b_search"
          type="search"
          placeholder="Tìm kiếm theo tiêu đề"
          v-model="infoSearch"
        ></b-form-input>
      </div>

      <ModelAddPost />
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
import ModelAddPost from "../component/ModelManagePost/ModelAddPost.vue";
export default {
    name: "accounts",
  data() {
    return {
      name: "",
      columns: COLUMNS["posts"],
      infoSearch: "",
    };
  },
  components: {
    MainTable,
    ModelAddPost
  },
  computed: {
    ...mapGetters({
      dataArray: "POST/getAllPost",
    }),
  },
  mounted() {
    this.getAllPost();
  },
  methods: {
    ...mapActions({
      posts: "POST/getAllPost",
    }),
    getAllPost() {
      this.posts();
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