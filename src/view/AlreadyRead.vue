<template>
    <div class="contain">
        <div class="alreadybook">
          <div class="container">
            <!-- <h2>{{this.bookArrays}}</h2> -->
            <div class="row">
              <div class="col-sm-3" v-for="book in bookArrays.books" :key="book.id">
                <item1 v-bind:bookItem="book" />
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import item1 from "../component/item1.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "alreadybook",
  data() {
    return {
      text: "",
    };
  },
  components: {
    item1,
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
  },
  computed: {
    ...mapGetters({
      bookArrays: "BOOK/getAllBookViewed",
    }),
  },
  mounted() {
    this.getAllBookViewed();
  },

}
</script>
<style lang="scss" scoped>
.contain {

}
</style>