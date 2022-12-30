<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  created() {
    const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products`;
      // api伺服器的路徑，所申請的api PATH，
      console.log(process.env.APIPATH, process.env.CUSTOMPATH);
      this.$http.get(api).then((rs) => {
        console.log(rs.data)
      })
  }
  // created取得遠端資料
};
</script>

<style lang="scss">
@import "./assets/all.scss";
</style>
