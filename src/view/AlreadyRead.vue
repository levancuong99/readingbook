<template>
    <div class="contain">
        <div class="alreadybook">
          <div class="container">
            <!-- <h2>{{this.bookArrays}}</h2> -->
            <div class="row">
              <div class="col-sm-4" v-for="book in bookArrays.books" :key="book.id">
                <item v-bind:bookItem="book" />
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import item from "../component/item.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "alreadybook",
  data() {
    return {
      text: "",
    };
  },
  components: {
    item,
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
    console.log(params);
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