<template>
    <div  class="container-fluid theNavbar">
        <nav class="container navbar fixed-top navbar-expand-lg navbar-light">
            <a class="navbar-brand" href="#">Logo</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" >
                <form class="form-inline ml-auto my-2 my-lg-0">
                    <div class="input-group" id="Search">
                        <div class="input-group-prepend">
                            <div class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                All
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                            <input type="search" class="form-control" placeholder="Search" id="Search-input">
                            <div class="input-group-text mt-1" id="Search-btn">
                                <button class="btn " type="submit">
                                    <i class="fa fa-search fa-lg"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
                <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li class="nav-item">
                        <div class="add-Cart">
                            <a class="nav-link" href="#"><i class="fa fa-shopping-cart"></i></a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <div class="Signin">
                            <router-link :to="{ name: 'login'}" class="nav-link"><i class="fa fa-user-circle"></i> Sign in</router-link>
                        </div>
                    </li>
                </ul>
            </div>
            <router-view></router-view>
        </nav>
    </div>
    
</template>

<script>
export default {
    
}


</script>

<style>

.theNavbar {
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 1001;
    width: 100%;
    height: 6rem;
    background: #fff;
}

.navbar .navbar-collapse #Search {
    background: #f4f3f0;
    border-radius: 50px;
    width: 32em;
    height: 3em;
    font-weight: 500;
}

.navbar .navbar-collapse #Search:focus-within {
    filter: drop-shadow(rgba(0, 0, 0, 0.75) 0px 0px 5px);
    background: #fff;
}

#Search .input-group-prepend {
    width: 100%;
}

.navbar .navbar-collapse #Search-btn  {
    position: absolute;
    left: calc(29%*3);
    top: calc(-10%);
}

.navbar .navbar-collapse #Search-input  {
    width: 72%;
    text-align: center;
}

.navbar .navbar-collapse #Search-btn,
.navbar .navbar-collapse #Search-input  {
    background: transparent;
    border: 0px solid;
    align-content: center;
}

.navbar .navbar-collapse #Search-btn .btn:focus,
.navbar .navbar-collapse .form-control:focus  {
    box-shadow: none !important;
}

.navbar .navbar-collapse #Search-btn .btn {
    background: transparent;
    cursor: pointer;
}

.navbar .navbar-collapse #Search-btn .fa {
    color: #c3c2c0;
}

.navbar .navbar-collapse #Search-btn .fa:hover {
    font-size: 1.55em;
}

.navbar .navbar-collapse #Search .dropdown-menu {
    margin-top: 5px;
    border: 0px solid;
    border-radius: 0px;
}

.navbar .navbar-collapse #Search .nav-item {
    min-width: 4.5em;
}

.navbar .navbar-collapse #Search #navbarDropdown {
    color: #c3c2c0;
    cursor: pointer;
    position: relative;
    top: calc(5%);
}

.navbar .navbar-collapse #Search #navbarDropdown:hover {
    color: #000;
}


.collapse {
    width: 400px;
}

.Signin {
    background-color: #f4f3f0 !important;
    border-radius: 50px;
}

.add-Cart {
    background-color: #f4f3f0 !important;
    border-radius: 2rem;
    margin-right: 10px;
}

.add-Cart a:hover,
.Signin a:hover {
color : rgb(251, 142, 49) !important;
}


</style>