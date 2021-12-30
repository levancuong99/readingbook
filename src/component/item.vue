<template>
      <div >
  <b-card
    :title= bookItem.bookName
    body-bg-variant="light"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-height="200px"
    tag="article"
    style="padding:5px ; width:350px;height:400px; "
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

    <!-- <b-button href="/bookdetail" variant="info">Xem chi tiết</b-button> -->
    <router-link :to="{ name: 'bookdetail', params: { id: bookItem.bookId, bookItem1: bookItem} }"> Xem chi tiết
    </router-link>
  </b-card>
</div>
</template>
<script>
export default {
    name:"item",
     data() {
    return {
      bookId:"",
      bookName:"",
      description:"",
      imgBook:"",
      linkBook:"",
      numberView:0,
      authorName:"",
      authorProfile:"",
      cateName:""
    };
  },
   props: {
    bookItem: {
      type: Array,
      require: true,
      default: () => [],
    },
    
  },
}
</script>
<style lang="scss" scoped>

</style>