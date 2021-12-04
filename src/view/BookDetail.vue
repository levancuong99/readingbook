<template>
    <div class="contain">
        <div class="wrapper">
            <navbar/>
            <div class="container">
                <div class="title">
                    <h2>Thông tin sách</h2>
                </div>
                 <div class="row">
            <div class="col-sm-5"><img src="https://picsum.photos/600/300/?image=25" width="100%" height="500px"/></div>
            <div class="col-sm-7">Đắc nhân tâm</div>
          </div>
                
            </div>
        </div>
    </div>
</template>
<script>
import navbar from "../component/navbar.vue";
export default {
    name:"book detail",
    data() {
        return {

        }
    },
    components: {
        navbar
    },

}
</script>

<style lang="scss" scoped>
.contain {
    .wrapper {
        .container {
           .title {
               margin: 30px 0 30px 0;
               h2 {
                   color: red;
                   text-align: left;
               }
               .row {
                   height: 600px !important;
               }
           }
        }
    }
}
</style>