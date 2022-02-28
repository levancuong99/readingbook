<template>
<div class="content">
  <div class="wrapper">
  <div class="image">
      <img :src=commentItem.imgAvt width="60px" height="60px"/>
  </div>
     <b-form-textarea
          class="textarea"
          v-model="commentItem.content"
          rows="2"
          :placeholder=commentItem.content
          max-rows="2"
          :disabled=isDisable
        ></b-form-textarea>

   </div>
   <div class="bottom">
     <span class="name">{{commentItem.fullName}}</span>-<span class="date">{{(commentItem.createdAt).substring(0,10)+" "+(commentItem.createdAt).substring(11,19)}}</span>-
     <span v-if="commentItem.userId==this.userId">
       <span v-on:click="handleUpdate" class="update">Sửa</span> |  <span v-on:click="handleDelete" class="delete"><a>Xóa</a></span>
     </span>
     <div class="gr_btn" v-if="!this.isDisable">
      <b-button class="btn-cancel" variant="light" v-on:click="handleCancel">Hủy</b-button>
     <b-button class="btn-save" variant="primary" v-on:click="handleSave">Lưu</b-button>
     </div>
     
   </div>
</div>
</template>
<script>
import { mapActions } from "vuex";
export default {
    name:"itemcmt",
     data() {
    return {
      comment:"this is commentthis is comment",
      userId:"",
      isDisable:true,
      temp:""
  
    
    };
  },
   props: {
    commentItem: {
      type:  Object,
      require: true,
      default: () => {},
    },
   },
  //  deleteCommentById
  //    computed: {
  //   ...mapGetters({
  //     account: "AUTH/getUserInfor",
  //   }),
  // },

    methods: {
     ...mapActions({
      delete: "COMMENT/deleteCommentById",
    }),
    handleDelete() {
      this.delete(this.commentItem.commentId);
          this.$router.go(0);
    },
    handleUpdate() {
       this.isDisable=false;
       this.temp=this.commentItem.content;
       
    },
    handleCancel() {
       this.isDisable=true;
       this.commentItem.content=this.temp;
    }
  },

  
  
    mounted() {
      
  },
     created() {
    this.userId = localStorage.getItem('userId');
  },


}
</script>
<style lang="scss" scoped>
.content{
  width: 1000px !important;
  margin-top:10px;
  .wrapper {
    display: flex;
    justify-content: space-between;
    .image{
      img {
        border-radius:10px ;
      }
    }
    .textarea{
      width: 93%;
    }
  }
  .bottom{
    margin-left: 70px;
    height: 40px;
    background: rgb(250, 250, 250);
    text-align: left;
    .name,.date,
    .update{
      margin-left:5px;
    }
    .delete{
      margin-left:5px;
      a {
        text-decoration: none;
      }
      a :hover{
        color: red;
      }
    }
    .gr_btn{
      float: right;   
      .btn-cancel {
       background: lightgrey;
      }   
    }
  
  }
}
</style>