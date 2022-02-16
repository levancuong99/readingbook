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
                        <li v-if= "!token"><router-link to = "/">Trang chủ </router-link></li>
                        <li v-else><router-link to = "/homeuser">Trang chủ </router-link></li>
                        <li><router-link to = "/book">Kho sách</router-link></li>
                        <li><router-link to = "/post">Blog </router-link></li>
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

                <div class="btn" v-else>
                      <div class="avt">
                    <img :src="account.img_avt" alt="" />
                    <b-dropdown left>
                        <b-dropdown-item>
                        <router-link to="/profile" class="text">Trang cá nhân</router-link>
                        </b-dropdown-item>
                         <b-dropdown-item>
                        <router-link to="/profile" class="text">Đề xuất sách</router-link>
                        </b-dropdown-item>
                        <b-dropdown-item v-on:click="handleLogout">Đăng xuất</b-dropdown-item>
                    </b-dropdown>
                    </div>
                    <p style="color:#fff">{{account.fullName}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions,mapGetters } from "vuex";
export default {
    name:"navbar",
    data(){
        return {
            token:'',
            avt:""
        }
    },
     computed: {
    ...mapGetters({
      account: "AUTH/getUserInfor",
    }),
  },
    created() {
    this.token = localStorage.getItem('token');
  },
    methods: {
    // getUser() {
    //   this.fullName = this.account.fullName;
    //   this.avt = this.account.img_avt;
    // },
    ...mapActions({
      logout: "AUTH/logout",
    }),
     ...mapActions({
      infoUser: "AUTH/getInforUserById",
    }),
    handleLogout() {
      this.logout();
    },
  },
    mounted() {
    this.infoUser(JSON.parse(localStorage.getItem("userId")))
    console.log(this.account);
  },
}
</script>
<style lang="scss" scoped>
.containers {
    position:sticky;
    top:0;
    z-index: 1000;
    .wrapper {
        width: 100%;
        height: 70px;
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
        .avt {
            padding-left: 100px;
    padding-right: 10px;
    width: auto;
    position: relative;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
    .dropdown {
      position: absolute;
      top: 0;
      right: 15px;
      transform: translate(-50%, 0%);
      .text {
        text-decoration: none;
        color: black;
      }
      ::v-deep button {
        background-color: white;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        opacity: 0;
      }
      ::v-deep ul {
        padding: 0;
        li {
          a:active {
            background-color: #468faf;
            p {
              margin: 0;
            }
          }
        }
      }
    }
  }
                
            }
        }
    }

}
</style>