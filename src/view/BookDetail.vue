<template>
  <div class="contain">
    <div class="wrapper">
      <navbar />

        <div class="direction">
         <span v-if="!token"><router-link  to="/">Trang chủ </router-link><span class="seperate">></span><router-link  to="/book">Kho sách</router-link><span class="seperate">></span><router-link  :to="link">Chi tiết sách</router-link> </span> 
         <span v-else><router-link  to="/homeuser">Trang chủ </router-link><span class="seperate">></span><router-link  to="/book">Kho sách</router-link>  <span class="seperate">></span><router-link  :to="link">Chi tiết sách</router-link></span> 
      </div>
      <div class="containerdetail">
        <div class="content"></div>
        <div class="title">
          <h2 class="marginBottom"></h2>
        </div>
        <div class="center_book">
          <div class="image">
            <img :src="getBook.imgBook" width="300px" height="400px" />
          </div>
          <div class="centerright">
            <p class="title_book mg">{{ getBook.bookName }}</p>
            <hr />
            <p class="title_other">
              Tác giả: <span class="authorName"> {{ getBook.authorName }}</span>
            </p>
            <p class="title_other">
              Thể loại:<span class="cateName">{{ getBook.cateName }}</span>
            </p>

            <p class="title_other">Lượt xem: {{ getBook.numberView }}</p>
            <p class="title_other">Lượt thích: {{ getBook.numberLike }}</p>
            <div class="examine mg">
              <div v-on:click="handleRead">
                <modelreadbook v-bind:content="getBook.linkBook" />
              </div>
              <div
                class="like"
                :class="{ active: this.isLiked }"
                v-on:click="handleLike"
              >
                <p>
                  <i class="far fa-heart"></i
                  ><strong>{{ this.likeText }}</strong>
                </p>
              </div>
              <a href="#1"
                ><div class="comment1">
                  <p>
                    <i class="far fa-comment"></i><strong>Bình luận</strong>
                  </p>
                </div></a
              >
            </div>
          </div>
        </div>
        <div class="des">
          <p class="icondes"><i class="fas fa-book">Mô tả</i></p>
          <hr />
          <p class="description">{{ getBook.description }}</p>
        </div>

        <div class="com">
          <p class="icondes" id="1"><i class="far fa-comment">Bình luận</i></p>
          <hr />
          <div class="group">
            <b-form-textarea
              class="textarea"
              v-model="comment"
              placeholder="Nhập bình luận..."
              rows="2"
              max-rows="3"
            ></b-form-textarea>

            <b-button
              class="button"
              v-on:click="handleComment"
              variant="primary"
              >Gửi</b-button
            >
          </div>
          <div
            class="listcmt"
            v-for="comment in commentArray.comments"
            :key="comment.id"
          >
            <itemcmt v-bind:commentItem="comment" />
          </div>

          <b-pagination 
            class="paging"
            size="md"
            @change="getAllComment($event)"
            v-model="commentArray.currentPage"
            :total-rows="commentArray.allRow"
            :per-page="commentArray.numberRowCurrentpage"
            align="center"
          ></b-pagination>
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
      likeText: "Yêu thích",
      bookId: "",
      bookName: "",
      description: "",
      imgBook: "",
      linkBook: "",
      numberView: 0,
      numberLike: 0,
      authorName: "",
      authorProfile: "",
      cateName: "",
      comment: "",
      bookItem: {},
      token:"",
      link:""
    };
  },
  components: {
    navbar,
    modelreadbook,
    Footer,
    itemcmt,
  },

  computed: {
    ...mapGetters({
      getBook: "BOOK/getBookInfor",
      commentArray: "COMMENT/getAllComment",
      account: "AUTH/getUserInfor",
      isLiked: "BOOK/getIsLiked",
    }),
  },
  props: ["id"],
  methods: {
    ...mapActions({
      decreaseLike: "BOOK/decreaseLike",
    }),

      ...mapActions({
      increaseView: "BOOK/increaseView",
    }),

    ...mapActions({
      increaseLike: "BOOK/increaseLike",
    }),
    increaseLike1() {
      this.increaseLike(this.id);
    },
    

      ...mapActions({
      addViewed: "BOOK/bookAlreadyViewByUser",
    }),
     getAddViewed() {
      let param = {
        idUser: localStorage.getItem("userId"),
        bookId: this.id,
      };
      this.addViewed(param);
    },


    ...mapActions({
      addLiked: "BOOK/bookAlreadyLikeByUser",
    }),


    getAddLiked() {
      let param = {
        idUser: localStorage.getItem("userId"),
        bookId: this.id,
      };
      this.addLiked(param);
    },

    ...mapActions({
      deleteAddLiked: "BOOK/deleteBookAlreadyLikeByUser",
    }),

    deleteAddLiked1() {
      let param = {
        idUser: localStorage.getItem("userId"),
        bookId: this.id,
      };
      this.deleteAddLiked(param);
    },

    ...mapActions({
      isLikedByUser: "BOOK/getIsLikedBookByUser",
    }),
    getIsLikedByUser() {
      let param = {
        idUser: localStorage.getItem("userId"),
        bookId: this.id,
      };
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
    getAllComment(e) {
      let params = {
        bookId: this.id,
        pageNumber: e,
      };
      this.comments(params);
    },
    ...mapActions({
      create: "COMMENT/createComment",
    }),
    handleLike() {
      let token = localStorage.getItem("token");
      if (token != null) {
        if (this.isLiked) {
          this.deleteAddLiked1();
          this.decreaseLike(this.id);
         
          this.$router.go(0);
        } else {
          this.isLiked = !this.isLiked;
          this.getAddLiked();
          this.increaseLike(this.id);
          this.$router.go(0);
        }
      } else {
        this.$router.push({ path: "/login" });
      }
    },
    handleRead() {
      let token = localStorage.getItem("token");
      if (token == null) {
        this.$router.push({ path: "/login" });
      }else {
        this.increaseView(this.id);
        this.getAddViewed();
      }
    },
    handleComment() {
      let token = localStorage.getItem("token");
      if (token != null) {
        let param = {
          userId: localStorage.getItem("userId"),
          bookId: this.id,
          content: this.comment,
        };
        this.create(param);
        this.comment = "";
        this.getAllComment();
        this.$router.go(0);
      } else {
        this.$router.push({ path: "/login" });
      }
    },
  },
  mounted() {
    this.getIsLikedByUser();
    this.getBookById();
    this.getAllComment(1);
    this.link="/bookdetail/"+this.id;
    console.log(this.commentArray);
  },
    created() {
    this.token = localStorage.getItem("token");
  },
};
</script>

