<script>
export default{
    props:{
        menuBoxClass:String
    }
}
</script>
<template>
    <div class="menuBox" :class="menuBoxClass">
        <div class="logo">
            <p> logo </p>            
        </div>
        <div class="searchBox">
            searchBox
        </div>
        <ul class="Trains">
            导航项目
        </ul>
    </div>
</template>

<style scoped>
.menuBox{
    line-height: 1.5;
    background-color: rgba(255,255,255,90%);
    width: 250px;
    height: 100%;
    z-index: 9999;
    transition: background,transform .5s;
    transform: translate(-250px,0);
    position: fixed;
}
.menuBox.open{
    transform: translate(0,0) !important;
}
.searchBox{

}

</style>