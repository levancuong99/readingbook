<template>
    <div class="containerss">
        <div class="content">
            <p class="title">Thắc mắc liên hệ tại: mybook@gmail.com</p>
            <p class="text">My book - Mang đến nguồn kiến thức vô giá cho bạn!</p>
        </div>
    </div>
</template>

<script>
export default {
    name:"footer",
    data(){
       return {}  
    },
 
}
</script>
<style lang="scss" scoped>
.containerss {
    width: 100%;
    height: 150px;
   background-color: #000 !important;
   display: flex;
   justify-content: center;
   align-items: center;
   .content {
       .title {
           color: #fff;
           font-size: 16px;
           font-weight: 500;
       }
       .text{
           color: #fff;
           font-size: 17px;
           font-weight: 600;
       }
   }
}
</style>