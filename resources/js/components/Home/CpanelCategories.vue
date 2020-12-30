<template>
    <div class="container">

        <div class="row">
            <div class="nav-categories">
                <span class="btn-categorie">
                    GENRES
                </span>
                <span class="btn-categorie">
                    PLATFORMS
                </span>
            </div>
        </div>

        <div class="row">
            <div class="item-categories col-6 col-md-4 col-xl-2">
                <div class="card card-cpcategories">
                    <div class="card-cpcategories-img">
                        <img class="card-img-top" src="https://cdns.kinguin.net/media/wysiwyg/genres/psn-card.jpg" alt="Card image cap">
                        <div class="bg-title">
                            <strong>FPS</strong>
                        </div>
                    </div>
                </div>
            </div>
            <div class="item-categories col-6 col-md-4 col-xl-2">
                <div class="card card-cpcategories">
                    <div class="card-cpcategories-img">
                        <img class="card-img-top" src="https://cdns.kinguin.net/media/wysiwyg/genres/psn-card.jpg" alt="Card image cap">
                        <div class="bg-title">
                            <strong>FPS</strong>
                        </div>
                    </div>
                </div>
            </div>
            <div class="item-categories col-6 col-md-4 col-xl-2">
                <div class="card card-cpcategories">
                    <div class="card-cpcategories-img">
                        <img class="card-img-top" src="https://cdns.kinguin.net/media/wysiwyg/genres/psn-card.jpg" alt="Card image cap">
                        <div class="bg-title">
                            <strong>FPS</strong>
                        </div>
                    </div>
                </div>
            </div>
            <div class="item-categories col-6 col-md-4 col-xl-2">
                <div class="card card-cpcategories">
                    <div class="card-cpcategories-img">
                        <img class="card-img-top" src="https://cdns.kinguin.net/media/wysiwyg/genres/psn-card.jpg" alt="Card image cap">
                        <div class="bg-title">
                            <strong>FPS</strong>
                        </div>
                    </div>
                </div>
            </div>
            <div class="item-categories col-6 col-md-4 col-xl-2">
                <div class="card card-cpcategories">
                    <div class="card-cpcategories-img">
                        <img class="card-img-top" src="https://cdns.kinguin.net/media/wysiwyg/genres/psn-card.jpg" alt="Card image cap">
                        <div class="bg-title">
                            <strong>FPS</strong>
                        </div>
                    </div>
                </div>
            </div>
            <div class="item-categories col-6 col-md-4 col-xl-2">
                <div class="card card-cpcategories">
                    <div class="card-cpcategories-img">
                        <img class="card-img-top" src="https://cdns.kinguin.net/media/wysiwyg/genres/psn-card.jpg" alt="Card image cap">
                        <div class="bg-title">
                            <strong>FPS</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="c-more-view">
                <div class="more-cpc">
                    <span class="viewmore-text">
                        VIEW MORE
                    </span>
                    <i class="fa fa-sort-down"></i>
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

.card-cpcategories {
    height: 10em;
    margin: auto;
}

.nav-categories {
    margin: 1em 1em;
    font-weight: 700;
    font-size: 1.1em;
}

.cpc-img{
    height: 10em;
    width: 10em;
    overflow: hidden;
}

.c-badge{
    font-size: 1em;
    line-height: 2rem;
    text-align: center;
    padding: 4em;
    position: absolute;
    margin-top: 3.5em;
    right: 0.1em;
}

.bg-title {
        position: absolute;
    bottom: 0;
    width: 100%;
    max-height: 3rem;
    padding: 0.5rem;
    font-size: 1.2rem;
    text-align: center;
    font-weight: 700;
    color: #fff;
    text-transform: uppercase;
    background: rgba(0,0,0,.4);
}

.btn-categorie {
    margin-right: 0.7em;
    opacity: 70%;
    cursor: pointer;
}

.btn-categorie:hover {
    margin-right: 0.7em;
    opacity: 100%;
}

.c-more-view {
    width: 100%;
    text-align: center;
    padding-bottom: 5em;    
    padding-top: 1em;
}

.more-cpc{
    text-transform: uppercase;
    font-family: Roboto Condensed,sans-serif;
    color: #999;
    position: relative;
    cursor: pointer;
}

.fa-sort-down {
    left: calc(50% - .8rem);
    position: absolute;
    display: block;
    bottom: -0.6em;
    cursor: pointer;
}

.bg-title:hover {
    max-height: 3em;
    height: 5em;
}

</style>
