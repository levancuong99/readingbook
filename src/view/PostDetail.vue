<template>
  <div class="contain">
    <div class="wrapper">
      <navbar />
      <div class="containerdetail">
        <div class="content"></div>
        <div class="title">
          <h2>Title {{post.title}}</h2>
        </div>
      
       
      </div>
      <Footer />
    </div>
    
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import navbar from "../component/navbar.vue";
import Footer from "../component/footer.vue";
export default {
  name: "bookdetail",
  data() {
    return {
    title:"",
    content:"",
    contentDetail:"",
    imgPost:"",
    createdAt:""
    };
  },
  components: {
    navbar,
    Footer
  },

  computed: {
    ...mapGetters({
      post: "POST/getPost",
    }),
  
  },
  props: ["id"],
  methods: {

     ...mapActions({
      getPost: "POST/getPost",
    }),
    },
    
    
  mounted() {
    this.getPost(this.id);
  },
};
</script>

<style lang="scss" scoped>
.contain {
  .wrapper {
    .containerdetail {
      width: 1000px !important;
      margin: 0 auto;
      .title {
        margin: 30px 0 30px 0;
        h2 {
          text-align: left;
        }
      }
      .center_book {
        display: flex;
        .image {
          display: flex;
          justify-content: center;
          width: 500px;
        }
        .centerright {
          width: 500px;
          text-align: left;
          margin-left: 30px;
          .title_book {
            font-size: 30px;
            font-weight: 700;
            margin: 10px 10px 10px 0;
          }
          .title_other {
            font-size: 20px;
            font-weight: 500;
            margin: 10px 10px 10px 0;
          }
          .mg {
            margin: 20px 0 0 0px;
          }
          .authorProfile {
            width: 95%;
            height: 100px;
            overflow: auto;
            border: 0.1px solid gray;
            text-align: left;
            font-size: 14px;
          }
          .examine {
            display: flex;
            .active {
              background: red;
              i {
                color: #fff !important;
              }
            }
            .like {
              width: 150px;
              height: 50px;
              border: 1px solid lightgray;
              border-radius: 10px;
              p {
                line-height: 50px;
                text-align: center;
                font-size: 16px;
                font-weight: 500;
                i {
                  margin: 0 5px;
                  color: red;
                }
              }
            }
            .comment1 {

              margin-left: 50px;
              width: 150px;
              height: 50px ;
              border: 1px solid lightgray;
              border-radius: 10px;
              p {
                line-height: 50px;
                text-align: center;
                font-size: 16px;
                font-weight: 500;
                i {
                  margin: 0 5px;
                  color: blue;
                }
              }
            }
          }
        }
      }
      .des{
          margin-top:100px;
          h2{
              font-size: 35px;
              font-weight: 500;
          }
      }
      .com{
          
          margin-top:100px;
         padding-bottom: 100px;

          h2{
              font-size: 35px;
              font-weight: 500;
          }
          .group {
            display: flex;
             .textarea{
            width: 94%;
          }
          .button{
            width:60px;
          }
          }
         
      }
    }
  }
}
</style>