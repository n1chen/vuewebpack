import Vue from 'vue';
import VueRouter from 'vue-router';

// import Home from '@/components/HelloWorld';
import Dashboard from '@/components/Dashboard';
import Login from '@/components/pages/Login';
import Products from '@/components/pages/products';
import CustomerOrder from '@/components/pages/CustomerOrders';
import CustomerInfor from '@/components/CustomerInfor';
import ToProductDetail from '@/components/ToProductDetail';
import Orders from '@/components/pages/Orders';
import Coupons from '@/components/pages/Coupons';
import Home from '@/components/Home';
import CustomerCheckout from '@/components/CustomerCheckout';
import ToCustomer from '@/components/ToCustomer';
import ToCustomerSearch from '@/components/ToCustomerSearch';


Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '*',
            redirect: 'login',

        },
        {
            name: 'Login',
            path: '/login',
            component: Login,
        },
        {
            name: 'Dashboard',
            path: '/admin',
            component: Dashboard,
            children: [
                {
                    name: 'Products1',
                    path: 'products',
                    component: Products,
                    meta: { requestAuth: true },

                },
                {
                    name: 'CustomerOrder',
                    path: 'customer_order',
                    component: CustomerOrder,
                },
                // {
                //     name: 'CustomerInfor',
                //     path: 'customer_infor',
                //     component: CustomerInfor,
                // },
                // {
                //     name: 'CustomerCheckout',
                //     path: 'customer_checkout/:orderId',
                //     component: CustomerCheckout,
                // },
                {
                    path: 'coupons',
                    name: 'Coupons',
                    component: Coupons,
                    meta: { requiresAuth: true },
                },
                {
                    path: 'orders',
                    name: 'Orders',
                    component: Orders,
                    meta: { requiresAuth: true },
                },

            ]
        },
        {
            name: 'ToCustomer',
            path: '/to_customer',
            component: ToCustomer,
        },
        {
            name: 'ToCustomerSearch',
            path: '/to_customersearch',
            component: ToCustomerSearch,
        },
        {
            name: 'ToProductDetail',
            path: '/product/:id',
            component: ToProductDetail,
        },
        {
            name: 'Home',
            path: '/home',
            component: Home,
        },
        {
            name: 'CustomerInfor',
            path: '/customer_infor',
            component: CustomerInfor,
        },
        {
            name: 'CustomerCheckout',
            path: '/customer_checkout/:orderId',
            component: CustomerCheckout,
        },
        // {
        //     name: 'Dashboard',
        //     path: '/admin',
        //     component: Dashboard,
        //     meta: { requestAuth: true },
        //     children: [
        //         {
        //             name: 'CustomerOrder',
        //             path: 'customer_order',
        //             component: CustomerOrder,
        //         },
        //         // {
        //         //     name: 'CustomerInfor',
        //         //     path: 'customer_infor',
        //         //     component: CustomerInfor,
        //         // },
        //         // {
        //         //     name: 'CustomerCheckout',
        //         //     path: 'customer_checkout/:orderId',
        //         //     component: CustomerCheckout,
        //         // },
        //         {
        //             path: 'coupons',
        //             name: 'Coupons',
        //             component: Coupons,
        //             meta: { requiresAuth: true },
        //         },
        //         {
        //             path: 'orders',
        //             name: 'Orders',
        //             component: Orders,
        //             meta: { requiresAuth: true },
        //         },
                
        //     ]
        // },

    ],

});