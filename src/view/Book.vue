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
              <b-form-select v-model="selected" class="mb-3">
                <b-form-select-option  :value="0"> Danh mục sách</b-form-select-option>
                <b-form-select-option  v-for="cate in listcates" :key="cate.cateId" :value=cate.cateId> {{ cate.cateName }}</b-form-select-option>
              </b-form-select>
  </div>
          <div class="search">
            <b-form-input
              v-model="text"
              placeholder="Nhập tên sách, tác giả "
            ></b-form-input>
            <b-button  v-on:click="handleSearchByString" variant="primary">Tìm kiếm</b-button>
          </div>
        </div>

        <div class="sub_content">
          <div class="containerbook">
            <div v-for="book in bookArray" :key="book.id">
              <item1 v-bind:bookItem="book" />
              <!-- <div class="style"></div> -->
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  </div>
</template>

<script>
import item1 from "../component/item1.vue";
import { mapGetters, mapActions } from "vuex";
import navbar from "../component/navbar.vue";
import Footer from "../component/footer.vue";
export default {
  name: "book",
  data() {
    return {
      selected:"0",
      text:""
    };
  },
  components: { navbar, item1,Footer },
  methods: {
    ...mapActions({
      books: "BOOK/getAllBook",
    }),
    getAllBooks() {
      this.books();
    },
     ...mapActions({
      cates: "CATE/getAllCate",
    }),
    getAllCates() {
      this.cates();
    },
    ...mapActions({
      bookSearchByCate: "BOOK/getAllBookSearchByCate",
    }),
    getAllBookSearchByCate() {
      this.bookSearchByCate();
    },
     ...mapActions({
      bookSearchByString: "BOOK/getAllBookSearch",
    }),
    getAllBookSearchByString() {
      this.bookSearchByString();
    },
    handleSearchByString() {
      let params = {
        cateId: this.selected,
        string: this.text,
        pageNumber: 1,
      };
      console.log(params);
      // this.getAllBookSearchByString(params);
     console.log(this.bookSearchByString(params));
      // console.log(this.bookArray);
    }
  },
  computed: {
    ...mapGetters({
      bookArray: "BOOK/getAllBook",
    }),
     ...mapGetters({
      listcates: "CATE/getAllCate",
    }),
   
  },
  mounted() {
    this.getAllBooks();
    this.getAllCates();
    
  },
};
</script>
<style lang="scss" scoped>
.containers {
  .content {
    .sub_content {
      width: 1200px;
      margin: 0 auto;
      .containerbook {
        display: flex;
        flex-wrap: wrap;
      }
    }
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
  }
}
</style>
