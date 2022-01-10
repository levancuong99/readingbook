<template>
      <div >
  <b-card
    :title= bookItem.bookName
    body-bg-variant="light"
    :img-src=bookItem.imgBook
    img-alt="Image"
    img-height="200px"
    tag="article"
    style="padding:5px ; "
    class="mb-2"
    body-text-variant="primary"
  >
    <b-card-text  style="white-space: nowrap; 
                  width: 300px; 
                  height:50px;
                  overflow: hidden;
                  text-overflow: ellipsis; "> 
                  {{bookItem.description}}
    
    </b-card-text>

    <router-link :to="{ name: 'bookdetail', params: { id: bookItem.bookId} }"> Xem chi tiết
    </router-link>
  </b-card>
</div>
</template>
<script>
export default {
    name:"item",
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
   }
}
</script>
<style lang="scss" scoped>

</style>