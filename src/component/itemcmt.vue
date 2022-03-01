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
     <span class="name">{{commentItem.fullName}}</span><span class="date">{{(commentItem.createdAt).substring(0,10)+" "+(commentItem.createdAt).substring(11,19)}}</span>
     <span v-if="commentItem.userId==this.userId">
       <span v-if="isShow" v-on:click="handleUpdate" class="update">Sửa</span> <span v-if="isShow" >| </span>  <span  v-if="isShow" v-on:click="handleDelete" class="delete">Xóa</span>
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
      isShow:true,
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


    methods: {
        ...mapActions({
      updateComment: "COMMENT/updateComment",
    }),
     ...mapActions({
      delete: "COMMENT/deleteCommentById",
    }),
    handleDelete() {
      this.delete(this.commentItem.commentId);
          this.$router.go(0);
    },
    handleUpdate() {
       this.isDisable=false;
       this.isShow=false;
       this.temp=this.commentItem.content;
    },
    handleCancel() {
       this.commentItem.content=this.temp;
       this.isDisable=true;
       this.isShow=true;
    },
      handleSave() {
       let params= {
         id:this.commentItem.commentId,
         obj: {
           userId:this.commentItem.userId,
           bookId:this.commentItem.bookId,
           content:this.commentItem.content
         }
       }
       this.updateComment(params);
        this.isDisable=true;
        this.isShow=true;
         this.$router.go(0);
    },
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
    .name{
      font-weight: 700;
      font-size: 16px;
    }
    .date {
        margin-left:5px;
      font-weight: 600;
    }
    .update{
      margin-left:15px;
    }
    .update:hover{
      font-size: 18px;
      font-weight: 700;
      color:rgb(47, 0, 255);
    }
    .delete{
      margin-left:5px;
    }
    .delete:hover{
       font-size: 18px;
      font-weight: 700;
      color:rgb(255, 0, 0);
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