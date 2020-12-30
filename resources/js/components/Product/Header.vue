<template>
<div class="header-product">

    <div class="container">
        <div class="route-product">

        </div>
        <div class="title-product">

        </div>
        <div class="detail-product-wrapper">
            <div class="row">
                <div class="display-product col-lg-8">
                    <div class="row large-display">
                        <img class="d-block" src="https://static.kinguin.net/cdn-cgi/image//media/images/banners/wow_updated.jpg" alt="First slide">
                    </div>
                    <div class="row small-display">
                        <ul>
                            <li>
                                <img class="d-block" src="https://static.kinguin.net/cdn-cgi/image//media/images/banners/wow_updated.jpg">
                            </li>
                            <li>
                                <img class="d-block" src="https://static.kinguin.net/cdn-cgi/image//media/images/banners/wow_updated.jpg">
                            </li>
                            <li>
                                <img class="d-block" src="https://static.kinguin.net/cdn-cgi/image//media/images/banners/wow_updated.jpg">
                            </li>
                            <li>
                                <img class="d-block" src="https://static.kinguin.net/cdn-cgi/image//media/images/banners/wow_updated.jpg">
                            </li>
                            <li>
                                <img class="d-block" src="https://static.kinguin.net/cdn-cgi/image//media/images/banners/wow_updated.jpg">
                            </li>
                            <li>
                                <img class="d-block" src="https://static.kinguin.net/cdn-cgi/image//media/images/banners/wow_updated.jpg">
                            </li>
                        </ul>
                    </div>
                    <div class="product-tags">
                        <span class="tag">Action</span>
                        <span class="tag">RPG</span>
                    </div>
                </div>
                <div class="detail-product col-lg-4">
                    <div class="card">
                        <div class="card-header">
                            <div class="icons">
                                <div class="row smal-icons">
                                    <div class="icon fab fa-xbox fa-2x"></div>
                                    <div class="icon fab fa-steam fa-2x"></div>
                                    <div class="icon pegi18">
                                        <img class="pegi18-img" src="https://rating.pegi.info/assets/images/games/age_threshold_icons/18.png" alt="PEGI 18">
                                    </div>
                                    <div class="icon fa fa-share-alt fa-2x"></div>
                                </div>
                                <div class="large-icon">
                                    <div class="btn metacritic">
                                        <img class="metacritic-img" src="https://static.wixstatic.com/media/1cd49b_34c03bbd64e04ec588f661837a5f8ac5~mv2_d_2400_2400_s_4_2.png/v1/fill/w_180,h_164,al_c,q_85,usm_0.66_1.00_0.01/metacritic-logo-3.webp" alt="Metacritic">
                                        <span>85</span>
                                    </div>
                                </div>
                            </div>
                            <button class="btn btn-buy-now">
                                <span class="text-price">BUY NOW</span> 
                                <span class="old-price">59.47</span> 
                                <span class="currency">$</span>
                                <span class="new-price">42.47</span>
                            </button>
                            <div class="review-seller">
                                <div class="detail-seller">
                                    Sold by <span class="name-seller">Joe Lambert</span>
                                    <i class="fa fa-crown fa-lg"></i>
                                    <i class="far fa-info-circle fa-lg"></i>
                                </div>
                                <div class="rate-seller">
                                    <i class="fa fa-star fa-lg"></i>
                                    <i class="fa fa-star fa-lg"></i>
                                    <i class="fa fa-star fa-lg"></i>
                                    <i class="fa fa-star fa-lg"></i>
                                    <i class="fa fa-star fa-lg"></i>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <button type="submit">
                                <i class="far fa-heart fa-2x"></i>
                                <span>Add to the wishlist</span>
                            </button>
                            <button type="submit">
                                <i class="far fa-wallet fa-2x"></i>
                                <span>Add to the wishlist</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>
</template>

<script>
export default {
    
}
</script>

<style>

.header-product {
    background: url('https://cdns.kinguin.net/cdn-cgi/image/h=761,q=40,fit=scale-down,f=auto/media/catalog/category/acvalhallabg.jpg') center / cover no-repeat;
    
    padding: 3em 0 3em;
}

