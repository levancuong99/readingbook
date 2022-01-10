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
        <div class="info">
          <div class="avt">
            <img src="../assets/avt1.jpg" width="200px" height="200px" />
          </div>
          <div class="name">
            <p class="title">Tên người dùng</p>
            <p>Lê Văn Cường</p>
          </div>
          <div class="email">
            <p class="title">Email</p>
            <p>levancuong@gmail.com</p>
          </div>
          <div class="dateofbirth">
            <p class="title">Ngày sinh</p>
            <p>15-05-1999</p>
          </div>
        </div>
        <div class="container">
            <div class="bookalreadyread">
          <h2>Sách bạn đã đọc</h2>
          <hr>
             <div class="row">
              <div class="col-sm-4" v-for="book in bookArrays.books" :key="book.id">
                <item v-bind:bookItem="book" />
              </div>
            </div>
        </div>
        </div>

         <div class="container">
            <div class="bookalreadylike">
          <h2>Sách của bạn</h2>
          <hr>
             <div class="row">
              <div class="col-sm-4" v-for="book in bookArraysLike.books" :key="book.id">
                <item v-bind:bookItem="book" />
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
import { mapGetters, mapActions } from "vuex";
export default {
  name: "profile",
  data() {
    return {};
  },
   components: {
    item,navbar
  },
 methods: {
    ...mapActions({
      books: "BOOK/getAllBookViewed",
    }),
    getAllBookViewed() {
    let params= {
        userId:localStorage.getItem('userId'),
        pageNumber:1
    }
      this.books(params);
    },

    ...mapActions({
      bookliked: "BOOK/getAllBookLiked",
    }),
    getAllBookLiked() {
    let params= {
        userId:localStorage.getItem('userId'),
        pageNumber:1
    }
      this.bookliked(params);
    },
  },
  computed: {
    ...mapGetters({
      bookArrays: "BOOK/getAllBookViewed",
    }),
     ...mapGetters({
      bookArraysLike: "BOOK/getAllBookLiked",
    }),
  },
  mounted() {
    this.getAllBookViewed();
    this.getAllBookLiked();
  },
};
</script>
<style lang="scss" scoped>
.containers {
  .content {
    .info {
      width: 1000px;
      height: 200px;
      margin: 0 auto;
      border: 1px solid gray;
      border-radius: 20px;
      position: absolute;
      top: 270px;
      left: 190px;
      z-index: 1;
      background: #fff;
      display: flex;
      align-items: center;
      font-size: 18px;
      font-weight: 600;

      .avt {
        img {
          border: 1px solid gray;
          border-radius: 20px;
        }
      }
      .title {
        color: gray;
      }
      .name {
        width: 200px;
        height: 100%;
        border-right: 0.1px solid lightgray;
        padding-top: 50px;
      }
      .email {
        width: 300px;
        height: 100%;
        padding-top: 50px;
      }
      .dateofbirth {
        width: 300px;
        height: 100%;
        border-left: 0.1px solid lightgray;
        padding-top: 50px;
      }
    }
  }
  .container{
    display: flex;
    .bookalreadyread {
    margin-top:150px;
    color:red;
  }
  }
 
}
</style>
