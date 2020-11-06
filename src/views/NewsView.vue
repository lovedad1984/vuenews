<template>
    <div>
        <div v-for="user in this.$store.state.news" v-bind:key="user.id">{{ user.title }}</div>
    </div>
</template>

<script>
import { fetchNewsList } from '../api/index.js';

export default {
    created() {
        this.$store.dispatch('FETCH_NEWS');
        // axios.get('https://api.hnpwa.com/v0/news/1.json')
        // .then(response => this.users = response.data)
        // fetchNewsList()
        // .then(response => {
        //     this.users = response.data;
        // })
        // .catch(function(error) {
        //     console.log(error);
        // })
    }
}
</script>

<style>

</style>