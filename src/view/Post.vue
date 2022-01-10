<template>
  <div class="containers">
    <div class="wrapper">
      <navbar />
      <div class="content">
        <h2>Thông báo</h2>
        <div v-for="post in postArray" :key="post.id">
          <item-notification v-bind:postItem="post" />
          <div class="mg"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "../component/navbar.vue";
import ItemNotification from "../component/ItemNotification.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "post",
  data() {
    return {};
  },
  components: { navbar, ItemNotification },

  methods: {
    ...mapActions({
      posts: "POST/getAllPost",
    }),
    getAllPosts() {
      this.posts();
    },
  },
  computed: {
    ...mapGetters({
      postArray: "POST/getAllPost",
    }),
  },
  mounted() {
    this.getAllPosts();
  },
};
</script>
<style lang="scss" scoped>
.containers {
  h2 {
    padding: 20px 0 20px 0;
  }
  .mg{
    margin-top:20px;
  }
}
</style>
