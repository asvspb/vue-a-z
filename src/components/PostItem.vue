<template>
    <div class="post">
        <div class="post__item">
            <div><strong>Что делать: {{ itemProps.title }}</strong></div>
            <div><strong>Как делать: {{ itemProps.description }}</strong></div>
        </div>
            <my-button @click="deletePost" class="post--delete">Удалить</my-button>
    </div>
</template>

<script>
import MyButton from './UI/MyButton.vue'


    export default {
        components: {
            MyButton
        },
        props: {
            itemProps: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                itemPost: {
                    title: '',
                    description: '',
                }
            }
        },
        methods: {
            deletePost() {
                this.$emit('deletePostEmiter', this.itemProps.id)
            }
        }
    }
</script>

<style scoped>
.post {
    display: flex;
    justify-content: space-between;
    min-width: 100%;
    margin-top: 15px;
    padding: 10px;
    border: 2px solid teal;
    border-radius: 5px;
    outline: 4px solid rgba(159, 175, 175, 0.569);
}
</style>