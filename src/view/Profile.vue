<template>
  <div class="containers">
    <div class="wrapper">
      <navbar />
      <div class="imgTop">
       <img src="../assets/newimg2.jpg" width="100%" height="250px"/>
      </div>
      <div class="content">
        <div class="leftContent">
          <div class="avt">
            <img src="../assets/avt1.jpg" width="200px" height="200px">
            <p>Lê Văn Cường</p>
            <hr>
            <ul>
               <router-link tag="li" to="/alreadyread">  Sách đã đọc </router-link >
               <router-link  tag="li" to="/mybook"> Sách của bạn</router-link>
               <router-link tag="li" to="/personalinformation">  Thông tin cá nhân </router-link >
            </ul>
          </div>
        </div>
        <div class="mainContent">
           <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "../component/navbar.vue";
export default {
  components: { navbar },
  name: "homeuser",
  data() {
    return {
    
    };
  },
  component: {
    navbar,
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.containers {
  .content {
    display: flex;
   
    .leftContent {
       width: 30%!important;
       background: rgb(160, 229, 241);
       min-height: 100vh;
      img {
          margin-top: -100px;
          border-radius:50% ;
      }
      hr {
        margin:0;
        padding:0;
      }
      p {
        margin-top:20px;
        font-size: 18px;
        font-weight: 700;
      } 
      ul {
                  .router-link-exact-active {
                  background-color: #6db1ce;
      }
        li {
          height: 50px;
          line-height: 50px;
          border-bottom: 1px solid gray;
        }
      }
    }
    .mainContent {
    margin-left: 80px;
    width: 100%;
  }
  }
  
}
</style>