<style lang="scss" scoped>
.contain {
  .wrapper {
    .direction {
     width: 1200px;
     margin: 0 auto;
     text-align: left;
     padding-left: 115px;
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
     .seperate{
       margin:0 5px;
     }
  }
    .containerdetail {
      width: 1000px !important;
      margin: 0 auto;
      .title {
        .marginBottom {
          padding-top: 30px;
        }
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
            .authorName {
              color: rgb(41, 130, 172);
              font-weight: 700;
            }
            .cateName {
              font-weight: 700;
            }
          }
          .mg {
            margin: 40px 0 0 0px;
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
              margin-left: 30px;
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
              margin-left: 30px;
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
                  color: blue;
                }
              }
            }
          }
        }
      }
      .icondes {
        text-align: left !important;
        color: rgb(52, 40, 161);
        font-size: 35px;
        font-weight: 700;
      }
      .des {
        margin-top: 100px;
        .description {
          text-align: left;
          font-size: 16px;
          line-height: 1.8;
        }
        h2 {
          font-size: 35px;
          font-weight: 500;
        }
      }
      .com {
        margin-top: 100px;
        padding-bottom: 100px;
        .paging {
          margin-top: 50px;
        }
        h2 {
          font-size: 35px;
          font-weight: 500;
        }
        .group {
          display: flex;
          .textarea {
            width: 94%;
          }
          .button {
            width: 60px;
          }
        }
      }
    }
  }
}
</style>