<template>
<div class="content">
  <div class="wrapper">
      <p>Tên sách: {{itemProp.bookNameProp}}</p>
      <p>Tác giả: {{itemProp.authorName}}</p>
      <p>Nhận xét:{{itemProp.remark}}</p>
      <hr>
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
  width: 1000px !important;
  .wrapper {

  }
}
</style>