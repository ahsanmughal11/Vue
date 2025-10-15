<script setup>
import { ref } from 'vue'
let message = ref('');

</script>
<template>
<div>
    <label for="">Type the message:
    <input type="text" v-model="message" />
    </label>
    <p>{{ message }}</p>
    </div>
</template>
<style scoped>

</style>
