<template>
  <div class="containers">
    <div class="wrapper">
      <navbar />
       <img
        src="../assets/imagesbook.jpg"
        alt="no n0"
        width="100%"
        height="150"
      />
       <div class="direction">
          <router-link to="/homeuser">Trang chủ </router-link>
      </div>
      <div class="content">
        <div class="hotbook bg1">
            <h2>Sách đọc nhiều</h2>
          <div class="containerbook">
              <div v-for="book in bookArray.books"  :key="book.bookId">
                <router-link :to="{name:'bookdetail',params:{id:book.bookId}}"><item1 v-bind:bookItem="book" /></router-link>
              </div>
          </div>

        <b-pagination
        size="md"
        @change="getAllBookBestViewer($event)"
        v-model="bookArray.currentPage"
        :total-rows="bookArray.allRow"
        :per-page="bookArray.numberRowCurrentpage"
        align="center"
      ></b-pagination>
         
        </div>

          <hr>
         <div class="hotbook bg2">
              <h2>Sách được yêu thích nhiều</h2>
              <div class="containerbook">
                <div
                  v-for="book in bookArrayBestLiker.books"
                  :key="book.bookId"
                >
                  <router-link
                    :to="{ name: 'bookdetail', params: { id: book.bookId } }"
                    ><item1 v-bind:bookItem="book"
                  /></router-link>
              </div>
            </div>
               <b-pagination
            size="md"
            @change="getAllBookBestLiker($event)"
            v-model="bookArrayBestLiker.currentPage"
            :total-rows="bookArrayBestLiker.allRow"
            :per-page="bookArrayBestLiker.numberRowCurrentpage"
            align="center"
          ></b-pagination>
          </div>
            <hr>
           <div class="hotbook">
              <h2>Sách mới nhất </h2>
              <div class="containerbook">
                <div
                  v-for="book in bookArrayNewest.books"
                  :key="book.bookId"
                >
                  <router-link
                    :to="{ name: 'bookdetail', params: { id: book.bookId } }"
                    ><item1 v-bind:bookItem="book"
                  /></router-link>
                </div>
              </div>

               <b-pagination
            size="md"
            @change="getAllBookNewest($event)"
            v-model="bookArrayNewest.currentPage"
            :total-rows="bookArrayNewest.allRow"
            :per-page="bookArrayNewest.numberRowCurrentpage"
            align="center"
          ></b-pagination>

            </div>

      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import navbar from "../component/navbar.vue";
import item1 from "../component/item1.vue";
import Footer from "../component/footer.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "homeuser",
  data() {
    return {
      text: "",
    };
  },
  components: { navbar,item1,Footer },
  methods: {
     ...mapActions({
      booksNews: "BOOK/getAllBookNewest",
    }),
      getAllBookNewest(e) {
      this.booksNews(e);
    },
    ...mapActions({
      booksBestViewer: "BOOK/getAllBookBestViewer",
    }),
      getAllBookBestViewer(e) {
      this.booksBestViewer(e);
    },
      ...mapActions({
      booksBestLiker: "BOOK/getAllBookBestLiker",
    }),
    getAllBookBestLiker(e) {
      this.booksBestLiker(e);
    },
  
  },
  computed: {
      ...mapGetters({
      bookArrayNewest: "BOOK/getAllBookNewest",
    }),
    ...mapGetters({
      bookArray: "BOOK/getAllBook",
    }),
      ...mapGetters({
      bookArrayBestLiker: "BOOK/getAllBookBestLiker",
    }),
  },
  mounted() {
    this.getAllBookBestViewer(1);
    this.getAllBookBestLiker(1);
     this.getAllBookNewest(1) ;
  },
};
</script>
<style lang="scss" scoped>
.containers {
  .condition{
    margin-top:50px !important;
  }

  .direction {
     width: 1200px;
     margin: 0 auto;
     text-align: left;
     padding-left: 15px;
     margin-top: 50px;
     a{
       font-size: 18px;
       font-weight: 600;
       text-decoration: none;
       color: #000 !important;
     }
     a:hover {
       color: rgb(33, 45, 214) !important;
     }
  }
  .content {
    width: 1200px;
    margin: 0 auto;
    // .bg1{
    //   background: rgb(238, 238, 215);
    // }
    // .bg2{
    //   background: rgb(176, 238, 235);
    // }
    .hotbook {
      .pagination{
        margin-bottom: 0 !important;
        padding-bottom: 20px;
      } 
      h2 {
        font-size: 30px;
        font-weight: 700;
        text-align: left;
        padding-top:20px;
        padding-left:20px;
        font-family:  serif;
       
      }
      hr {
        background-color: blue;
      }
      .containerbook{
        display: flex;
        flex-wrap: wrap;
        .style{
          margin-left: 20px;
        }
      
      }
    }
  }
}
</style>
