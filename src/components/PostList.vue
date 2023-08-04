<template>
    <div class="wrapper">
        <PostItem v-for="item in postsProps" :key="item.id" :itemProps="item" class="post"></PostItem>
    </div>
</template>

<script>
import PostItem from './PostItem.vue';

    export default {
        components: {
            PostItem
        },
        props: {
            postsProps: {
                type: Array,
                required: true
            }
        },
        data() {
            return {
            }
        }
    }
</script>

<style scoped>
.wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 800px;
        margin: 0 auto;
}

</style>