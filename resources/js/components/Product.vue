<template>
    <div class="product-wrraper">
        <navbar/>
        <theheader/>
        <slidproducts/>
        <thefooter/>
    </div>
</template>

<script>

import navbar from './Navbar'
import thefooter from './Footer'
import theheader from './Product/Header'
import slidproducts from './Product/SlidProducts'

export default {
    name: 'Product',
    components: {
        theheader,
        navbar,
        slidproducts,
        thefooter
    }
}
</script>

<style>

</style>