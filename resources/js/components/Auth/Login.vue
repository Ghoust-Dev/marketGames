<template>
    <div class="container-fluid">
        <div class="navbar">
            <div class="logoWeb">
                <strong>Jinguin Logo</strong>
            </div>
            <div class="multiLang">

            </div>
        </div>
        <div class="main-container">
            <div class="login-wrapper">
                <h2>Welcome home, player!</h2>
                <div class="log-platform">
                    <div class="col-auto">
                        <div class="icons-platform">
                            <div class="connect fab fa-facebook-f" rel="facebook-connect"></div>
                            <div class="connect fab fa-google" rel="google-connect"></div>
                            <div class="connect fab fa-linkedin-in" rel="linkedin-connect"></div>
                            <div class="connect fab fa-twitter" rel="twitter-connect"></div>
                            <div class="connect fab fa-twitch" rel="twitch-connect"></div>
                        </div>
                    </div>
                </div>
                <form action="">
                    <div class="col-auto">
                        <div class="input-group mb-2">
                            <div class="input-group-prepend">
                                <div class="input-group-text"><i class="fa fa-user"></i></div>
                            </div>
                            <input type="email" class="form-control" id="email" placeholder="Email" aria-label="" aria-describedby="basic-addon1">
                        </div>
                    </div>
                    <div class="col-auto">
                        <div class="input-group mb-2">
                            <div class="input-group-prepend">
                                <div class="input-group-text"><i class="fa fa-lock"></i></div>
                            </div>
                            <input type="password" class="form-control" id="password" placeholder="Password" aria-label="" aria-describedby="basic-addon1">
                        </div>
                    </div>
                    <div class="link-forget-pass">
                        <a href="">Forgot Password?</a>
                    </div>
                    <button class="btn btn-signin" type="submit">SIGN IN</button>
                    <div class="link-create-acc">
                        or <router-link :to="{ name: 'register'}"><strong>CREATE NEW ACCOUNT</strong></router-link>
                    </div>
                </form>
            </div>
        </div>
            <div class="footer-login">
                <div class="row">
                    <div class="copyright-text col-6">
                        © 2020 Jinguin.Com
                    </div>
                    <div class="links-footer col-6">
                        <a href="">Terms and conditions</a> | <a href="">24/7 Support</a>
                    </div>
                </div>
            </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>

.main-container {
    padding: 5% 30%;
}

.footer-login{
    padding: 3em 1em 1em 1em;
}

.footer-login .links-footer{
    text-align: right;
    font-size: 14px;
    opacity: 70%;
    font-weight: 500;
}

.footer-login .copyright-text{
    text-align: left;
     font-size: 14px;
     opacity: 75%;
     font-weight: 500;   
}

.logoWeb {
    margin-left: 4em;
    margin-top: 2em;
}

.login-wrapper {
    text-align: center;
    background: #edeceb;
    padding: 10%;
    overflow: hidden;
    min-width: 450px;
    position: relative;
}

.login-wrapper h2 {
    font-size: 1.5em;
    padding-bottom: 0.5em;
}

.login-wrapper .input-group-prepend .fa {
    color: #afaeac;
}

.login-wrapper .input-group-text {
    background: #fff;
}

.login-wrapper .input-group #email,
.login-wrapper .input-group #password {
    border-left: 0px;
}

.link-forget-pass {
    font-size: 12px;
    margin-bottom: 1.5em;
    margin-top: 1.5em;
    color: #838281;
}

.login-wrapper .btn-signin {
    width: 90%;
    border-radius: 0px;
    background: #fbb935;
    border-color: #fbb935;
    font-weight: 500;
    margin-bottom: 1em;
    color: #fff;
}

.login-wrapper .btn-signin:hover {
    background: #fba803;
    border-color: #fba803;
}

.login-wrapper .link-create-acc {
    opacity: 65%;
}

.icons-platform {
    margin-bottom: 1.2em;
}

.icons-platform .connect {
    box-sizing: border-box;
    margin: 0 5px;
    display: inline-block;
    width: 40px;
    height: 40px;
    cursor: pointer;
    color: #fff;
    font-size: 23px;
    line-height: 40px;
    vertical-align: middle;
}

.icons-platform .connect[rel="facebook-connect"] {
    background: #3b5997;
}

.icons-platform .connect[rel="google-connect"] {
    background: #dc4e42;
}

.icons-platform .connect[rel="linkedin-connect"] {
    background: #0077b4;
}

.icons-platform .connect[rel="twitter-connect"] {
    background: #78e0d8 ;
}

.icons-platform .connect[rel="twitch-connect"] {
    background: #6441a4 ;
}

</style>