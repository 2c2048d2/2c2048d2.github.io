<script>
import menuBox from './MenuBox.vue';
export default {
  data() {
    return {
      menuBoxClass:'menuBox',
      blurMaskClass:'hide',
      searchBoxClasses: 'searchBoxBase',
      searchInputClasses: 'searchInputBase',
    }
  },
  methods: {
    openSearchBoxHandleEvent(){
      this.searchBoxClasses+=' searchBoxOpened';
      this.searchInputClasses+=' searchInputOpened';
      this.$refs.searchInput.focus();
    },
    offSearchBoxHandleEvent(){
      this.searchBoxClasses= 'searchBoxBase';
      this.searchInputClasses='searchInputBase';
    },
    openMenuBoxHandleEvent(){
      this.menuBoxClass+=' open';
      this.blurMaskClass='display'
    },
    offMenuBoxHandleEvent(){
      this.menuBoxClass='menuBox';
      this.blurMaskClass='hide'
    },
    getCustomerInfo() {
    }
  },
  components:{
  menuBox
}
};

</script>

<template>
  <header>
    <nav class="navbar">
      <div class="menu" @click="openMenuBoxHandleEvent">
        <span>menu</span>
      </div>
      <div class="headLogo">
        <RouterLink to="/">
          <img src="/head.png" alt="头像">
          <span>2c2048d2 | Blog</span>
        </RouterLink>
      </div>
      <div id="NavigationStation">
        <ul id="NavigationTrains">
          <li><!--主页-->
            <RouterLink to="/">
              <span>🏠   首页</span>
            </RouterLink>
          </li>
          <li><!--关于-->
            <RouterLink to="about">
              <span>🌈   关于</span>
            </RouterLink>
          </li>
        </ul>
        <div id="searchBox" @click="openSearchBoxHandleEvent" @blur="offSearchBoxHandleEvent" :class="searchBoxClasses">
          <svg xmlns="http://www.w3.org/2000/svg" class="searchIcon" viewBox="0 0 512 512">
            <path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none"
              stroke="currentColor" stroke-miterlimit="10" stroke-width="50" />
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="50"
              d="M338.29 338.29L448 448" />
          </svg>
            <input type="text" placeholder="    搜点什么？" :class="searchInputClasses" @blur="offSearchBoxHandleEvent"
              @keypress="getCustomerInfo" ref="searchInput">
        </div>
      </div>
    </nav>
  </header>
  <menuBox :menuBoxClass="menuBoxClass"/>
  <div id='blurMask' :class="blurMaskClass" @click="offMenuBoxHandleEvent"/>
</template>

<style scoped>
@keyframes blurMaskAnimation {
  0% { backdrop-filter: blur(0px)}
  10% { backdrop-filter: blur(1px)}
  20% { backdrop-filter: blur(2px)}
  30% { backdrop-filter: blur(3px)}
  40% { backdrop-filter: blur(4px)}
  50% { backdrop-filter: blur(5px)}
  60% { backdrop-filter: blur(6px)}
  70% { backdrop-filter: blur(7px)}
  80% { backdrop-filter: blur(8px)}
  90% { backdrop-filter: blur(9px)}
  100% { backdrop-filter: blur(10px)}
}
#blurMask{
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 100;
  backdrop-filter: blur(10px);
  transition: ease 10s;
}
#blurMask.display{
  display: block;
}
#blurMask.hide{
  display: none;
}

.searchBoxOpened {
  cursor: pointer;
  background: rgba(255, 255, 255,0.6);
  border-radius: 20px;
  justify-content: center;
  transition: ease-in-out .5s;
  border-radius: 16px;  
  margin-right: 16px;
  height: 48px;
  margin-top: 8px;
}

.searchBoxBase:not(.searchBoxOpened) {
  background: rgba(255, 255, 255, 0);
  height: 64px;
  cursor: pointer;
  justify-content: center;
  transition: ease-in-out .5s;
  border-radius: 0px;  
}

