<template>
    <div>
        <loading :active.sync="isLoading"></loading>
        <!-- 載入讀取效果 -->

        <!-- <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
            <title>六角血拼賣賣</title>-->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
        <!-- Bootstrap CSS -->
        <!-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
                integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB"
                crossorigin="anonymous">
            <link rel="stylesheet" href="custom.css">
        </head> -->

        <body>
            <!-- headers -->
            <nav class="navbar navbar-light bg-light">
                <router-link to="/home"> <a href="#">
                        <span> P â t i s s e r i e</span></a></router-link>


                <!-- Search bar -->

                <form class="form-inline my-3 my-lg-0 ml-auto">
                    <input type="text" name="" id="" placeholder="搜尋" v-model="search" />
                    <router-link to="/to_customersearch">
                        <button @click="btn">搜尋</button>
                    </router-link>


                </form>

                <!-- 購物車內的數量 (Button 內包含 icon, 數量 badge) -->
                <div class="dropdown ">
                    <button class="btn btn-sm btn-cart" data-toggle="dropdown" data-flip="false">
                        <i class="fa fa-shopping-cart text-dark fa-2x" aria-hidden="true"></i>
                        <span class="badge badge-pill badge-danger">{{ cartNum }}</span>
                        <span class="sr-only">unread messages</span>
                    </button>
                    <div class="dropdown-menu dropdown-menu-right p-3" style="min-width: 300px" data-offset="400">
                        <h6>已選擇商品</h6>
                        <table class="table table-sm">
                            <thead>
                                <th></th>
                                <th>品名</th>
                                <th>數量</th>
                                <th>單價</th>
                            </thead>
                            <tbody>
                                <tr v-for="item in cart.carts" :key="item.id" v-if="cart.carts">
                                    <td class="align-middle">
                                        <button type="button" class="btn btn-outline-danger btn-sm"
                                            @click="removeCartItem(item.id)">
                                            <i class="far-fa-trash-alt"></i>
                                        </button>
                                    </td>
                                    <td class="align-middle">
                                        {{ item.product.title }}
                                    </td>
                                    <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
                                    <td class="align-middle text-right">{{ item.final_total }}</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <td colspan="3" class="text-right">總計</td>
                                <td class="text-right">{{ cart.total }}</td>
                            </tfoot>
                        </table>


                    </div>
                </div>


            </nav>

            <div class="mb-4">
                <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active bg-cover" data-interval="10000">
                            <img src="https://images.unsplash.com/photo-1559329373-78f77851b979?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGNha2V8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                                class="d-block w-100" alt="...">
                            <div class="carousel-caption d-none d-md-block">
                                <h5>P â t i s s e r i e</h5>
                                <p>P â t i s s e r i ，來自法文甜點店的意思，就是如此簡單直白。</p>
                            </div>
                        </div>
                        <div class="carousel-item bg-cover" data-interval="10000">
                            <img src="https://images.unsplash.com/photo-1612198791461-e26e3b5dcb86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGNha2V8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                                class="d-block w-100" alt="...">
                            <div class="carousel-caption d-none d-md-block">
                                <h5>P â t i s s e r i e</h5>
                                <p>P â t i s s e r i ，來自法文甜點店的意思，就是如此簡單直白。</p>
                            </div>
                        </div>
                        <div class="carousel-item bg-cover" data-interval="10000">
                            <img src="https://images.unsplash.com/photo-1568827999250-3f6afff96e66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
                                class="d-block w-100" alt="...">
                            <div class="carousel-caption d-none d-md-block">
                                <h5>P â t i s s e r i e</h5>
                                <p>P â t i s s e r i ，來自法文甜點店的意思，就是如此簡單直白。</p>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-target="#carouselExampleCaptions"
                        data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-target="#carouselExampleCaptions"
                        data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </button>
                </div>
            </div>

            <!-- 列表頁 -->
            <div class="container main-contant mb-1">
                <div class="row">
                    <div class="col-md-3" id="list-group">
                        <!-- 左側選單 (List group) -->
                        <div class="list-group sticky-top">

                            <a class="list-group-item list-group-item-action active btn-warning" data-toggle="list"
                                href="#list-gift" @click.prevent="getProducts">
                                <i class="fa fa-suitcase" aria-hidden="true"></i>所有商品</a>

                            <a v-for="item in category" class="list-group-item list-group-item-action btn-warning"
                                data-toggle="list" href="#list-gift" @click.prevent="changeCategory(item)">
                                <i class="fa fa-gift" aria-hidden="true"></i> {{ item }}</a>
                        </div>
                    </div>
                    <div class="col-md-9">

                        <!-- 主要商品列表 (Card) -->
                        <div class="tab-content">
                            <div class="tab-pane active" id="list-gold">
                                <div class="row">

                                    <div class="col-md-4 mb-4" v-for="item in products" :key="item.id">
                                        <div class="card border-0 box-shadow text-center h-100">
                                            <div style="height: 150px; background-size: cover; background-position: center"
                                                :style="{ backgroundImage: `url(${item.imageUrl})` }">
                                            </div>
                                            <div class="card-body">
                                                <h4 class="card-title">{{ item.title }}</h4>
                                                <p class="card-text">{{ item.content }}</p>
                                            </div>
                                            <div class="card-footer d-flex">
                                                <router-link :to="{ name: 'ToProductDetail', params: { id: item.id } }">
                                                    <button type="button" class="btn btn-outline-secondary btn-sm">
                                                        <i class="fas fa-spinner fa-spin"
                                                            v-if="status.loadingItem === item.id"></i>
                                                        查看更多
                                                    </button>
                                                </router-link>
                                                <button type="button" class="btn btn-outline-danger btn-sm ml-auto"
                                                    @click="addtoCart(item.id)">
                                                    <i class="fas fa-spinner fa-spin"
                                                        v-if="status.loadingItem === item.id"></i>
                                                    加到購物車
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- pagination -->
                                <nav aria-label="Page navigation example">
                                    <ul class="pagination">
                                        <li class="page-item" :class="{ 'disable': !pagination.has_pre }">
                                            <a class="page-link" href="#" aria-label="Previous"
                                                @click.prevent="getProducts(pagination.current_page - 1)">
                                                <span aria-hidden="true">&laquo;</span>
                                            </a>
                                        </li>
                                        <li class="page-item" v-for="page in pagination.total_pages" :key="page"
                                            :class="{ 'active': pagination.current_page === page }">
                                            <a class="page-link" href="#" @click.prevent="getProducts(page)">{{ page
                                            }}</a>
                                        </li>
                                        <li class="page-item" :class="{ 'disable': !pagination.has_next }">
                                            <a class="page-link" href="#" aria-label="Next"
                                                @click.prevent="getProducts(pagination.current_page + 1)">
                                                <span aria-hidden="true">&raquo;</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <!-- tab-content end -->

                    </div>

                </div>
            </div>


            <div class="modal fade" id="removeModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header bg-danger text-white">
                            <h5 class="modal-title">刪除商品</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p>是否確認刪除商品</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">否</button>
                            <button type="button" class="btn btn-outline-danger px-5">是</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="my-5 row justify-content-center">
                <div class="my-5 row justify-content-center">
                    <table class="table">
                        <thead>
                            <th></th>
                            <!-- <th>刪除</th> -->
                            <th>品名</th>
                            <th>數量</th>
                            <th>單價</th>
                        </thead>
                        <tbody>
                            <tr v-for="item in cart.carts" :key="item.id" v-if="cart.carts">
                                <td class="align-middle">
                                    <button type="button" class="btn btn-outline-danger btn-sm"
                                        @click="removeCartItem(item.id)">
                                        <i class="fa fa-trash"></i>
                                    </button>
                                </td>
                                <td class="align-middle">
                                    {{ item.product.title }}
                                </td>
                                <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
                                <td class="align-middle text-right">{{ item.final_total }}</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colspan="3" class="text-right">總計</td>
                                <td class="text-right">{{ cart.total }}</td>
                            </tr>
                            <tr v-if="cart.final_total !== cart.total">
                                <td colspan="3" class="text-right text-success">折扣價</td>
                                <td class="text-right text-success">{{ cart.final_total }}</td>
                            </tr>
                        </tfoot>
                    </table>
                    <div class="input-group mb-3 input-group-sm">
                        <input type="text" class="form-control" v-model="coupon_code" placeholder="請輸入優惠碼">
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="button" @click="addCouponCode">
                                套用優惠碼
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="my-5 row justify-content-center">
                <validation-observer v-slot="{ invalid }" class="col-md-6">
                    <form @submit.prevent="createOrder">
                        <validation-provider rules="required|email" v-slot="{ errors, classes }">
                            <div class="form-group">
                                <!-- 輸入框 -->
                                <label for="email">Email</label>
                                <input id="email" type="email" name="email" class="form-control"
                                    v-model="form.user.email">
                                <!-- 錯誤訊息 -->
                                <span class="invalid-feedback"> {{ errors[0] }}</span>
                            </div>
                        </validation-provider>


                        <div class="form-group">
                            <!-- 輸入框 -->
                            <label for="username">收件人姓名</label>
                            <input id="username" type="text" name="name" class="form-control"
                                v-model="form.user.username">
                        </div>


                        <div class="form-group">
                            <!-- 輸入框 -->
                            <label for="usertel">收件人電話</label>
                            <input id="usertel" type="tel" name="usertel" class="form-control"
                                v-model="form.user.usertel">
                        </div>

                        <div class="form-group">
                            <!-- 輸入框 -->
                            <label for="useraddress">收件人地址</label>
                            <input id="useraddress" type="text" name="address" class="form-control"
                                v-model="form.user.address">
                        </div>
                        <div class="text-right">
                            <button class="btn btn-danger" :disabled="invalid">送出訂單</button>
                        </div>
                    </form>
                </validation-observer>
            </div>
        </body>

        <footer class="bg-light text-muted py-5">
            <div class="container">
                <ul class="list-inline text-center">
                    <li class="list-inline-item">© P â t i s s e r i e</li>
                    <li class="list-inline-item">
                        <a class="text-info" href="#">
                            <i class="fa fa-instagram" aria-hidden="true"></i> Instagrame</a>
                    </li>
                    <li class="list-inline-item">
                        <a class="text-info" href="#">
                            <i class="fa fa-facebook-square" aria-hidden="true"></i> Facebook</a>
                    </li>
                    <li class="list-inline-item">
                        <a class="text-info" href="#">About</a>
                    </li>
                </ul>
                <p class="text-center">Made with Bootstrap4</p>
            </div>
        </footer>
    </div>
