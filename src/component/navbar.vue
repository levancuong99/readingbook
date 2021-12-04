<template>
    <div class="containers">
        <div class="wrapper">
            <div class="logo">
                <img src="../assets/logo.png" width="20px" height="20px"/>
                <p>My book</p>
            </div>
            <div class="content">
                <nav class="menu">
                    <ul>
                        <li><router-link to = "/">Trang chủ </router-link></li>
                        <li><router-link to = "/book">Kho sách</router-link></li>
                        <li><router-link to = "/post">Bài đăng </router-link></li>
                    </ul>
                </nav>

                <div class="btn"  v-if= "!token" >
                    <div class="login">
                        <p><router-link to = "/login">Đăng nhập</router-link></p>
                    </div>
                    <p>|</p>
                    <div class="register">
                        <p><router-link to = "/register">Đăng ký</router-link></p>
                    </div>
                </div>

                <div class="btn" v-if= "token">
                     
                    <div class="login">
                     <span>Lê Văn Cường</span>
                    </div>
                    <p>|</p>
                    <div class="register">
                         <a v-on:click="handleLogout">Đăng xuất </a>
                    </div>
                
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    name:"navbar",
    created() {
    this.token = JSON.parse(localStorage.getItem("token"));
  },
    methods: {
    ...mapActions({
      logout: "AUTH/logout",
    }),
    handleLogout() {
      this.logout();
    },
  },
}
</script>
<style lang="scss" scoped>
.containers {
    position:sticky;
    top:0;
    z-index: 1;
    .wrapper {
        width: 100%;
        height: 50px;
        background:#000;
        display: flex;
        justify-content: space-around;
        align-items: center;
        color:#ffe;
        .logo {
            display: flex;
            align-items: center;
            p{
                margin:0 !important;
                padding:0 10px;
                line-height: 50px;
                color:greenyellow;
            }
        }
        .content {
            display: flex;
            align-items: center;
            justify-content: space-around;
           
            .menu {
                ul {
                    li{
                        float: left;
                        margin-left: 20px !important;
                        a {
                            color:#ffd;
                            text-decoration: none;
                            font-weight: 700;
                        }
                        a:hover {
                            color: #fff;
                        }
                    }

                }
            }
            .btn {
                display: flex;
                justify-content: space-around;
                align-items: center;
                a {
                    color:lightskyblue;
                } 
                .login {
                  span{
                      color:#fff;
                      font-size: 16px;
                      font-weight: 700;
                  }

                }

                p { 
                    padding:5px;
                    color: #fff;
                    font-weight: 700;
                }
                .register {
                   
                }
                
            }
        }
    }

}
</style>