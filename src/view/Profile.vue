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
            <img :src=account.img_avt width="200px" height="200px" />
            <div class="position_cam" v-on:click="handleClickInputFile">
              <i class="fa fa-camera"></i>
            </div>
          </div>

          <input
            type="file"
            @change="onFileChange"
            ref="fileInputImg"
            style="display: none"
          />
          <div class="name">
            <p class="title">Tên người dùng</p>
            <p>{{account.fullName}}</p>
            <div class="updateInfo">
               <model-update-user-profile  />
            </div>
           
          </div>
          <div class="email">
            <p class="title">Email</p>
            <p>{{account.email}}</p>
          </div>
          <div class="dateofbirth">
            <p class="title">Địa chỉ</p>
            <p>{{account.address}}</p>
          </div>
        </div>
      </div>

      <div class="container_book">
        <h2>Sách đã đọc</h2>
        <hr>
        <div class="containerbook">
          <div v-for="book in bookArray.books" :key="book.id">
             <router-link
                    :to="{ name: 'bookdetail', params: { id: book.bookId } }"
                    ><item1 v-bind:bookItem="book" /></router-link>
          </div>
        </div>
      </div>

      <b-pagination
        size="md"
        @change="getAllBookViewed($event)"
        v-model="currentPageV"
        :total-rows="totalV"
        :per-page="perPageV"
        align="center"
      ></b-pagination>

     
      <div class="container_book">
        <h2>Sách đã thích</h2>
         <hr>
        <div class="containerbook">
          <div v-for="book in bookArraysLike.books" :key="book.bookId">
             <router-link
                    :to="{ name: 'bookdetail', params: { id: book.bookId } }"
                    ><item1 v-bind:bookItem="book" /></router-link>
            <div class="style"></div>
          </div>
        </div>
      </div>

       <b-pagination
        size="md"
        @change="getAllBookLiked($event)"
        v-model="currentPageL"
        :total-rows="totalL"
        :per-page="perPageL"
        align="center"
      ></b-pagination>
    </div>
    <Footer />
  </div>
</template>

<script>
import navbar from "../component/navbar.vue";
import item1 from "../component/item1.vue";
import { mapGetters, mapActions } from "vuex";
import Footer from "../component/footer.vue";
import ModelUpdateUserProfile from "../component/ModelUpdateUserProfile.vue";
import axios from "axios";

export default {
  name: "profile",
  data() {
    return {
      address: "",
      createdAt: "",
      dateOfBirth: "",
      email: "",
      fullName: "",
      gender: "",
      img_avt: "",
      img_face: "",
      isDelete: "",
      password: "",
      userId: "",
    };
  },
  components: {
    item1,
    navbar,
    Footer,
    ModelUpdateUserProfile
  },
 
  methods: {
  ...mapActions({
      infoUser: "AUTH/getInforUserById",
    }),
  
  
    
    ...mapActions({
      books: "BOOK/getAllBookViewed",
    }),
    getAllBookViewed(e) {
      let params = {
        userId: localStorage.getItem("userId"),
        pageNumber: e,
      };
      this.books(params);
   

    },
     ...mapActions({
      updateAvatar: "AUTH/updateAvt",
    }),
    ...mapActions({
      bookliked: "BOOK/getAllBookLiked",
    }),
    getAllBookLiked(e) {
      let params = {
        userId: localStorage.getItem("userId"),
        pageNumber: e,
      };
      this.bookliked(params);
    },
    handleClickInputFile() {
      this.$refs.fileInputImg.click();
    },
    onFileChange(e) {
      let form = new FormData();
      form.append("file", e.target.files[0]);
      form.append("upload_preset", "qjxf98ek");
      axios.post("https://api.Cloudinary.com/v1_1/dja5fb2gg/image/upload", form)
        .then((res) => {
          this.account.img_avt = res.data.url;
          console.log("avtbe",this.account.img_avt);
          let param = {
          avt: this.account.img_avt
        }
        this.updateAvatar(param);
        });
     
      

    },
  },
  computed: {
    
     ...mapGetters({
      account: "AUTH/getUserInfor",
    }),
    ...mapGetters({
      bookArray: "BOOK/getAllBookViewed",
    }),
    ...mapGetters({
      bookArraysLike: "BOOK/getAllBookLiked",
    }),
 
      ...mapGetters({
      currentPageV: "BOOK/getCurrentPageV",
      totalV: "BOOK/getTotalV",
      perPageV: "BOOK/getPerPageV",

    }),
       ...mapGetters({
      currentPageL: "BOOK/getCurrentPageL",
      totalL: "BOOK/getTotalL",
      perPageL: "BOOK/getPerPageL",

    }),
  },
  mounted() {
    this.getAllBookViewed(1);
    this.getAllBookLiked(1);
    this.infoUser(JSON.parse(localStorage.getItem("userId")))


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
        .position_cam {
          width: 50px;
          position: absolute;
          top: 165px;
          left: 168px;
          height: 50px;
          background: gray;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
        }
      }
      .title {
        color: gray;
      }
      .updateInfo{
        margin-top:50px;
      }
      .name {
        width: 230px;
        height: 100%;
        border-right: 0.1px solid lightgray;
        padding-top: 50px;
      }
      .email {
        width: 285px;
        height: 100%;
        padding-top: 50px;
      }
      .dateofbirth {
        width: 285px;
        height: 100%;
        border-left: 0.1px solid lightgray;
        padding-top: 50px;
      }
    }
  }
  .container_book {
    padding-top: 150px;
    width: 1000px;
    margin: 0 auto;
    h2{
      text-align: left;
      margin-left: 15px;
    }
    .containerbook {
      display: flex;
      flex-wrap: wrap;
      // justify-content: space-between;
      .style {
        margin-left: 20px;
      }
    }
  }
}
</style>
