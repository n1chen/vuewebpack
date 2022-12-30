<template>
    <div>
        <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
            <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">P â t i s s e r i e</a>
            <form class="form-inline my-2 my-lg-0" id="nav">
                <router-link to="/home">
                    <a class="nav-link" href="#">首頁</a>
                </router-link>
                <router-link to="/admin/customer_order">
                    <a class="nav-link" href="#">商品頁面</a>
                </router-link>
                <a class="nav-link" href="#" @click.prevent="signout">登出</a>

            </form>
        </nav>
    </div>
</template>


<style type="text/css">
#nav a {
    color: #fff;
}
</style>


<script>
export default {
    name: 'Navbar',
    methods: {
        signout() {
            const vm = this;
            const url = `${process.env.APIPATH}/logout`;
            // 登出的路徑
            this.$http.post(url).then((rs) => {
                console.log(rs.data.success);
                if (rs.data.success) {
                    vm.$router.push('/signin')
                }
            })
            // 登出後就會跳到登入的路徑
        }
    },
}
</script>