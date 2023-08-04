<template>
        <form @submit.prevent class="post-form">
            <h3>Создать задачу</h3>
            <div class="wrapper">
                <input
                    v-model="newPost.title"
                    class="input"
                    type="text"
                    name=""
                    id=""
                    placeholder="Название задачи">
                <input
                    v-model="newPost.description"
                    class="input"
                    type="text"
                    name=""
                    id=""
                    placeholder="Нужно сделать">
            </div>
            <div class="wrapper wrapper--button">
                <my-button
                    @click="createPost"
                    class="button--create"
                    >Создать
                </my-button>
            </div>
        </form>
</template>

<script>
import MyButton from './UI/MyButton.vue'

    export default {
        components: {
            MyButton
        },
        data() {
            return {
                newPost : {
                    title: '',
                    description: '',
                }
            }
        },
        methods: {
            createPost() {
                this.newPost.id = Date.now(),
                this.$emit('createPostEmiter', this.newPost);
                this.newPost = {
                    title: '',
                    description: '',
                }
            }
        }
    }
</script>
<style scoped>

.post-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

h3 {
    text-transform: uppercase;
}

.input {
    margin-top: 10px;
    padding: 10px 15px;
    min-width: 99.3%;
    border: 2px solid teal;
    border-radius: 5px;
}
.input:focus {
    outline: 4px solid rgba(129, 178, 178, 0.569);
}

.button--create {
    align-self: flex-end;
    margin-top: 10px;
}
.wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 800px;
    margin: 0 auto;
}
.wrapper--button {
    max-width: 830px;
}
</style>