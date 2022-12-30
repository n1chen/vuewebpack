<template>
    <div>
        <loading :active.sync="isLoading"></loading>

        <head>
            <!-- Required meta tags -->
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

            <!-- Bootstrap CSS -->
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
                integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn"
                crossorigin="anonymous">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css">

        </head>

        <body>




        </body>

        <header>



            <!-- animation background -->
            <div ref="vantaRef" style="height:550px">
                <nav class="navbar navbar-dark fixed-top  flex-md-nowrap p-0 shadow">
                    <a class=" col-sm-3 col-md-2 mr-0" href="#"></a>
                    <form class="form-inline my-2 my-lg-0 text-white" id="nav">
                        <router-link to="/home">
                            <a class="nav-link text-white" href="#">HOME</a>
                        </router-link>
                        <router-link to="/to_customer">
                            <a class="nav-link text-white" href="#">PRODUCT</a>
                        </router-link>
                        <router-link to="/admin/products">
                            <a href="#" class="nav-link text-white">BACKSTAGE</a>
                        </router-link>
                    </form>
                </nav>

                <section class="pt-5">
                    <div class="pt-5">
                        <div class="pt-5 pl-5">
                            <h1 class="title pt-5">P â t i s s e r i e</h1>
                            <h4 class="describe pt-3">This is a French pastry shop that sells exquisitely crafted
                                pastries.
                            </h4>
                        </div>
                    </div>
                </section>

            </div>
            <!-- ref屬性，自訂屬性名稱ref，透過父組件$refs取得 -->

        </header>

        <section class="text-black py-5">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="box col-md-4 ">
                        <img src="https://www.imagesource.com/cache/mcache2/00853109.jpg" alt=""
                            class="cover-fit rounded img-fluid">
                    </div>
                    <div class="box col-md-4 ">
                        <img src="https://www.imagesource.com/cache/mcache2/00853108.jpg" alt=""
                            class="cover-fit rounded img-fluid">
                    </div>
                    <div class="box col-md-4">
                        <img src="https://www.imagesource.com/cache/mcache2/00853110.jpg" alt=""
                            class="cover-fit rounded img-fluid">
                    </div>
                </div>
            </div>
        </section>

        <div class="embed-responsive embed-responsive-16by9">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/exVf3QeYpPk" title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        <section class="container-fluid py-5 bg-light text-dark" style="position: relative;">
            <div class="row justify-content-end text-md-light">
                <div class="col-md-5 bg-cover" style="position: absolute; top: 0; bottom: 0;
                
                    background-image: url(https://www.imagesource.com/cache/mcache2/00857329.jpg);">
                </div>
            </div>
            <div class="container">
                <div class="col-md-7">
                    <h3>讓甜點療癒你的身心</h3>
                    <p>正當大家都告訴你甜食毒害眼睛毒害舌頭，我想告訴你的是，沒錯確實如此。</p>
                    <p>過多的放縱確實是毒，但是適當的放鬆是療癒。有太多正確又健康的規則限制著人們，但限制以外的才是人類內心的渴望，聆聽你的渴望，follow your heart。解開束縛才能重新被束縛。</p>
                    <p>你也可以不聽上述的建議無限放縱，讓老闆的店發大財，也是相當樂見。</p>


                    <router-link to="/to_customer">
                        <a href="#" class="btn btn-outline-danger">GO SHOPPING</a>
                    </router-link>

                    <div class="row mt-3">
                        <div class="col-6">
                            <h4>甜點歷史</h4>
                            <p>歐洲是西點的主要發源地，人類歷史上最原始的甜點，是由麵粉調和油與蜂蜜而成的圓餅。在許多人類文明中，
                                甜點常被用來作為供俸神明的祭物，除講究材料品質外，形狀更為重要。貧窮的埃及人買不起鵝、牛等牲畜祭祀神明時，就製作動物形狀的蛋糕替代。後來，農村蛋糕逐漸演變成婚禮、生日等重要場合的食品。
                            </p>
                        </div>
                        <div class="col-6">
                            <h4>21世紀甜點新風潮</h4>
                            <p>到了20世紀，法國的糕點業逐漸演化，更加專精在製作「甜點」上，類型也更加廣泛。過去十幾年間甜點越來越精緻、高價位，便開始出現了「高級訂製甜點」（pâtisserie haute
                                couture）與「高級甜點」（haute pâtisserie）、「奢華甜點」（pâtisserie de
                                luxe）等等說法，和融入巴黎人日常生活的「麵包甜點店」所賣的商品有所區隔。</p>
                        </div>
                    </div>
                </div>
            </div>


        </section>









        <!-- Modal -->
        <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">登入</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        ...
                    </div>
                    <div class="modal-footer">
                        <a href="#" class="mr-auto" data-dismiss="modal" data-toggle="modal"
                            data-target="#loginModal">切換到註冊</a>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="registerModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header bg-warning">
                        <h5 class="modal-title" id="exampleModalLabel">註冊</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        ...
                    </div>
                    <div class="modal-footer">
                        <a href="#" class="mr-auto" data-dismiss="modal" data-toggle="modal"
                            data-target="#registerModal">切換到登入</a>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>




        <footer class="bg-light text-muted py-5">
            <div class="container">
                <ul class="list-inline text-center">
                    <li class="list-inline-item">© Copright 2017 六角</li>
                    <li class="list-inline-item">
                        <a class="text-info" href="#">
                            <i class="fa fa-instagram" aria-hidden="true"></i> Instagrame</a>
                    </li>
                    <li class="list-inline-item">
                        <a class="text-info" href="#">
                            <i class="fa fa-facebook-square" aria-hidden="true"></i> Facebook</a>
                    </li>
                    <li class="list-inline-item">
                        <a class="text-info" href="#">About</a>
                    </li>
                </ul>
                <p class="text-center">Made with Bootstrap4</p>
            </div>
        </footer>
    </div>
</template>

<style>
.title {
    font-weight: 600;
    font-size: 100px;
}

.describe {
    font-weight: 200;
}

.box {
    width: 70px;
    height: 400px;
    /* background: #aaa; */
}

.cover-fit {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.box {
    width: 70px;
    height: 400px;
    /* background: #aaa; */
    overflow: hidden;
}

img {
    transition: .5s;
}

.box:hover img {
    transform: scale(1.2);
}

.cover-fit {
    width: 100%;
    height: 100%;
    object-fit: cover;
}


.container .columns {
    float: left;
    display: inline;
    margin-left: 1.25%;
    margin-right: 1.25%;
}

.inner {
    position: relative;
    z-index: 1;
    text-align: left;
    max-width: 1500px;
}

.header-carousel-item {
    height: 450px;
}

.bg-cover {
    background-size: cover;
    background-position: center center;
}

.carousel-caption {
    background-color: rgba(255, 255, 255, 0.5);
}

@media (min-width: 768px) and (max-width: 991.98px) {
    .text-md-light {
        color: #fff;
    }
}
</style>

<script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF" crossorigin="anonymous"></script>



<script>
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
'use strict';
window.addEventListener('load', function() {
// Fetch all the forms we want to apply custom Bootstrap validation styles to
var forms = document.getElementsByClassName('needs-validation');
// Loop over them and prevent submission
var validation = Array.prototype.filter.call(forms, function(form) {
    form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            }
    form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();


import Fog from 'vanta/src/vanta.fog.js'                    
import * as THREE from 'three'

export default {
    mounted() {
        this.vantaEffect = Fog({
            el: this.$refs.vantaRef,
            THREE: THREE
        })
        this.vantaEffect.setOptions({
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            highlightColor: 0x969beb,
            midtoneColor: 0xac5330,
            lowlightColor: 0xdc3232,
            baseColor: 0xded4d4,
            speed: 2.40,
            zoom: 1.30
        })
    },
    beforeDestroy() {
        if(this.vantaEffect){
            this.vantaEffect.destory()
        }
    },
    name: 'Navbar',
    methods: {
        signout() {
            const vm = this;
            const url = `${process.env.APIPATH}/logout`;
            // 登出的路徑
            this.$http.post(url).then((rs) => {
                console.log(rs.data.success);
                if (rs.data.success) {
                    vm.$router.push('/signin')
                }
            })
            // 登出後就會跳到登入的路徑
        }
    },
}






                    </script>


