import Vue from 'vue';
import VueRouter from 'vue-router';
import ItemView from '../views/ItemView.vue'
import UserView from '../views/UserView.vue'
import createListView from '../views/CreateListView.js';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/news',
        },
        {
            // path : url주소
            path: '/news',
            name: 'news',
            // component : 특정 URL 주소로 갔을 때 표시 될 컴포넌트
            component: createListView('NewsView'),
        },
        {
            path: '/ask',
            name: 'ask',
            component: createListView('AskView'),
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: createListView('JobsView'),
        },
        {
            path: '/item/:id',
            component: ItemView,
        },
        {
            path: '/user/:id',
            component: UserView,
        }
    ]
})