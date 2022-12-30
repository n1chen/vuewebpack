<template>
  <div>
    <!-- 輸入資料頁 -->
    <div class="container main-contant py-5">
      <h1 class="text-center mb-3 text-secondary">P â t i s s e r i e 結帳</h1>
      <section class="form-row align-items-center text-center">
        <div class="col">
          <div class="alert alert-success alert-rounded mb-0" role="alert">
            1.輸入訂單資料
          </div>
        </div>
        <div class="col">
          <div class="alert alert-light alert-rounded mb-0" role="alert">
            2.確認付款
          </div>
        </div>
        <div class="col">
          <div class="alert alert-light alert-rounded mb-0" role="alert">
            3.訂單完成
          </div>
        </div>
      </section>

      <section class="row justify-content-center mt-5">
        <div class="col-md-8">
          <div class="card">
            <div class="card-header" id="headingOne">
              <h6 class="mb-0 d-flex align-items-center">
                <a data-toggle="collapse" href="#collapseOne">
                  顯示購物車細節
                  <i class="fa fa-angle-down" aria-hidden="true"></i>
                </a>
                <span class="h3 ml-auto mb-0">${{ cart.total }}</span>
              </h6>
            </div>
          </div>
          <div id="collapseOne" class="collapse mt-3">
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
              <tfoot>
                <td colspan="3" class="text-right">總計</td>
                <td class="text-right">{{ cart.total }}</td>
              </tfoot>
            </table>
            <!-- <table class="table table-sm">
              <thead>
                <tr>
                  <th width="30"></th>
                  <th width="100"></th>
                  <th>商品名稱</th>
                  <th width="100">數量</th>
                  <th width="80">小計</th>
                </tr>
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
              </tbody> -->
            <!-- <tbody>
                <tr v-for="item in cart.carts" :key="item.id" v-if="cart.carts">
                  <td class="align-middle text-center">
                    <a href="#removeModal" class="text-muted" data-toggle="modal" data-title="刪除 金牌西裝 1 件">
                      <i class="fa fa-trash-o" aria-hidden="true"></i>
                    </a>
                  </td>
                  <td class="align-middle">
                    <img src="https://images.unsplash.com/photo-1494281258937-45f28753affd?w=1350"
                      class="img-fluid img-thumbnail" alt="">
                  </td>
                  <td class="align-middle">{{ item.product.title }}</td>
                  <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
                  <td class="align-middle text-right"></td>
                </tr>
                <tr>
                  <td colspan="4" class="text-right">運費</td>
                  <td class="text-right">
                    <strong>$60</strong>
                  </td>
                </tr>
                <tr>
                  <td colspan="4" class="text-right">合計</td>
                  <td class="text-right">
                    <strong></strong>
                  </td>
                </tr>
              </tbody> -->
            <!-- </table> -->
          </div>

          <h5 class="py-3 mt-5 mb-2 text-center bg-light">
            訂購人資訊
          </h5>
          <form id="needs-validation" novalidate @submit.prevent="createOrder">
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="username">姓名</label>
                <input type="text" class="form-control" id="username" placeholder="姓名" required>
                <div class="invalid-feedback">
                  請輸入姓名
                </div>
              </div>
              <div class="form-group col-md-6">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email" placeholder="Email" required>
                <div class="invalid-feedback">
                  請輸入正確的 Email
                </div>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-4">
                <label for="state">國家</label>
                <select id="state" class="form-control" required>
                  <option selected>台灣</option>
                  <option>...</option>
                </select>
              </div>
              <div class="form-group col-md">
                <label for="city">城市</label>
                <select name="" id="city" class="form-control" required>
                  <option value="台北市">台北市</option>
                  <option value="台南市">台南市</option>
                  <option value="高雄市">高雄市</option>
                </select>
              </div>
              <div class="form-group col-md">
                <label for="inputZip">郵遞區號</label>
                <input type="text" class="form-control" id="inputZip">
              </div>
            </div>
            <div class="form-group">
              <label for="inputAddress">地址</label>
              <input type="text" class="form-control" id="inputAddress" placeholder="重慶南路一段122號" required>
              <div class="invalid-feedback">
                請輸入地址
              </div>
            </div>
            <div class="text-right">
              <router-link to="/customer_order">
                <a href="shoppingCart.html" class="btn btn-secondary">繼續選購</a>
              </router-link>
              <router-link to="/customer_checkout">
                <button type="submit" class="btn btn-primary">確認付款</button>
              </router-link>

            </div>
          </form>


        </div>
      </section>

    </div>
    <!-- 輸入資料頁 -->
  </div>
</template>


<script>
// 定義資料結構
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
      order: {
        user: {},
      },
      orderId: '',
      // 先取得orderId，才能取得其他內容
      cart: {
        carts: []
      },
    };
  },
  created() {
    this.orderId = this.$route.params.orderId;
    // 用此方式取得網址上的參數（也就是id）orderId是對應路由（index.js)所自定義的名稱所自定義的名稱，兩個地方要輸入一致才能順利取得資料
    console.log(this.orderId);
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
    removeCartItem(id) {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart/${id}`;
      vm.isLoading = true;
      this.$http.delete(url).then(() => {
        vm.getCart();
        vm.isLoading = false;
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
    payOrder() {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/pay/${vm.orderId}`;
      vm.isLoading = true;

      this.$http.post(url).then((rs) => {
        console.log(rs);
        vm.isLoading = false;
      });
    }
  },

}

</script>