#searchBox:not(.searchBoxOpened) svg{
  height: 24px;
  margin-top: 18px;
  padding-right: 16px;
  padding-left: 16px;
  transition: ease-in-out .5s;
}

.searchBoxOpened svg {
  color: black;
  height: 28px;
  margin-top: 10px;
  padding-right: 16px;
  padding-left: 16px;
  transition: ease-in-out .5s;
}

#searchBox:not(.searchBoxOpened):hover{
  transition: none;
  background: rgba(255, 255, 255, 0.2);
}

#searchBox:not(.searchBoxOpened):hover svg{
  color: rgb(44, 44, 44);
  height: 28px;
  margin-top: 18px;
  padding-right: 16px;
  padding-left: 16px;
}

#searchBox input{
  font-size: 16px;
  height: 32px;
  background: rgb(0,0,0,0);
  outline:medium;
  margin-left: 8px;
  transform: translate(0,-8px);
}

.searchInputOpened {
  background: none;
  width: 150px;
  transition: ease-in-out .5s;
  border: none;
  padding-right: 16px;
}

.searchInputBase:not(.searchInputOpened) {
  width: 0;
  transition: ease-in-out .5s;
  background: none;
  border: none;
}



#NavigationTrains {
  display: flex;
  flex-direction: row;
  list-style: none;
  padding-inline-start: 40px;
}

#NavigationTrains li {
  display: list-item;
  text-align: -webkit-match-parent;
  display: flex;
}

.headLogo span{
  color: #fff;
  
}

.headLogo a{
  text-decoration: none;
}

.headLogo a:hover,
#NavigationTrains a:hover {
  background: rgba(255, 255, 255, 0.3);
}

#NavigationTrains span {
  color: rgba(255, 255, 255, 0.95);
}

li {
  -webkit-text-size-adjust: 100%;
  color: #fff;
  line-height: 64px;
  transition: background-color .3s;
  float: left;
  list-style-type: none;
}

.headLogo {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  height: 64px;
  color: #fff;
  display: inline-flex;
  left: 50%;
  margin-left: -110px;
  position: fixed;
}

#NavigationTrains img {
  height: 28px;
}

.headLogo img {
  -webkit-text-size-adjust: 100%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-weight: normal;
  line-height: 64px;
  font-size: 2.1rem;
  color: #fff;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  box-sizing: inherit;
  border-style: none;
  position: relative;
  z-index: -1;
  height: 45px;
  vertical-align: middle;
  padding-bottom: 6px;
  padding-left: 10px;
}

.headLogo span {
  line-height: 64px;
  font-size: 18px;
  font-weight: 600;
  padding-left: 16px;
  padding-right: 16px;
  transform: translate(0,-4px);
}

#NavigationStation {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 15px;
  color: #fff;
  box-sizing: inherit;
  float: right;
  padding-right: 16px;
  list-style-type: none;
  display: flex;
}

#NavigationTrains li {
  height: 100%;
  display: flex;
}

#NavigationTrains span{
  padding-left: 8px;
  margin-right: 8px;
}

#NavigationTrains a{
text-decoration: none;
}
.navbar {
  width: 88%;
  height: 64px;
  position: fixed;
  backdrop-filter: blur(10px);
  margin-top: 16px;
  margin-left: 6%;
  z-index: 100;
  transition: background ease-in-out 0.3s;
  border-radius: 15px;  
}

.navbar:hover{
  transition: background ease-in-out 0.3s;
  background: rgba(255, 255, 255, 0.2);
}

.menu{
  display: inline-flex;
  height: 64px;
  width: 64px;
  background: none;
  vertical-align: middle;  
  text-align: center; 
  border-radius: 15px;  

}

.menu span{
  width: 64px;
  vertical-align: middle;
  line-height: 64px;
  color: white;
}

.menu:hover{
  background: rgba(255, 255, 255, 0.4);
}

@media screen and (max-width: 1033px) {
  #NavigationStation{
    display: none;
  }

  .menu{
    display: inline-flex;
  }

}
</style>