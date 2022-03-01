<template>
  <div class="contain">
    <div class="wrapper">
      <navbar />
       <div class="direction">
         <span v-if="!token"><router-link  to="/">Trang chủ </router-link><span class="seperate">></span><router-link  to="/post">Blog</router-link><span class="seperate">></span><router-link  :to="link">Chi tiết Blog</router-link> </span> 
         <span v-else><router-link  to="/homeuser">Trang chủ </router-link><span class="seperate">></span><router-link  to="/post">Blog</router-link>  <span class="seperate">></span><router-link  :to="link">Chi tiết Blog</router-link></span> 
      </div>
      <div class="container">
        <div class="row">
           <img
        :src=post.imgPost
        alt="no no"
        width="100%"
        height="600"
      />
        </div>

        <div class="row title"> 
          <p>{{post.title}}</p>
        </div>

         <div class="row date"> 
          <p>Đăng bởi admin: Ngày đăng {{ (post.createdAt).substring(0,10)}}</p>
        </div>
       

        <div class="row contentdetail"> 
          <p>{{post.content}}</p>
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
    imgPost:"",
    createdAt:"",
    token:"",
    link:""
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

       created() {
    this.token = localStorage.getItem("token");
  },
    
    
  mounted() {
    this.link="/postdetail/"+this.id;
    this.getPost(this.id);
    // this.createdAt=(this.post.createdAt).substr(0,10) +" " +(this.post.createdAt).substr(11,19);
  },
};
</script>

<style lang="scss" scoped>
.contain {
  .direction {
     width: 1200px;
     margin: 0 auto;
     text-align: left;
     padding-left: 15px;
     margin-top: 50px;
     a{
       font-size: 18px;
       font-weight: 600;
       text-decoration: none;
       color: #000 !important;
     }
     a:hover {
       color: rgb(33, 45, 214) !important;
     }
     .seperate{
       margin:0 5px;
     }
  }
  .wrapper {
    .container {
      margin-top:100px;
      .title{
        margin-top:50px;
        font-size: 35px;
        font-weight: 700;

      }
      .date{
        margin-top:20px;
        font-size: 18px !important;
        font-weight: 500;
        font-style: italic;
      }
      .contentdetail{
        margin-top:50px;
        text-align: left;
        margin-bottom: 100px;
      }
    }
  }  
}
</style>