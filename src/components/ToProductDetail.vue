<template>
  <div>
    <loading :active.sync="isLoading"></loading>


    <body>
      <!-- headers -->
      <nav class="navbar navbar-light bg-light">
        <!-- <a class="navbar-brand" href="shoppingCart.html">
          <i class="fa fa-heart text-info" aria-hidden="true"></i>
          六角血拼賣賣
        </a> -->
        <!-- 購物車內的數量 (Button 內包含 icon, 數量 badge) -->
        <div class="dropdown ml-auto">
          <button class="btn btn-sm btn-cart" data-toggle="dropdown" data-flip="false">
            <i class="fa fa-shopping-cart text-dark fa-2x" aria-hidden="true"></i>
            <span class="badge badge-pill badge-danger">{{ cartNum }}</span>
            <span class="sr-only">unread messages</span>
          </button>
          <div class="dropdown-menu dropdown-menu-right p-3" style="min-width: 300px" data-offset="400">
            <h6>已選擇商品</h6>
            <table class="table table-sm">
              <tbody>
                <tr v-for="item in cart.carts" :key="item.id" v-if="cart.carts">
                  <td class="align-middle">
                    <button type="button" class="btn btn-outline-danger btn-sm" @click="removeCartItem(item.id)">
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
            </table>
            <router-link to="/customer_infor">
              <a href="shoppingCart-checkout.html" class="btn btn-primary btn-block">
                <i class="fa fa-cart-plus" aria-hidden="true"></i> 結帳去</a>
            </router-link>

          </div>
        </div>
      </nav>
      <div class="container main-contant mb-1">
        <nav aria-label="breadcrumb" role="navigation">
          <ol class="breadcrumb bg-transparent pl-0">
            <li class="breadcrumb-item">
              <router-link to="/to_customer"><a href="#">首頁</a>
              </router-link>

            </li>
            <li class="breadcrumb-item">
              <a href="#">{{ product.category }}</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">{{ product.title }}</li>
          </ol>
        </nav>
        <div class="row">
          <div class="col-md-4 mb-5">
            <div class="sticky-top" style="top: 10px;">
              <h1 class="h2">
                {{ product.title }}
                <span class="badge badge-secondary float-right ml-2">{{ product.category }}</span>
              </h1>
              <div class="d-flex my-3 align-items-end justify-content-end">
                <del class="text-muted" v-if="product.price">原價 {{ product.origin_price }} 元</del>
                <!-- <del class="h6" v-if="product.price">原價 {{ product.origin_price }} 元</del> -->
                <div class="h3 mb-0 ml-auto text-danger">
                  <small>網路價 NT$</small>
                  <strong>{{ product.price }}</strong>
                </div>
              </div>

              <div class="input-group mt-3">
                <div class="mr-1">
                  <select name="" class="form-control mt-3" v-model="product.num">
                    <option :value="num" v-for="num in 10" :key="num">
                      選購 {{ num }} {{ product.unit }}
                    </option>
                  </select>
                </div>

                <button type="button" class="btn btn-primary" @click="addtoCart(product.id, product.num)">
                  <i class="fa fa-cart-plus" aria-hidden="true" v-if="product.id === status.loadingItem"></i> 加入購物車
                </button>
              </div>

              <div class="mt-2 text-right text-muted">
                <i class="fa fa-cc-visa" aria-hidden="true"></i>
                <i class="fa fa-cc-jcb" aria-hidden="true"></i>
                <i class="fa fa-cc-paypal" aria-hidden="true"></i>
              </div>

            </div>


          </div>
          <div class="col-md-8">
            <h2>{{ product.content }}</h2>
            <div class="alert alert-secondary mt-4" role="alert">
              <h3>產品說明</h3>
              <p>{{ product.description }}</p>
            </div>
            <img :src="product.imageUrl" class="img-fluid" alt="">
          </div>

        </div>
      </div>
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
// 定義資料結構
export default {
  data() {
    return {
      order: {
        user: {},
      },
      orderId: '',
      // 先取得orderId，才能取得其他內容
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
        carts: []
      },
      isLoading: false,
      coupon_code: '',
    };
  },
  computed: {
    cartNum() {
      return this.cart.carts.length || 0
    }
  },
  created() {
    this.orderId = this.$route.params.id;
    // 用此方式取得網址上的參數（也就是id）orderId是對應路由（index.js)所自定義的名稱所自定義的名稱，兩個地方要輸入一致才能順利取得資料
    console.log(this.orderId);
    this.getProducts();
    this.getCart();
    this.getProduct(this.orderId)
  },
  methods: {
    getOrder() {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/order/${vm.orderId}`;
      vm.isLoading = true;

      this.$http.get(url).then((rs) => {
        console.log(rs);
        vm.order = rs.data.order;
        vm.isLoading = false;
      });
    },
    payOrder() {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/pay/${vm.orderId}`;
      vm.isLoading = true;

      this.$http.post(url).then((rs) => {
        console.log(rs);
        vm.isLoading = false;
      });
    },
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
    getProduct(id) {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/product/${id}`;
      vm.status.loadingItem = id;
      this.$router.push(`/product/${id}`);

      this.$http.get(url).then((response) => {
        vm.product = response.data.product;
        // 將資料讀取進來
        // $('#productModal').modal('show');
        // 再將modal打開
        console.log(response.data.product);
        vm.status.loadingItem = '';
      });
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
        }
        vm.isLoading = false;
      });

    }
  }
}

</script>