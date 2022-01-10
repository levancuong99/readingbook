<template>
     <div class="content">
        <div class="container">
        
           <div class="block">
             <div class="row">
               <div class="col-sm-4">
                 <img :src=postItem.imgPost width="200px" height="200px"/>
               </div>
                  <div class="col-sm-8">
                    <p class="title">{{postItem.title}}</p>
                    <p class="content_noti">{{postItem.content}}</p>
               </div>
             </div>
           </div>
        </div>
      </div>
</template>

<script>
export default {
    name:"itemnotification",
    data() {
    return {
      postId:"",
      title:"",
      content:"",
      imgPost:"",
    };
  },
     props: {
    postItem: {
      type: Array,
      require: true,
      default: () => [],
    },
  },
}
</script>
<style lang="scss" scoped>
.content {
    .container{
        .block{
              background: rgb(244, 244, 247);
              border: 1px solid gray;
              border-radius: 10px;
              padding:10px;
              .col-sm-8{
                 overflow-y: auto;
                 overflow-x: hidden;
                  height: 200px;
                  .title{
                    background: rgb(233, 233, 240);
                    font-size: 16px;
                    font-weight: 700;
                    position: sticky;
                    top: 0;
                  }
                  .content_noti{
                      padding-top: 20px;
                  }
              }
        }
    }
  }
</style>