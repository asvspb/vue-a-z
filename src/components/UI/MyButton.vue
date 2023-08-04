<template>
    <button class="button button--delete">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'my-button',
    }
</script>

<style scoped>
.button {
    margin-top: 10px;
    border: 1px solid teal;
    border-radius: 5px;
    background-color: teal;
    color: hsl(0, 0%, 100%);
    padding: 10px 15px;
}
.button--delete {
    margin-top: 0;
}

.button:hover {
    cursor: pointer;
    outline: 4px solid rgba(129, 178, 178, 0.569);
}

</style>