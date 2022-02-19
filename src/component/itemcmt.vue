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
          disabled
        ></b-form-textarea>


   </div>
</div>
</template>
<script>

export default {
    name:"itemcmt",
     data() {
    return {
      comment:"this is commentthis is comment"
    
    };
  },
   props: {
    commentItem: {
      type:  Object,
      require: true,
      default: () => {},
    },
   },
  
  
    mounted() {
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
}
</style>