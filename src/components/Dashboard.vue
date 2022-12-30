<template>
    <div>
        <Navbar />
        <Alert></Alert>
            <div class="container-fluid">
                <div class="row">
                    <Sidebar></Sidebar>
                    <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
                        <router-view></router-view>
                    </main>
                </div>
            </div>

    </div>
</template>

<script>
import Sidebar from './Sidebar.vue';
import Navbar from './Navbar.vue';
import Alert from './AlertMessage';
import Pagination from './Pagination.vue';


export default {
    components: {
        Sidebar,
        Navbar,
        Alert,
        Pagination,
    },
    created() {
        const myCookie = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
        this.$http.defaults.headers.common.Authorization = myCookie;
    // 然後要取得產品資料，在外層也就是 Dashaboard.vue 的 created 設定把 Cookie 取出也就是取出 token 並送到後端來驗證
    }
}
</script>