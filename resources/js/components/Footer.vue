<template>
    <footer class="footer">
        <div class="footer-wrapper">
            <div class="container">
                <div class="row link-footer-wrapper">
                    <div class="link-footer col-xl">
                        <div class="row">
                            <div class="col">
                                <ul>
                                    <li><a href="">Terms and Conditions</a></li>
                                    <li><a href="">Privacy Policy</a></li>
                                    <li><a href="">Transaction Services Agreement</a></li>
                                    <li><a href="">Commissions and Fees</a></li>
                                </ul>
                            </div>
                            <div class="col">
                                <ul>
                                    <li><a href="">About us</a></li>
                                    <li><a href="">Customer Support</a></li>
                                    <li><a href="">Blog</a></li>
                                    <li><a href="">FAQ</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                     <div class="link-footer col-xl">
                        <div class="row">
                            <div class="col">
                                <ul>
                                    <li>Stay Connected</li>
                                    <li>
                                        <div class="social-icons">
                                            <i class="fab fa-facebook fa-2x"></i>
                                            <i class="fab fa-instagram fa-2x"></i>
                                            <i class="fab fa-youtube fa-2x"></i>
                                            <i class="fab fa-twitter fa-2x"></i>
                                            <i class="fab fa-discord fa-2x"></i>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="col">
                                <div class="newsletter-wrapper">
                                    <label class="">Subscribe to receive the Newsletter</label>
                                    <input type="email" placeholder="Enter your Email here" class="form-control">
                                    <button type="submit" class="btn btn-secoundary" >Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="copyright">
                        <p>© 2020 Jinguin.Com. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    
}
</script>

<style>

.footer {
    background: #fb8e31;
    width: 100%;
    margin-top: 5%;
}

.footer-wrapper {
    padding: 3em 2em;
    color: #fff;
}

.link-footer {
    padding-bottom: 2.4em;
    font-size: 0.9em;
    font-weight: 500;
}

.social-icons i {
    padding-right: 0.3em;
}

.copyright {
    text-align: center;
    width: 100%;
    font-weight: 500;
}

.newsletter-wrapper button {
    margin-top: 0.5em;
    background: transparent;
    border-color: #fff;
    width: 7em;
    border-radius: 8px;
    color: #fff;
}

.newsletter-wrapper button:hover {
    background: #fff;
    color: #fb8e31;
}

ul {
    list-style: none;
}

li {
    margin-bottom: 1em;
}

a {
    color: inherit;
    text-decoration: none;
}

a:hover {
    color: inherit;
}
</style>