<template>
  <div class="contain">
    <div class="wrapper">
      <navbar />
      <div class="containerdetail">
        <div class="content"></div>
        <div class="title">
          <h2>Thông tin sách </h2>
        </div>
        <div class="center_book">
          <div class="image">
            <img
              :src="getBook.imgBook"
              width="300px"
              height="400px"
            />
          </div>
          <div class="centerright">
            <p class="title_book mg">{{ getBook.bookName }}</p>
            <hr />
             <p class="title_other">Tác giả: {{ getBook.authorName }}</p>
            <p class="title_other">Thể loại:{{ getBook.cateName }}</p>
           
            <p class="title_other">Lượt xem: {{ getBook.numberView }}</p>
            <p class="title_other">Lượt thích: {{ getBook.numberLike }}</p>
            <div class="examine mg">
              <div class="like" :class="{active:this.isLiked}" v-on:click="handleLike">
                <p><i class="far fa-heart"></i>{{this.likeText}}</p>
              </div>
              <a href="#1" ><div class="comment1">
                <p><i class="far fa-comment"></i>Bình luận</p>
              </div></a>
            </div>
            <div class="mg" v-on:click="handleRead" >
                 <modelreadbook v-bind:content="getBook.linkBook" />
            </div>
           
          </div>
        </div>
        <div class="des">
        <h2>Mô tả</h2>
        <hr />
        <p>{{ getBook.description }}</p>
      </div>
    
      <div class="com">
        <h2 id="1">Bình luận</h2>
        <hr />
        <div class="group">
          <b-form-textarea
          class="textarea"
          v-model="comment"
          placeholder="Nhập bình luận..."
          rows="3"
          max-rows="4"
        ></b-form-textarea>

         <b-button class="button"  v-on:click="handleComment" variant="primary">Gửi</b-button>
        </div>
        <div class="listcmt" v-for="comment in commentArray.comments" :key="comment.id">
            <itemcmt v-bind:commentItem="comment"/>
        </div>
      </div>
      </div>
      <Footer />
    </div>
    
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import modelreadbook from "../component/ModelReadBook.vue";
import navbar from "../component/navbar.vue";
import itemcmt from "../component/itemcmt.vue";
import Footer from "../component/footer.vue";
export default {
  name: "bookdetail",
  data() {
    return {
      likeText:"Yêu thích",
      bookId: "",
      bookName: "",
      description: "",
      imgBook: "",
      linkBook: "",
      numberView: 0,
      numberLike:0,
      authorName: "",
      authorProfile: "",
      cateName: "",
      comment: "",
      bookItem: {},
    };
  },
  components: {
    navbar,
    modelreadbook,
    Footer,itemcmt
  },

  computed: {
    ...mapGetters({
      getBook: "BOOK/getBookInfor",
    }),
     ...mapGetters({
      commentArray: "COMMENT/getAllComment",
    }),
    ...mapGetters({
      account: "AUTH/getUserInfor",
    }),
     ...mapGetters({
      isLiked: "BOOK/getIsLiked",
    }),
  },
  props: ["id"],
  methods: {

     ...mapActions({
      increaseLike: "BOOK/increaseLike",
    }),
    getIncreateLiked() {
     this.increaseLike(3);
    },

     ...mapActions({
      addLiked: "BOOK/bookAlreadyLikeByUser",
    }),
    
    getAddLiked() {
     let param = {
       idUser: localStorage.getItem('userId'),
       bookId:this.id
     }
     this.addLiked(param);
    },
      ...mapActions({
      isLikedByUser: "BOOK/getIsLikedBookByUser",
    }),
    getIsLikedByUser() {
     let param = {
       idUser: localStorage.getItem('userId'),
       bookId:this.id
     }
     this.isLikedByUser(param);
    },
    ...mapActions({
      book: "BOOK/getBookById",
    }),
    getBookById() {
      this.book(this.id);
    },
     ...mapActions({
      comments: "COMMENT/getAllComment",
    }),
    getAllComment() {
      let params={
        bookId:this.id,
        pageNumber:1
      }
      this.comments(params);
    },
      ...mapActions({
      create: "COMMENT/createComment",
    }),
    handleLike(){
      let token=localStorage.getItem('token');
      if(token!=null) {
        if(this.isLiked) {
         this.likeText="Đã Yêu thích";
       }else {
          this.isLiked=!this.isLiked;
          this.likeText="Đã Yêu thích";
          this.getAddLiked();
         this.$router.go(0);
      //  this.getIncreateLiked();
       }
      }else {
        this.$router.push({ path: '/login' })
      }
    
    },
    handleRead() {
         let token=localStorage.getItem('token');
      if(token==null) {
          this.$router.push({ path: '/login' })
      }
    },
    handleComment() {
        let token=localStorage.getItem('token');
      if(token!=null) {
      let param={
        commentId:null,
        userId: localStorage.getItem('userId'),
        bookId:this.id,
        content:this.comment
      }
      this.create(param);
      console.log(param.userId);
      console.log("vo cmt");
      this.comment="";
      this.getAllComment();
      this.$router.go(0)
      }else {
         this.$router.push({ path: '/login' })
      }
    },
    
  },
  mounted() {
    this.getIsLikedByUser();
    this.getBookById();
    this.getAllComment();
  },
};
</script>

<style lang="scss" scoped>
.contain {
  .wrapper {
    .containerdetail {
      width: 1000px !important;
      margin: 0 auto;
      .title {
        margin: 30px 0 30px 0;
        h2 {
          text-align: left;
        }
      }
      .center_book {
        display: flex;
        .image {
          display: flex;
          justify-content: center;
          width: 500px;
        }
        .centerright {
          width: 500px;
          text-align: left;
          margin-left: 30px;
          .title_book {
            font-size: 30px;
            font-weight: 700;
            margin: 10px 10px 10px 0;
          }
          .title_other {
            font-size: 20px;
            font-weight: 500;
            margin: 10px 10px 10px 0;
          }
          .mg {
            margin: 20px 0 0 0px;
          }
          .authorProfile {
            width: 95%;
            height: 100px;
            overflow: auto;
            border: 0.1px solid gray;
            text-align: left;
            font-size: 14px;
          }
          .examine {
            display: flex;
            .active {
              background: red;
              i {
                color: #fff !important;
              }
            }
            .like {
              width: 150px;
              height: 50px;
              border: 1px solid lightgray;
              border-radius: 10px;
              p {
                line-height: 50px;
                text-align: center;
                font-size: 16px;
                font-weight: 500;
                i {
                  margin: 0 5px;
                  color: red;
                }
              }
            }
            .comment1 {

              margin-left: 50px;
              width: 150px;
              height: 50px ;
              border: 1px solid lightgray;
              border-radius: 10px;
              p {
                line-height: 50px;
                text-align: center;
                font-size: 16px;
                font-weight: 500;
                i {
                  margin: 0 5px;
                  color: blue;
                }
              }
            }
          }
        }
      }
      .des{
          margin-top:100px;
          h2{
              font-size: 35px;
              font-weight: 500;
          }
      }
      .com{
          
          margin-top:100px;
         padding-bottom: 100px;

          h2{
              font-size: 35px;
              font-weight: 500;
          }
          .group {
            display: flex;
             .textarea{
            width: 94%;
          }
          .button{
            width:60px;
          }
          }
         
      }
    }
  }
}
</style>