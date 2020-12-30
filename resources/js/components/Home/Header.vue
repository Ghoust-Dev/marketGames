<template>

<div class="container h_wrapper">
    <sidebar></sidebar>
</div>
    
</template>

<script>
import sidebar from './Sidebar'
export default {
    components: { sidebar }
}
</script>

<style>

body {
    background: #f4f3f0;
}
.h_wrapper {
    margin-top: 10rem;
}
</style>