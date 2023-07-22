<script>
export default{
  data(){
    return{
      codeData : "def test()\n   print('hello world')"
    }
  }
}
</script>
<template>
  <h2>blog</h2>
  <highlightjs :code="codeData"></highlightjs>
</template>