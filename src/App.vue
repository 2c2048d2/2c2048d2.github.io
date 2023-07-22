<script>
import {startSakura} from "@/js/Sakura"
export default{
    mounted(){
        startSakura()
    }
}
</script>
<template>
    <RouterView/>
</template>
<style>
* {
    margin: 0;
    padding: 0;
}


body {
    overflow-y: scroll;
    background-repeat: no-repeat;
    background-attachment: fixed;
    width:100%;
    height: 100%;
	background-position: center center;
	background-size: cover;
	background-color: #464646;
}


#mask{
    position: absolute;
    background-color: rgba(0,0,0, 0.6);
    height:100%;
    width: 100%;
    backdrop-filter: blur(4px);
}

</style>