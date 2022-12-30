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
                <!-- <a class="navbar-brand" href="shoppingCart.html">
                    <i class="fa fa-heart text-info" aria-hidden="true"></i>
                    六角血拼賣賣
                </a> -->

                <!-- Search bar -->
                <form class="form-inline my-3 my-lg-0 ml-auto">
                    <div class="input-group">
                        <input class="form-control" type="text" placeholder="Search" aria-label="Search">
                        <div class="input-group-btn">
                            <button class="btn btn-outline-warning" type="submit">
                                <i class="fa fa-search" aria-hidden="true"></i> Search</button>
                        </div>
                    </div>
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
                        <router-link to="/customer_infor" @submit.prevent="createOrder">
                            <a href="shoppingCart-checkout.html" class="btn btn-primary btn-block">
                                <i class="fa fa-cart-plus" aria-hidden="true"></i> 結帳去</a>
                        </router-link>
                        
                    </div>
                </div>


            </nav>
            <!-- <div class="jumbotron jumbotron-fluid jumbotron-bg d-flex align-items-end">
                <div class="container">
                    <div class="p-3 bg-lighter">
                        <h1 class="display-3 font-weight-bold">最後出清!!!</h1>
                        <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its
                            parent.</p>
                    </div>
                </div>
            </div> -->
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
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                        <div class="carousel-item bg-cover" data-interval="10000">
                            <img src="https://images.unsplash.com/photo-1612198791461-e26e3b5dcb86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGNha2V8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                                class="d-block w-100" alt="...">
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                        </div>
                        <div class="carousel-item bg-cover" data-interval="10000">
                            <img src="https://images.unsplash.com/photo-1568827999250-3f6afff96e66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
                                class="d-block w-100" alt="...">
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
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
                                href="#list-gold">
                                <i class="fa fa-suitcase" aria-hidden="true"></i> 所有商品</a>
                            <a v-for="item in category" class="list-group-item list-group-item-action btn-warning" data-toggle="list"
                                href="#list-gift">
                                <i class="fa fa-gift" aria-hidden="true"></i> {{ item }}</a>
                            <!-- <a href="#" class="list-group-item list-group-item-action disabled ">
                                <i class="fa fa-film" aria-hidden="true"></i> 塔類</a>
                            <a href="#" class="list-group-item list-group-item-action disabled ">
                                <i class="fa fa-paw" aria-hidden="true"></i> 餅乾類</a> -->

                        </div>
                    </div>
                    <div class="col-md-9">
                        <!-- <div class="d-flex mb-4">
                            Search bar
                            <form class="form-inline my-3 my-lg-0">
                                <div class="input-group">
                                    <input class="form-control" type="text" placeholder="Search" aria-label="Search">
                                    <div class="input-group-btn">
                                        <button class="btn btn-outline-warning" type="submit">
                                            <i class="fa fa-search" aria-hidden="true"></i> Search</button>
                                    </div>
                                </div>
                            </form>
                        </div> -->
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
                                                <router-link :to="{ name: 'ProductDetail', params: { id: item.id } }">
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

                            <div class="tab-pane" id="list-gift">
                                <div class="row align-items-stretch">
                                    <!-- 禮品 -->
                                    <!-- <div class="col-md-4 mb-4">
                                        <div class="card border-0 box-shadow text-center h-100">
                                            <img class="card-img-top"
                                                src="https://images.unsplash.com/photo-1482173074468-5b323335debe?w=1350"
                                                alt="Card image cap">
                                            <div class="card-body">
                                                <h4 class="card-title">超精緻禮物</h4>
                                                <p class="card-text">This is a longer card with supporting text below as
                                                    a natural lead-in to additional content. This content
                                                    is a little bit longer.</p>
                                            </div>
                                            <div class="card-footer border-top-0 bg-white">
                                                <a href="#" class="btn btn-outline-secondary btn-block btn-sm">
                                                    <i class="fa fa-cart-plus" aria-hidden="true"></i> 搶購去
                                                </a>
                                            </div>
                                        </div>
                                    </div> -->
                                </div>
                            </div>
                        </div>
                        <!-- tab-content end -->

                    </div>

                </div>
            </div>
           


            <footer class="bg-light text-muted py-5">
                <div class="container">
                    <ul class="list-inline text-center">
                        <li class="list-inline-item">© Copright 2017 六角血拼賣賣</li>
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

        </body>
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
                    email: '',
                    tel: '',
                    address: '',
                },
                message: '',
            },
            cart: {
                carts:[]
            },
            isLoading: false,
            coupon_code: '',
            pagination: {},
            category: []
        };
    },
    computed: {
        cartNum(){
            return this.cart.carts.length
        }
    },
    created() {
        this.getProducts();
        this.getCart();
    },
    methods: {
        getProducts() {
            const vm = this;
            const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products`;
            vm.isLoading = true;
            this.$http.get(url).then((response) => {

                vm.products = response.data.products;
                console.log(response.data.products);
                vm.isLoading = false;
            });
        },
        // getProduct(id) {
        //     const vm = this;
        //     const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/product/${id}`;
        //     vm.status.loadingItem = id;
        //     this.$router.push(`/product/${id}`);
        //     // this.$http.get(url).then((response) => {
        //     //     vm.product = response.data.product;
        //     //     // 將資料讀取進來
        //     //     $('#productModal').modal('show');
        //     //     // 再將modal打開
        //     //     console.log(response.data.product);
        //     //     vm.status.loadingItem = '';
        //     // });
        // },
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
        getProducts(page = 1) {
            const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/products?page=${page}`;// 'https://vue-course-api.hexschool.io/api/chenn10814/products';
            const vm = this;
            console.log(process.env.APIPATH);
            console.log(process.env.CUSTOMPATH);
            vm.isLoading = true;
            this.$http.get(api).then((rs) => {
                console.log(rs.data);
                vm.isLoading = false;
                vm.products = rs.data.products;
                vm.pagination = rs.data.pagination;
                vm.category = vm.products.map(m => m.category).filter((e,i,arr) => arr.indexOf(e) === i)
                console.log(vm.category)
            }) 
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


/* .list-group a {
    color: goldenrod;
} */
</style>

<style lang="scss">
@import url("@fortawesome/fontawesome-free/css/all.css");
</style>
