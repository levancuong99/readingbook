<template>
  <div class="containers">
    <div class="wrapper">
      <navbar />
       <img
        src="../assets/imagesbook.jpg"
        alt="no n0"
        width="100%"
        height="300"
      />
      <div class="content">
        <div class="hotbook">
          <div class="container">
            <h2>Sách đọc nhiều</h2>
            <hr />
          </div>
          <div class="container">
            <div class="row">
              <div class="col-sm-3" v-for="book in bookArray" :key="book.id">
                <item1 v-bind:bookItem="book" />
                <div v-if= "book.id==3">
                  <div class="condition"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="hotbook">
            <div class="container">
              <h2>Sách mới</h2>
              <hr />
            </div>
            <div class="container">
              <div class="row">
                <div class="col-sm-4"><item1 /></div>
                <div class="col-sm-4"><item1 /></div>
                <div class="col-sm-4"><item1 /></div>
                <div class="col-sm-4"><item1 /></div>
                <div class="col-sm-4"><item1 /></div>
              </div>
            </div>
          </div>

          <div class="hotbook">
            <div class="container">
              <h2>Sách đọc nhiều</h2>
              <hr />
            </div>
            <div class="container">
              <div class="row">
                <div class="col-sm-4"><item /></div>
                <div class="col-sm-4"><item /></div>
                <div class="col-sm-4"><item /></div>
                <div class="col-sm-4"><item /></div>
                <div class="col-sm-4"><item /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "../component/navbar.vue";
import item from "../component/item.vue";
import item1 from "../component/item1.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "homeuser",
  data() {
    return {
      text: "",
    };
  },
  components: { navbar, item,item1 },
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
  .condition{
    margin-top:50px !important;
  }

  .content {
    .hotbook {
      margin-top: 50px;
      h2 {
        font-size: 30px;
        font-weight: 700;
        text-align: left;
      }
      hr {
        background-color: blue;
      }
    }
  }
}
</style>
