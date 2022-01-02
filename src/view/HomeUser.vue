<template>
  <div class="containers">
    <div class="wrapper">
      <navbar />
      <carousel />
      <div class="content">
        <div class="hotbook">
          <div class="container">
            <h2>Sách đọc nhiều</h2>
            <hr />
          </div>
          <div class="container">
            <div class="row">
              <div class="col-sm-4" v-for="book in bookArray" :key="book.id">
                <item v-bind:bookItem="book" />
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
                <div class="col-sm-4"><item /></div>
                <div class="col-sm-4"><item /></div>
                <div class="col-sm-4"><item /></div>
                <div class="col-sm-4"><item /></div>
                <div class="col-sm-4"><item /></div>
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
import carousel from "../component/carousel.vue";
import item from "../component/item.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  components: { navbar, carousel, item },
  name: "homeuser",
  data() {
    return {
      text: "",
    };
  },
  component: {
    navbar,
    carousel,
    item,
  },
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
