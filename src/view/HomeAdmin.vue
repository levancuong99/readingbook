<template>
    <div class="contain">
        <div class="wrapper">
            <div class="section">
                <div class="logo">
                    <img src="../assets/logo.png"  width="40px" height="40px"/>
                    <h2>My book</h2>
                </div>
                <hr>
                <ul>
                    <router-link tag="li" to="/manageaccount"><span> Quản lý tài khoản</span></router-link>
                    <router-link tag="li" to="/managerepobook"><span>Quản lý kho sách</span></router-link>
                     <router-link tag="li" to="/managepost"><span>Quản lý bài đăng</span> </router-link>
                    <router-link tag="li" to="/manageproposebook"><span>Xem đề xuất sách</span> </router-link>
                </ul>
            </div>
            <div class="main">
                <div class="nav">
                    <div class="info">
                     {{account.fullName}}
                    </div>
                    <p>|</p>
                    <div class="logout">
                         <a  v-on:click="handleLogout">Đăng xuất </a>
                    </div>
                </div>
                <div class="content">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions,mapGetters } from "vuex";
export default {

      data(){
        return {
            fullName:"",
            avt:""
        }
    },
     computed: {
    ...mapGetters({
      account: "AUTH/getUserInfor",
    }),
  },
      methods: {
      getUser() {
      this.fullName = this.account.fullName;
      this.avt = this.account.img_avt;
    },
    ...mapActions({
      logout: "AUTH/logout",
    }),
    handleLogout() {
      this.logout();
    },
  },
    mounted() {
    this.getUser();
  },
}
</script>
<style lang="scss" scoped>
.contain {
    .wrapper { 
        display: flex;
        .section {
            color: white;
            width: 20%;
            min-height: 100vh;
            background: #000;
            border-right: 1px solid #fff;
            .logo {
                padding:5px 0 5px 0;
                box-sizing: border-box;
                display: flex;
                align-items: center;
                justify-content: space-around;
            }
            hr {
                border: 0.1px solid #fff;
                padding:0 !important;
                margin:0 !important;
            }
            ul {
                 .router-link-exact-active {
                  background-color: rgb(139, 136, 136);
                  font-weight: 700;
                  color: #fff;
      }
                li {
                    height:56px;
                    line-height: 56px;
                    border-bottom: 1px solid #fff;
                }
            }
        }
        .main {
           width: 80%;
            .nav {
                height: 56px;
                background: #000;
                display: flex;
                padding-right: 100px;
                justify-content: flex-end;
                align-items: center;
                color: #fff;
                .info {
                    padding:5px;
                    box-sizing: border-box;
                    font-weight: 700;
                    font-size: 18px;
                }
                p{
                    font-size: 20px;
                    font-weight: 700;
                }
                a{
                    padding:5px;
                    box-sizing: border-box;
                    font-size: 18px;
               }
               a:hover{
                   color:lightskyblue;
               }
            }
        }
    }
}
</style>