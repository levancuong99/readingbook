<template>
<div class="content">
  <div class="wrapper">
     <hr>
      <p><strong>Tên sách: </strong>{{itemProp.bookNameProp}}</p>
      <p><strong>Tác giả:</strong> {{itemProp.authorName}}</p>
      <p><strong>Nhận xét:</strong>{{itemProp.remark}}</p>
      <p><strong>Thời gian tạo:</strong>{{itemProp.createdAt.substring(0,10) +" " +itemProp.createdAt.substring(11,19)}}</p>
     
  </div>
</div>
</template>
<script>
export default {
    name:"itemprop",
     data() {
    return {
    
    };
  },

   props: {
    itemProp: {
      type:  Object,
      require: true,
      default: () => {},
    },
   },
    methods:{
  }
}
</script>
<style lang="scss" scoped>
.content{
  width: 1200px !important;
  .wrapper {
    text-align: left;
  }
}
</style>