.header-product .container {    
    margin-top: 10em;
}

.header-product::after {
    background-image: linear-gradient(to top, rgb(238, 238, 238) 0%, transparent 50%);
    height: 100%; 
    content: '';
    display: block;
}

.large-display {
    height: 450px;
    overflow: hidden;
        margin-left: auto;
}

.small-display {
    height: 7em;
    overflow: hidden;
    justify-items: left;
    margin: 10px 0 0 -40px;
}

.small-display ul {
    display: inline-flex;
}

.small-display li {
    margin-right: 1.5em;
}

.small-display img {
    height: auto;
    width: 190px;
}

.display-product .product-tags{
    margin-top: 10px;
}

.display-product .product-tags .tag:hover {
    filter: drop-shadow(rgba(0, 0, 0, 0.75) 0px 0px 5px);
}

.display-product .product-tags .tag {
    border-radius: 15px;
    background: #fff;
    padding: 5px 15px;
    margin-right: 10px;
    cursor: pointer;
}

.detail-product .card {
    width: 100%;
    max-width: 100%;
    cursor:default;
    height: auto;
    border: 0px;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.5);
}

.detail-product .card:hover {
    border: 0px
}

.detail-product .card-header {
    text-align: center;
    border-radius: 20px;
    background: #fff;
    border: 0px;
}

.detail-product .card-header .icons{
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
    padding: 32px 32px 0px;
}

.detail-product .card-header .pegi18-img,
.detail-product .card-header .metacritic-img {
    height: 30px
}

.detail-product .card-header .metacritic-img {
    filter: brightness(0) invert(1);
    margin-top: 0.1em;
}

.detail-product .card-header .metacritic {
    display: flex;
    align-items: center;
}

.detail-product .card-header .metacritic span{
    font-size: 30px;
    font-weight: 500;
}

.detail-product .card-header .smal-icons {
    display: flex;
    flex-grow: 1;
    flex-wrap: wrap;
}

.detail-product .card-header .smal-icons .icon{
    display: flex;
    flex-grow: 1;
    color: #f4bd09  ;
    justify-content: center;
    
}

.detail-product .card-header .large-icon {
    justify-content: center;
    background: #52e555;
    color: #fff;
    border-radius: 25px;
    width: 100%;
    height: 2.5em;
    display: flex;
    margin: 1rem auto 1rem;
    align-items: center;
    margin-bottom: 2em;
}

.detail-product .btn-buy-now {
    width: 100%;
    height: 3em;
    border-radius: 5em;
    background: #ffb400;
    color: #fff;
    font-size: 22px;
    font-weight: 700;
}

/* .detail-product .btn-buy-now .new-price,
.detail-product .btn-buy-now .currency {
    
} */

.detail-product .btn-buy-now .old-price {
    font-size: 0.8em;
    margin: 0 .5em;
    text-decoration: line-through;
    opacity: 70%;
}

.detail-product .review-seller {
    border-radius: 15px;
    background: #fff7e5;
    margin: 20px;
    height: auto;
    padding: 1.5em 0;
}

.detail-product .review-seller .name-seller{
    font-weight: 700;
}

.detail-product .review-seller .fa-crown{
    color: #ffb400;
}

.detail-product .review-seller .rate-seller{
    color: #ffb400;
    margin: 12px 0 0;
}

.detail-product .review-seller .fa-info-circle,
.detail-product .card-body .fa-wallet {
    opacity: 75%;
}

.detail-product .card-body .fa-heart {
    font-weight: 300;
    color: red;
}

.detail-product .card-body .fa-heart:hover {
    transform: scale(1.2)
}

.detail-product .card-body {
    display: flex;
    margin: 10px;
    background: transparent;    
    justify-content: center;
}

.detail-product .card-body button {
    border: 0px;
    background: transparent;
    padding: 10px;
    display: inline-grid;
    cursor: pointer;
}
</style>