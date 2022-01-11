<template>
<div class="content">
  <div class="wrapper" @click="goToHome()" >
  <div class="image">
      <img :src=bookItem.imgBook width="240px" height="260px"/>
  </div>
  <div class="title">
      <p>{{bookItem.bookName}}</p>
  </div>
  <div class="author">
    <p>{{bookItem.authorName}}</p>
  </div>

  <div class="icon">
    <i  class="fas fa-eye icon1">{{bookItem.numberView}}</i>
    <i  class="fas fa-heart icon2">20</i>
  </div>

   </div>
</div>
</template>
<script>
export default {
    name:"item1",
     data() {
    return {
      // bookItem: {
      // bookId:"",
      // bookName:"",
      // description:"",
      // imgBook:"",
      // linkBook:"",
      // numberView:0,
      // authorName:"",
      // authorProfile:"",
      // cateName:""
      // }
    
    };
  },
   props: {
    bookItem: {
      type:  Object,
      require: true,
      default: () => {},
    },
   },
    methods:{
   goToHome(){
     let temp=this.bookItem.bookId;
     console.log(temp);
   this.$router.push( {name: 'bookdetail', params: { id: temp}}); 
      }
  }
}
</script>
<style lang="scss" scoped>
.content{
  width: 260px;
  height: 400px;
  border: 1px solid lightgray;
  .wrapper {
    padding:10px ;
    .image{
      img {
        border-radius:10px ;
      }
    }
    .title{
      padding:5px 0;
      font-size: 16px;
      font-weight: 700;
    }
    .author {
      padding:5px 0;
      font-size: 14px;
      font-weight: 600;
      color: gray;
    }
    .icon {
        .icon1 {
          padding:5px;
          color: green;
        }
        .icon2 {
          padding: 5px;
          color: red;
        }
    }
  }
}
</style>