<template>
  <div class="containers">
    <div class="wrapper">
      <navbar />
      <img
        src="../assets/imagesbook.jpg"
        alt="no no"
        width="100%"
        height="300"
      />

      <div class="content">
        <div class="category">
          <div class="drop">
            <b-dropdown
              id="dropdown-1"
              variant="primary"
              text="Danh mục sách"
              class="m-md-2"
            >
              <b-dropdown-item v-for="cate in cates" :key="cate.id">
                {{ cate.name }}</b-dropdown-item
              >
            </b-dropdown>
          </div>
          <div class="search">
            <b-form-input
              v-model="text"
              placeholder="Nhập tên sách, tác giả "
            ></b-form-input>
            <b-button variant="primary">Tìm kiếm</b-button>
          </div>
        </div>
        <div class="container">
          <h2>Sách mới</h2>
          <hr />
        </div>

          <div class="container">
            <div class="row">
              <div class="col-sm-4" v-for="book in bookArray" :key="book.id">
                <item v-bind:bookItem="book" />
              </div>
            </div>
          </div>
      </div>

     
    </div>
  </div>
</template>

<script>
import item from "../component/item.vue";
import { mapGetters, mapActions } from "vuex";
import navbar from "../component/navbar.vue";
export default {
  name: "book",
  data() {
    return {
      cates: [
        {
          id: 1,
          name: "Xã hội",
        },
        {
          id: 2,
          name: "Khoa học",
        },
        {
          id: 3,
          name: "Kinh tế",
        },
      ],
      text: "",
    };
  },
  components: { navbar,item},
  methods: {
    ...mapActions({
      books: "BOOK/getAllBook",
    }),
    getAllBooks() {
      this.books();
    },
  },
  computed: {
    ...mapGetters({
      bookArray: "BOOK/getAllBook",
    }),
  },
  mounted() {
    this.getAllBooks();
  },
};
</script>
<style lang="scss" scoped>
.containers {
  .content {
    min-height: 100vh;
    .category {
      height: 100px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .drop {
        position: relative;
        z-index: 1;
      }
      .search {
        width: 800px;
        display: flex;
        input {
          width: 600px;
        }
        button {
          margin-left: 30px;
        }
      }
    }
    .container {
    }
  }
}
</style>
