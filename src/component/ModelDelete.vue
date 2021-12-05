<template>
  <div class="wrapper">
    <b-icon
      icon="trash"
      aria-hidden="true"
      variant="danger"
      @click="showDeletePlaceModel(data.index, data.item)"
    ></b-icon>
    <b-modal
      ref="editDelete"
      title="Confirmation"
      hide-header-close
      cancel-variant="light"
      ok-title="Delete"
      ok-variant="danger"
      @ok.prevent="submitEditPlace"
    >
      <p>Please confirm that you want to delete everything.</p>
    </b-modal>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "ModelDelete",
  data() {
    return {
      dataRow: {},
    };
  },
  props: {
    data: {
      type: Object,
      require: true,
    },
    flag:{
      type:String,
    }
  },
  methods: {
    ...mapActions({
      deleteBook: "BOOK/deleteBookById",
      deleteUser: "AUTH/deleteUserById",
    }),
    showDeletePlaceModel(index, data) {
      this.dataRow = JSON.parse(JSON.stringify(data));
      this.$refs.editDelete.show();
    },
    submitEditPlace() {
      if(this.flag=="deleteUser") {
          this.deleteUser(this.dataRow.userId);
      }else {
          this.deleteBook(this.dataRow.bookId);
      }
      this.$nextTick(() => {
        this.$refs.editDelete.hide();
      });
    },
  },
};
</script>
<style lang="scss" scoped></style>
