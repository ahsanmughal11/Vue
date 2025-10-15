<script setup>
import { ref, onMounted } from 'vue'
import Swal from 'sweetalert'
let message = ref('');
onMounted(() => {
    Swal({
        title: 'Welcome!',
        text: 'This is a reactive component using SweetAlert',
        icon: 'success',
    });
});

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
