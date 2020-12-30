<template>

<div class="row">
        <div class="col-lg-8">
                <h3>HOT</h3>
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <ul class="slick-dots">
                        <li class="slick-active"><button>1</button></li>
                        <li class=""><button>2</button></li>
                        <li class=""><button>3</button></li>
                        <li class=""><button>2</button></li>
                        <li class=""><button>3</button></li>
                        <li class=""><button>2</button></li>
                        <li class=""><button>3</button></li>
                    </ul>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img class="d-block w-80" src="https://static.kinguin.net/cdn-cgi/image//media/images/banners/wow_updated.jpg" alt="First slide">
                        </div>
                        <div class="carousel-item">
                        <img class="d-block w-80" src="https://cdns.kinguin.net/media/catalog/category/cache/1/hi_image/9df78eab33525d08d6e5fb8d27136e95/acvalhalla8_4.jpg" alt="Second slide">
                        </div>
                        <div class="carousel-item">
                        <img class="d-block w-80" src="https://static.kinguin.net/cdn-cgi/image//media/images/banners/Cyberpunk_EN.png" alt="Third slide">
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
        </div>
        <div class="col-lg-4">
            <h4>Recommended For You</h4>
        <div>
            <div class="row">
                <div class="col-6 col-md-3 col-lg-6">
                    <div class="card" >
                        <img class="card-img-top" src="https://cdns.kinguin.net/media/catalog/category/cache/1/hi_image/9df78eab33525d08d6e5fb8d27136e95/819L2OOCo3L._AC_SL1500__1_2_1.jpg" alt="Card image cap">
                        <span class="badge badge-pill badge-success">72%</span>
                        <div class="card-body">
                            <h5 class="card-title">Name of Game</h5>
                            <div class="genreCategorie">
                                <i class="fa fa-gamepad"></i>
                                <i class="fab fa-steam"></i>
                                <i class="fab fa-playstation"></i>
                            </div>
                            <div class="price">
                               <div class="old-price">
                                   37$
                               </div>
                               <div class="new-price">
                                   37$
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6 col-md-3 col-lg-6">
                    <div class="card" >
                    <img class="card-img-top" src="https://cdns.kinguin.net/media/wysiwyg/genres/software.jpg" alt="Card image cap">
                    <div class="card-body">
                            <h5 class="card-title">Name of Game</h5>
                            <div class="genreCategorie">
                                <i class="fa fa-gamepad"></i>
                                <i class="fab fa-steam"></i>
                                <i class="fab fa-playstation"></i>
                            </div>
                            <div class="price">
                               <div class="old-price">
                                   37$
                               </div>
                               <div class="new-price">
                                   37$
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6 col-md-3 col-lg-6">
                    <div class="card" >
                    <img class="card-img-top" src="https://cdns.kinguin.net/media/wysiwyg/genres/action.jpg" alt="Card image cap">
                    <span class="badge badge-pill badge-success">52%</span> 
                    <div class="card-body">
                            <h5 class="card-title">Name of Game</h5>
                            <div class="genreCategorie">
                                <i class="fa fa-gamepad"></i>
                                <i class="fab fa-steam"></i>
                                <i class="fab fa-playstation"></i>
                            </div>
                            <div class="price">
                               <div class="old-price">
                                   37$
                               </div>
                               <div class="new-price">
                                   37$
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6 col-md-3 col-lg-6">
                    <div class="card" >
                        <img class="card-img-top" src="https://cdns.kinguin.net/media/catalog/category/cache/1/hi_image/9df78eab33525d08d6e5fb8d27136e95/baldur38_2.jpg" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">Name of Game</h5>
                            <div class="genreCategorie">
                                <i class="fa fa-gamepad"></i>
                                <i class="fab fa-steam"></i>
                                <i class="fab fa-playstation"></i>
                            </div>
                            <div class="price">
                               <div class="old-price">
                                   37$
                               </div>
                               <div class="new-price">
                                   37$
                               </div>
                            </div>
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

h3 {
    font-size: 22px;
    color: #000;
    opacity: 25%;
}

h4 {
    font-size:18px !important;
    color: #fb8e31;
    opacity: 75%;
}

.carousel-inner {
    border-radius: 10px !important;
    max-height: 38em;
    max-width: 48em;

}

.card-img-top {
    height: 10em;
    width: 100%
}

.card {
    height: 17rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 0.4em;
    margin-bottom: 1em;
    margin-right: 0.2em;
    display:block;
    overflow:hidden;
    border-radius: 10px;
    max-width: 10em;
    min-width: 10em;
}

.card:hover {
    border: 1px solid;
    border-color: #fb8e31;
    cursor: pointer;
}

.card .card-title {
    font-size: 12px;
    height: 2.5em;
    font-family: "Roboto Condensed", sans-serif;
    overflow: hidden;
    line-height: 1rem;
    text-align: center;
    padding-top: 2px;
    max-width: 10.5em;
}

.card .card-body {
    padding-top: 1.1rem;
    padding: 0rem;
}

.card .genreCategorie {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto 0px;
    height: 2.5em;
    padding: 0px 14px;
}

.card .price {
    background: #fb8e31;
    position: absolute;
    width: 100%;
    margin-top: auto;
    justify-content: center;
    display: flex;
    padding-bottom: 4em;
    -webkit-box-pack: justify;
    padding: 0.2rem;
}

.card .price .old-price{
    color: #fff;
    font-size: 12px;
    margin-right: auto;
    padding-left: 5px;
    line-height: 1.4rem;
    text-decoration: line-through;
    opacity: 0.5;
}

.card .price .new-price{
    color: #fff;
    margin-left: auto;
    padding-right: 5px;
    margin-top: -2px;
}

.card-body .fa,
.card-body .fab{
    font-size: 1.5rem;
    margin: auto;
}

.slick-dots {
    position: absolute;
    top: -2.5rem;
    right: 0;
    list-style: none;
    display: block;
    text-align: center;
    padding: 0;
    margin: 0;
}

.slick-dots li {
    position: relative;
    display: inline-block;
    height: 1rem;
    width: 1rem;
    margin: 0 .5rem 0 0;
    padding: 0;
    cursor: pointer;
}

.slick-dots li button {
    border: 1px solid #b8b8b8;
    border-radius: 8px;
    background: transparent;
    display: block;
    height: 8px;
    width: 8px;
    outline: none;
    line-height: 0;
    font-size: 0;
    color: transparent;
    cursor: pointer;
}

.slick-dots li.slick-active button,
.slick-dots li button:focus,
.slick-dots li button:hover {
    background: #b8b8b8;
}

.badge {
    text-align: right !important;
    position: absolute;
    left: -7px;
    margin-top: 1em;
    width: 3.5em;
}
</style>