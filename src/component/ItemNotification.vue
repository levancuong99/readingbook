<template>
  <div class="content">
      <div class="block">
        
          <div class="card">
            <b-card
              :title="postItem.title"
              :img-src="postItem.imgPost"
              img-alt="Image"
              img-top
              img-height="200px"
              tag="article"
            >
            <b-card-text class="createat">
                {{postItem.createdAt.substring(0,10)}}
              </b-card-text>
              <b-card-text class="textcontent">
                {{postItem.content}}
              </b-card-text>

            </b-card>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "itemnotification",
  data() {
    return {
      postId: "",
      title: "",
      content: "",
      imgPost: "",
    };
  },
  props: {
    postItem: {
      type: Array,
      require: true,
      default: () => [],
    },
  },
};
</script>
<style lang="scss" scoped>
.content {
  padding-bottom:50px !important ;
  .block {
    .card {
      border: none;
      .card-body {
        padding-left: 0 !important;
        padding-right: 0 !important;
      }
      .card-title {
          text-align: left;
          font-size: 20px;
          font-weight: 700;
      }
      .createat{
        text-align: left;
        font-size: 15px;
        font-weight: 550;
        font-style: italic;
      }
      .textcontent {
        margin-top: 10px;
        text-align: left;
        font-size: 16px;
      }
    }
  }
 
}
</style>
