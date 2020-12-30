<template>
    <div class="home">
        <navbar/>
        <theheader></theheader>
        <bestsellers></bestsellers>
        <cpcategories></cpcategories>
        <thefooter></thefooter>
    </div>
</template>

<script>

import navbar  from './components/Navbar'
import theheader from './components/Home/Header'
import bestsellers from './components/Home/bestsellers'
import cpcategories from './components/Home/CpanelCategories'
import thefooter from './components/Footer'

export default {
    name: 'Home',
    components: { 
        navbar,
        theheader,
        bestsellers,
        cpcategories,
        thefooter
    }
}
</script>

<style>

</style>