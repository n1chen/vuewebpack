<template>
    <div v-if="showBackstage">
        <loading :active.sync="isLoading"></loading>


        <nav class="col-md-2 d-none d-md-block bg-light sidebar">
            <div class="sidebar-sticky">
                <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                    <span>管理員</span>
                    <a class="d-flex align-items-center text-muted" href="#">
                        <span data-feather="plus-circle"></span>
                    </a>
                </h6>
                <ul class="nav flex-column mb-2">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/admin/products"><i class="fas fa-box-open"></i>產品列表
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/admin/orders" class="nav-link">
                            <i class="far fa-list-alt"></i> 訂單列表
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/admin/coupons" class="nav-link">
                            <i class="fas fa-ticket-alt"></i> 優惠券
                        </router-link>
                    </li>
                </ul>
                <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                    <span>模擬功能</span>
                    <a class="d-flex align-items-center text-muted" href="#">
                        <span data-feather="plus-circle"></span>
                    </a>
                </h6>
                <ul class="nav flex-column mb-2">
                    <li class="nav-item">
                        <router-link to="/admin/customer_order" class="nav-link">模擬訂單</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
import $ from 'jquery';

export default {
    data() {
        return {
            //showBackstage: false,
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
            cart: {},
            isLoading: false,
            coupon_code: '',
        };
    },
    computed:{      
        showBackstage(){
            return true
            //this.customer == 'taWJVQo3NcgDIlexhdMqkx9INVw1'
        },
        customer(){
            //taWJVQo3NcgDIlexhdMqkx9INVw1
            return uid
        }
    },
    created() {
        this.getProducts();
        this.getCart();
    },
    methods: {
        // changeBackstage(){
        //     if(apipath = 'nechen0814'){
        //         showBackstage = true;
        //     }
        // },
        getProducts() {
            const vm = this;
            const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products`;
            vm.isLoading = true;
            this.$http.get(url).then((response) => {

                vm.products = response.data.products;
                console.log(response.data.products);
                vm.isLoading = false;
            });
            vm.isLoading = false;
        },
        getProduct(id) {
            const vm = this;
            const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/product/${id}`;
            vm.status.loadingItem = id;
            this.$router.push(`/product/${id}`);
            // this.$http.get(url).then((response) => {
            //     vm.product = response.data.product;
            //     // 將資料讀取進來
            //     $('#productModal').modal('show');
            //     // 再將modal打開
            //     console.log(response.data.product);
            //     vm.status.loadingItem = '';
            // });
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
            vm.isLoading = false;
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
                }
                vm.isLoading = false;
            });
            vm.isLoading = false;

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
            })
            vm.isLoading = false
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