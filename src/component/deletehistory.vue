<template>
    <div class="containerss">
        
    <b-dropdown text="Xóa lịch sử">
              <b-dropdown-item v-on:click="handleDeleteBookAlready">Xóa sách đã đọc
                      <b-modal
                        ref="editDelete"
                        title="Xác nhận xóa"
                        hide-header-close
                        cancel-variant="light"
                        ok-title="Delete"
                        ok-variant="danger"
                        @ok.prevent="submitEditPlace"
                      >
                        <p>Bạn có muốn xóa mọi thứ ?</p>
                      </b-modal>    
              </b-dropdown-item>
               <b-dropdown-item v-on:click="handleDeleteBookLiked">Xóa sách đã thích
                      <b-modal
                        ref="editDeleteLiked"
                        title="Xác nhận xóa"
                        hide-header-close
                        cancel-variant="light"
                        ok-title="Delete"
                        ok-variant="danger"
                        @ok.prevent="submitEditPlaceLiked"
                      >
                        <p>Bạn có muốn xóa mọi thứ ?</p>
                      </b-modal>    
              </b-dropdown-item>
 
              <b-dropdown-item v-on:click="handleDeleteBookProp">Xóa sách đã đề xuất
                      <b-modal
                        ref="editDeleteProp"
                        title="Xác nhận xóa"
                        hide-header-close
                        cancel-variant="light"
                        ok-title="Delete"
                        ok-variant="danger"
                        @ok.prevent="submitEditPlaceProp"
                      >
                        <p>Bạn có muốn xóa mọi thứ ?</p>
                      </b-modal>    
              </b-dropdown-item>
  </b-dropdown>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name:"footers",
    data(){
       return {
           a:1
       }  
    },
     methods:{
      ...mapActions({
      deleteBookAlreadyRead: "BOOK/deleteAllBookViewed",
      deleteBookAlreadyLike: "BOOK/deleteAllBookLiked",
      deleteBookAlreadyProp:"PROP/deleteAllProp"
    }),
      handleDeleteBookAlready() {
           this.$refs.editDelete.show();
      },
      submitEditPlace() {
      this.deleteBookAlreadyRead();
      this.$router.go(0);
      this.$nextTick(() => {
        this.$refs.editDelete.hide();
      });
    },

    handleDeleteBookLiked() {
        this.$refs.editDeleteLiked.show();
    },
     submitEditPlaceLiked() {
      this.deleteBookAlreadyLike();
      this.$router.go(0);
      this.$nextTick(() => {
        this.$refs.editDeleteLiked.hide();
      });
    },

     handleDeleteBookProp() {
        this.$refs.editDeleteProp.show();
    },
     submitEditPlaceProp() {
      this.deleteBookAlreadyProp();
      this.$router.go(0);
      this.$nextTick(() => {
        this.$refs.editDeleteProp.hide();
      });
    },
  }

}
</script>
<style lang="scss" scoped>
.containerss {
    width: 100%;
   ::v-deep .btn,.dropdown-toggle ,.btn-secondary {
        background: #f8f9fa !important;
        border: 1px solid #f8f9fa !important ;
        color: #000 !important;
    }
   
}
</style>