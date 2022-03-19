<template>
  <div class="containers">
    <div class="wrapper">
      <navbar />

        <div class="direction">
         <span v-if="!token"><router-link  to="/">Trang chủ </router-link><span class="seperate">></span><router-link  to="/post">Blog</router-link> </span> 
         <span v-else><router-link  to="/homeuser">Trang chủ </router-link><span class="seperate">></span><router-link  to="/post">Blog</router-link> </span> 
      </div>
      <div class="content">
        <div class="container">
          <div class="row">
            <div
              class="col-sm-4"
              v-for="post in postArray.posts"
              :key="post.postId"
            >
              <router-link
                    :to="{ name: 'postdetail', params: { id: post.postId } }"
                    > <item-notification v-bind:postItem="post" /> </router-link>
            </div>
            
          </div>
        </div>
        <div >
              <b-pagination
                size="md"
                @change="getAllPosts($event)"
                v-model="postArray.currentPage"
                :total-rows="postArray.allRow"
                :per-page="postArray.numberRowCurrentpage"
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
import ItemNotification from "../component/ItemNotification.vue";
import Footer from "../component/footer.vue";

import { mapGetters, mapActions } from "vuex";
export default {
  name: "post",
  data() {
    return {
      token:""
    };
  },
  components: { navbar, ItemNotification, Footer },

  methods: {
    ...mapActions({
      posts: "POST/getAllPostPaging",
    }),
    getAllPosts(e) {
      this.posts(e);
    },
  },
  computed: {
    ...mapGetters({
      postArray: "POST/getAllPost",
    }),
  },
  mounted() {
    this.getAllPosts(1);
  },
   created() {
    this.token = localStorage.getItem("token");
  },
};
</script>
<style lang="scss" scoped>
.containers {
   .direction {
     width: 1200px;
     margin: 0 auto;
     text-align: left;
     padding-left: 40px;
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
  .content {
    margin-top: 20px;
    a {
      text-decoration: none;
      color: #000;
    }
  }
}
</style>
