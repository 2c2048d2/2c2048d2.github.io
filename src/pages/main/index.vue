<script>
import Nav from '../../subs/Nav.vue';
export default {
    data() {
        return {
            saying: 'default'
        }
    },
    components: {
        Nav
    },
    methods:{
        fetchSaying() {
        let saying_API = "https://v1.jinrishici.com/all";
        fetch(saying_API)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                else {
                    throw new Error('每日一言获取失败');
                }
            })
            .then(data => {
                this.saying = data;
            })
            .catch(error => {
                console.error('ERROR:',error);
            });
        
        },

        setSayingRight(){
            
        }
    },
    mounted() {
        this.fetchSaying();
    }
}
</script>

<template>
    <Nav/>
    <div id="main_introduce">
        <div class="title">
            <span>2c2048d2</span>
        </div>
        <div id="sayingGroup" class="saying">
            <div >
                <span id="saying_content_span">{{ saying.content }}</span>
            </div>
            <div>
                <span id="saying_author_span">——{{ saying.author }}</span>
            </div>
        </div>
    </div>
    <div>
        <p>233</p>
    </div>
</template>

<style scoped>
#main_introduce{
    color: #ff6767;
    box-sizing: inherit;
    text-align: center;
    overflow: hidden;
    position: relative;
    width: 100%;
    perspective: 500px;
    transform-style: preserve-3d;
    transform-origin: 0% 50%;
    height: 864px;
    background-image: url('https://img1.imgtp.com/2023/07/22/F9jVn3Qf.jpg');
}

.title{
    -webkit-text-size-adjust: 100%;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
    visibility: visible;
    color: #fff;
    box-sizing: inherit;
    text-align: center;
    font-weight: 700;
    font-size: 4rem;
    line-height: 1.85em;
    margin-bottom: -20px;
    position: relative;
    z-index: 2;
    top: 25%;
}

.saying{
    -webkit-text-size-adjust: 100%;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
    visibility: visible;
    color: #fff;
    box-sizing: inherit;
    text-align: center;
    font-weight: 200;
    font-size: 3rem;
    line-height: 1.55em;
    margin-top: 24px;
    position: absolute;
    z-index: 2;
    top: 35%;
    left:50%;
    transform:translate(-50%,0);
}

#saying_author_span{
    float: right;
}
</style>