<template>
  <div class="containers">
    <div class="wrapper">
      <navbar />
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
    return {};
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
};
</script>
<style lang="scss" scoped>
.containers {
  .content {
    margin-top: 50px;
    a {
      text-decoration: none;
      color: #000;
    }
  }
}
</style>