</template>


<script>
import $ from 'jquery';

export default {
    data() {
        return {
            products: [],
            product: {},
            // 存放modo的資料
            status: {
                loadingItem: '',
                // 判斷要讀取的產品，存入產品id
            },
            form: {
                user: {
                    name: '',
                    email: '',
                    tel: '',
                    address: '',
                },
                message: '',
            },
            cart: {
                carts: []
            },
            isLoading: false,
            coupon_code: '',
            pagination: {},
            category: [],
            search: '',
            searchData: '',
            filter: {
                list: [],
                str: '',
            },
        };

    },
    created() {
        this.getProducts();
        this.getCart();

        this.orderId = this.$route.params.orderId;
        this.getOrder();
        console.log(this.orderId);
    },
    computed: {
        cartNum() {
            return this.cart.carts.length || 0
            // 沒有給預設值
        },
        searchData: function () {
            var search = this.search;
            if (search) {
                return this.products.filter(function (product) {
                    return Object.keys(product).some(function (key) {
                        return String(product[key]).toLowerCase().indexOf(search) > -1
                    })
                })
            }
            return this.products;
        },

    },

    methods: {
        changeCategory(str) {
            const vm = this;
            vm.filter.str = str;
            vm.getProductsfilt();  //getProductsfilt 是取得商品的方法
            vm.isLoading = false;
            this.$http.get(api).then((rs) => {
                console.log(rs.data);
                vm.isLoading = false;
                vm.products = rs.data.products;
                vm.pagination = rs.data.pagination;
                vm.category = vm.products.map(m => m.category).filter((e, i, arr) => arr.indexOf(e) === i)
                console.log(vm.category)
            })
        },
        btn: function () {

            var search = this.search;
            if (search) {
                this.searchData = this.products.filter(function (product) {
                    console.log(product)
                    return Object.keys(product).some(function (key) {
                        console.log(key)
                        return String(product[key]).toLowerCase().indexOf(search) > -1
                    })
                })
            }

        },
        getProductsfilt() {
            const vm = this;
            const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products`;
            vm.isLoading = false;
            this.$http.get(url).then((response) => {
                if (vm.filter.str !== '全部商品') {
                    let filterPro = response.data.products.filter(function (item) {
                        return item.category == vm.filter.str;
                    });
                    vm.products = filterPro;
                } else {
                    vm.products = response.data.products;
                }
            });
        },
        getProducts() {
            const vm = this;
            const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products`;
            vm.isLoading = true;
            this.$http.get(url).then((response) => {

                vm.products = response.data.products;
                vm.category = vm.products.map(m => m.category).filter((e, i, arr) => arr.indexOf(e) === i)
                console.log(vm.category);
                console.log(response.data.products);
                vm.isLoading = false;
            });
        },
        getOrder() {
            const vm = this;
            const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/order/${vm.orderId}`;
            vm.isLoading = true;
            this.$http.get(url).then((response) => {
                vm.order = response.data.order;
                console.log(response);
                vm.isLoading = false;
            });
        },
        payOrder() {
            const vm = this;
            const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/pay/${vm.orderId}`;
            vm.isLoading = true;
            this.$http.post(url).then((response) => {
                console.log(response);
                if (response.data.success) {
                    vm.getOrder();
                }
                vm.isLoading = false;
            });
        },
        searchProducts() {
            this.products = this.filterProducts

        },

        addtoCart(id, qty = 1) {
            const vm = this;
            const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
            vm.status.lodingItem = id;
            const cart = {
                product_id: id,
                qty,
            }
            this.$http.post(url, { data: cart }).then((response) => {
                console.log(response);
                vm.status.lodingItem = '';
                vm.getCart();
                $('#productModal').modal('hide');
            });
        },
        getCart() {
            const vm = this;
            const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
            vm.isLoading = true;
            this.$http.get(url).then((response) => {
                vm.cart = response.data.data;
                console.log(response);
                vm.isLoading = false;
            });
        },
        removeCartItem(id) {
            const vm = this;
            const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart/${id}`;
            vm.isLoading = true;
            this.$http.delete(url).then(() => {
                vm.getCart();
                vm.isLoading = false;
            });
        },
        addCouponCode() {
            const vm = this;
            const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/coupon`;
            const coupon = {
                code: vm.coupon_code
            }
            vm.isLoading = true;
            this.$http.post(url, { data: coupon }).then(() => {
                vm.getCart();
                vm.isLoading = false;
            });
        },
        createOrder() {
            const vm = this;
            const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/order`;
            const order = vm.form;
            vm.isLoading = true;
            this.$http.post(url, { data: order }).then((rs) => {
                console.log('訂單已建立', rs);
                if (rs.data.success) {
                    vm.$router.push(`/customer_checkout/${rs.data.orderId}`)
                    // 用router來轉換頁面
                }
                vm.isLoading = false;
            });
        },

        openModal(isNew, item) {
            if (isNew) {
                this.tempProduct = {};
                this.isNew = true;
            } else {
                this.tempProduct = Object.assign({}, item);
                this.isNew = false;
            }
            $('#productModal').modal('show');

        },
        updateProduct() {
            let api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/product`;// 'https://vue-course-api.hexschool.io/api/chenn10814/products';
            let httpMethod = 'post';
            const vm = this;
            if (!vm.isNew) {
                api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/product/${vm.tempProduct.id}`;
                httpMethod = 'put';
            }
            console.log(process.env.APIPATH);
            console.log(process.env.CUSTOMPATH);
            this.$http[httpMethod](api, { data: vm.tempProduct }).then((rs) => {
                console.log(rs.data);
                if (rs.data.success) {
                    $('#productModal').modal('hide');
                    vm.getProducts();
                } else {
                    $('#productModal').modal('hide');
                    vm.getProducts();
                    console.log('新增失敗');
                }
                // vm.products = rs.data.products;
            })
        },
        openDelProductModal(item) {
            const vm = this;
            $('#delProductModal').modal('show');
            vm.tempProduct = Object.assign({}, item);
        },
        delProduct() {
            const vm = this;
            const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/product/${vm.tempProduct.id}`;
            this.$http.delete(url).then((response) => {
                console.log(response, vm.tempProduct);
                $('#delProductModal').modal('hide');
                vm.isLoading = false;
                this.getProducts();
            });
        },
        uploadFile() {
            console.log(this);
            console.log(this.$refs.files.files[0])
            const uploadedFile = this.$refs.files.files[0];
            // 將檔案取出
            const vm = this;
            const formData = new FormData();
            // 用formdata模擬傳統表單送出的形式，建立一個formdata的物件
            formData.append('file-to-upload', uploadedFile);
            const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/upload`;
            vm.status.fileUploading = true;
            this.$http.post(url, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
                .then((rs) => {
                    console.log(rs.data);
                    // vm.status.fileUploading = false;
                    if (rs.data.success) {
                        // vm.tempProduct.imageUrl = rs.data.imageUrl;
                        // console.log(vm.tempProduct);
                        vm.$set(vm.tempProduct, 'imageUrl', rs.data.imageUrl);
                        // 原本沒有存到這個資料
                        vm.$set(vm.tempProduct, 'image', rs.data.imageUrl);
                        // this.tempProduct.imageUrl = rs.data.imageUrl
                    } else {
                        this.$bus.$emit('message:push', rs.data.message, 'danger');
                    }
                    // 雙向綁定
                })
                .catch(err => {
                    console.log(err)
                    this.$bus.$emit('message:push', '上傳圖片格式錯誤', 'danger');
                })
                .finally(() => {
                    vm.status.fileUploading = false;
                })
            // then成功會走到這裡 catch有錯會走到這裡 finally最後一定會走到這裡
        },
    }
};
</script>


<style>
.bg-cover {
    background-size: cover;
    background-position: center center;
    height: 500px;
}

.pagination ul {
    color: cornsilk;
}

.page-item {
    color: gold;
}
</style>

<style lang="scss">
@import url("@fortawesome/fontawesome-free/css/all.css");
</style>
