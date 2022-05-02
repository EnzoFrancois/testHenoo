<template>
 <div class="row">
            <div class="col-2" style="position: fixed;">
                <div class="d-flex flex-column flex-shrink-0" style="min-height: 100vh; margin-left: 12px;">
                    <a class="d-flex align-item-center mb-5" href="maquette">
                        <img src="../assets/logoHenoo.png" alt="Logo" width="250" height="65">
                    </a>
                        <ul class="nav nav-pills flex-column" style="font-size: 17px">
                            <li class="nav-item justify-content-between d-flex">
                                <div class="droite">
                                    <a class="nav-link text-dark stretched-link" href="maquette">
                                        <img src="../assets/icons/house-door-fill.svg">
                                        <strong class="ml-3">Accueil</strong>
                                    </a>
                                </div>
                                <div class="gauche">
                                    <img src="../assets/icons/chevron-right.svg" style="margin-top: 13px;">
                                </div>  
                            </li>
                            <li class="nav-item justify-content-between d-flex">
                                <div class="droite">
                                    <a class="nav-link text-dark stretched-link" href="maquette">
                                        <img src="../assets/icons/megaphone-fill.svg">
                                        <strong class="ml-3">Mise en avant</strong>
                                    </a>
                                </div>
                                <div class="gauche">
                                    <img src="../assets/icons/chevron-right.svg" style="margin-top: 13px;">
                                </div>
                                
                            </li>
                            <li class="nav-item justify-content-between d-flex">
                                <div class="droite">
                                    <a class="nav-link text-dark stretched-link" href="maquette">
                                        <img src="../assets/icons/cart-fill.svg">
                                        <strong class="ml-3">Souscription</strong>
                                        
                                    </a>
                                </div>
                                <div class="gauche">
                                    <img src="../assets/icons/chevron-right.svg" style="margin-top: 13px;">
                                </div>
                                
                            </li>
                            <li class="nav-item justify-content-between d-flex" style="background-color: rgb(255, 234, 202);">
                                <div class="droite">
                                    <a class="nav-link active text-warning stretched-link" href="maquette" style="background-color: rgb(255, 234, 202);">
                                        <img src="../assets/icons/file-text-fill.svg">
                                        <strong class="ml-3">Mes contributions</strong>
                                        
                                    </a>
                                </div>
                                <div class="gauche">
                                    <img src="../assets/icons/chevron-right.svg" style="margin-top: 13px;">
                                </div>
                                
                            </li>
                        </ul>
                        <ul class="dropdown nav nav-pills flex-column " style="margin-top: 305px;">
                            <li class="nav-item" >
                                <a class="nav-link text-dark stretched-link" href="maquette">
                                    <img src="../assets/icons/gear-fill.svg">
                                    <strong class="ml-3" style="font-size: 17px">Paramètres</strong>
                                </a>
                            </li>
                            <li class="nav-item">
                                <div class="card text-center mt-3 text-white bg-warning" style="border-radius: 12px; width: 270px; font-size: 14px ">
                                    <div class="card-body">
                                      <p class="card-text">Mettez en avant le patrimoine via nos différentes offres</p>
                                      <a href="#" class="btn text-warning" style="background-color: white; font-size: 14px">Voir nos offres</a>
                                    </div>
                                  </div>
                            </li>
                            <li class="nav-item mt-5">
                                <ul class="list-unstyled d-flex">
                                    <li class="list-item">
                                        <img src="https://github.com/mdo.png" alt="" width="50" height="50" class="rounded-circle me-2">
                                    </li>
                                    <li class="list-item" style="font-size: 14px">
                                        <strong>Jean-Bernard ALBERT</strong>
                                        jeanbernardalbert@gmail.com
                                    </li>
                                </ul>
                                    
                                    
                                    
                            
                            </li>

                        </ul>
                            
                </div>
            </div>
            <div class="col-2">
                
            </div>
            <div class="col-10">
                <div class="row">
                    <ul class="nav nav-pills mt-3 ml-4">
                        <li class="nav-item">
                          <a class="nav-link text-dark" aria-current="page" href="#">Mes noos</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link text-dark" href="#">Mes anecdotes</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link active text-warning" href="#" style="background-color: rgb(255, 234, 202);border-radius: 12px;">Mes listes</a>
                        </li>
                      </ul>

                </div>

                <div class="row mt-4 ml-4">
                    <div class="container-fluid d-flex" style="margin-left: 3px;">
                        <div class="gauche">
                            <h3><strong>Listes</strong></h3>
                        </div>
                        <div class="droite align-item-end " style="margin-left: 995px;">
                            <img src="../assets/icons/search.svg" style="width: 28px;">
                            <button id="menuDeroulant" type="button" class="btn dropdown-toggle text-warning" style="background-color: rgb(255, 234, 202);border-radius: 12px;" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Ordre alphabétique</button>
                            <button type="button" class="btn bg-warning text-white" style="border-radius: 12px;">
                                <img src="../assets/icons/plus-lg.svg">
                                Créer une liste
                            </button>
                        </div>
                    </div>
                    <hr class="w-100 my-2 ml-3 mr-4" style="border-color: rgba(207, 207, 207, 0.829);">

                    <ul class="nav nav-pills mt-3 ml-2" style="margin-left: 10px;">
                        <li class="nav-item">
                          <a class="nav-link active text-warning"  href="#" style="background-color: rgb(255, 234, 202);border-radius: 12px;">Toutes les listes</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link text-dark" href="#">Mes listes</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link text-dark" href="#" >Listes suivies</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-dark" href="#" >Listes collaboratives</a>
                          </li>
                      </ul>
                    

                </div>


                        <div class="row row-cols-1 row-cols-md-4 g-4">
                        <div class="col">
                            <div class="card mt-3 ml-4 text-white" style="border-radius: 12px; background-color: rgb(72,201,176); width: 320px; height: 365px;">
                                <div class="card-img text-center d-flex flex-wrap-reverse mt-3 ml-3">
                                        <img src="../assets/img/cath1.jpeg" alt="haut-gauche" style="height: 110px; width: 140px; border-radius: 0 0 0 12px;">
                                        <img src="../assets/img/cath2.jpeg" alt="haut-droit" style="height: 110px; width: 140px; border-radius: 0 0 12px 0; ">
                                        <img src="../assets/img/cath3.jpeg" alt="bas-gauche" style="height: 110px; width: 140px; border-radius: 12px 0 0 0;">
                                        <img src="../assets/img/cath4.jpeg" alt="bas-droit" style="height: 110px; width: 140px; border-radius: 0 12px 0 0;">
                                </div>
                                <div style="margin-left: 18px; margin-top: 5px;">
                                    <strong style>Cathédrales de France</strong>
                                    <p>Liste de @Philippe EL</p>
                                </div>
                                
                                <div v-on:click="toggleModale" class="bouton">
                                  
                                  <a href="#" class="btn text-white" style="background-color: rgb(163, 228, 215); margin-left: 195px; border-radius: 12px;"><strong>Partager</strong></a>
                                </div>
                              </div>
                        </div>
                        <div class="col">
                            <div class="card mt-3 ml-4 text-white" style="border-radius: 12px; background-color: rgb(255,197,228); width: 320px; height: 365px;">
                                <div class="card-img text-center d-flex flex-wrap-reverse mt-3 ml-3">
                                        <img src="../assets/img/scul1.jpeg" alt="haut-gauche" style="height: 110px; width: 140px; border-radius: 0 0 0 12px;">
                                        <img src="../assets/img/scul2.jpeg" alt="haut-droit" style="height: 110px; width: 140px; border-radius: 0 0 12px 0; ">
                                        <img src="../assets/img/scul3.jpeg" alt="bas-gauche" style="height: 110px; width: 140px; border-radius: 12px 0 0 0;">
                                        <img src="../assets/img/scul4.jpeg" alt="bas-droit" style="height: 110px; width: 140px; border-radius: 0 12px 0 0;">
                                </div>
                                <div style="margin-left: 18px; margin-top: 5px;">
                                    <strong style>Les statues du monde entier</strong>
                                    <p>Liste de @QuentinStartUp</p>
                                </div>
                                
                                <div v-on:click="toggleModale" class="bouton">
                                  
                                  <a href="#" class="btn text-white" style="background-color: rgb(255, 217, 238); margin-left: 195px ;border-radius: 12px;"><strong>Partager</strong></a>
                                </div>
                              </div>
                        </div>
                        <div class="col">
                            <div class="card mt-3 ml-4 text-white" style="border-radius: 12px; background-color: rgb(187,143,206); width: 320px; height: 365px;">
                                <div class="card-img text-center d-flex flex-wrap-reverse mt-3 ml-3">
                                        <img src="../assets/img/cath1.jpeg" alt="haut-gauche" style="height: 110px; width: 140px; border-radius: 0 0 0 12px;">
                                        <img src="../assets/img/cath2.jpeg" alt="haut-droit" style="height: 110px; width: 140px; border-radius: 0 0 12px 0; ">
                                        <img src="../assets/img/cath3.jpeg" alt="bas-gauche" style="height: 110px; width: 140px; border-radius: 12px 0 0 0;">
                                        <img src="../assets/img/cath4.jpeg" alt="bas-droit" style="height: 110px; width: 140px; border-radius: 0 12px 0 0;">
                                </div>
                                <div style="margin-left: 18px; margin-top: 5px;">
                                    <strong style>Cathédrales de France</strong>
                                    <p>Liste de @Philippe EL</p>
                                </div>
                                
                                <div v-on:click="toggleModale" class="bouton">
                                  
                                  <a href="#" class="btn text-white" style="background-color: rgb(215, 189, 226); margin-left: 195px; border-radius: 12px;"><strong>Partager</strong></a>
                                </div>
                              </div>
                        </div>
                        <div class="col">
                            <div class="card mt-3 ml-4 text-white" style="border-radius: 12px; background-color: rgb(255,197,228); width: 320px; height: 365px;">
                                <div class="card-img text-center d-flex flex-wrap-reverse mt-3 ml-3">
                                        <img src="../assets/img/scul1.jpeg" alt="haut-gauche" style="height: 110px; width: 140px; border-radius: 0 0 0 12px;">
                                        <img src="../assets/img/scul2.jpeg" alt="haut-droit" style="height: 110px; width: 140px; border-radius: 0 0 12px 0; ">
                                        <img src="../assets/img/scul3.jpeg" alt="bas-gauche" style="height: 110px; width: 140px; border-radius: 12px 0 0 0;">
                                        <img src="../assets/img/scul4.jpeg" alt="bas-droit" style="height: 110px; width: 140px; border-radius: 0 12px 0 0;">
                                </div>
                                <div style="margin-left: 18px; margin-top: 5px;">
                                    <strong style>Les statues du monde entier</strong>
                                    <p>Liste de @QuentinStartUp</p>
                                </div>
                                
                                <div v-on:click="toggleModale" class="bouton">
                                  
                                  <a href="#" class="btn text-white" style="background-color: rgb(255, 217, 238); margin-left: 195px ;border-radius: 12px;"><strong>Partager</strong></a>
                                </div>
                              </div>
                        </div>
                        <div class="col">
                            <div class="card mt-5 ml-4 text-white" style="border-radius: 12px; background-color: rgb(255,215,124); width: 320px; height: 365px;">
                                <div class="card-img text-center d-flex flex-wrap-reverse mt-3 ml-3">
                                        <img src="../assets/img/cath1.jpeg" alt="haut-gauche" style="height: 110px; width: 140px; border-radius: 0 0 0 12px;">
                                        <img src="../assets/img/cath2.jpeg" alt="haut-droit" style="height: 110px; width: 140px; border-radius: 0 0 12px 0; ">
                                        <img src="../assets/img/cath3.jpeg" alt="bas-gauche" style="height: 110px; width: 140px; border-radius: 12px 0 0 0;">
                                        <img src="../assets/img/cath4.jpeg" alt="bas-droit" style="height: 110px; width: 140px; border-radius: 0 12px 0 0;">
                                </div>
                                <div style="margin-left: 18px; margin-top: 5px;">
                                    <strong style>Cathédrales de France</strong>
                                    <p>Liste de @Philippe EL</p>
                                </div>
                                
                                <div v-on:click="toggleModale" class="bouton">
                                  
                                  <a href="#" class="btn text-white" style="background-color: rgb(252, 240, 190); margin-left: 195px; border-radius: 12px;"><strong>Partager</strong></a>
                                </div>
                              </div>
                        </div>
                        <div class="col">
                            <div class="card mt-5 ml-4 text-white" style="border-radius: 12px; background-color: rgb(255,197,228); width: 320px; height: 365px;">
                                <div class="card-img text-center d-flex flex-wrap-reverse mt-3 ml-3">
                                        <img src="../assets/img/scul1.jpeg" alt="haut-gauche" style="height: 110px; width: 140px; border-radius: 0 0 0 12px;">
                                        <img src="../assets/img/scul2.jpeg" alt="haut-droit" style="height: 110px; width: 140px; border-radius: 0 0 12px 0; ">
                                        <img src="../assets/img/scul3.jpeg" alt="bas-gauche" style="height: 110px; width: 140px; border-radius: 12px 0 0 0;">
                                        <img src="../assets/img/scul4.jpeg" alt="bas-droit" style="height: 110px; width: 140px; border-radius: 0 12px 0 0;">
                                </div>
                                <div style="margin-left: 18px; margin-top: 5px;">
                                    <strong style>Les statues du monde entier</strong>
                                    <p>Liste de @QuentinStartUp</p>
                                </div>
                                
                                <div v-on:click="toggleModale" class="bouton">
                                  
                                  <a href="#" class="btn text-white" style="background-color: rgb(255, 217, 238); margin-left: 195px ;border-radius: 12px;"><strong>Partager</strong></a>
                                </div>
                              </div>
                        </div>
                        <div class="col">
                            <div class="card mt-5 ml-4 text-white" style="border-radius: 12px; background-color: rgb(72,201,176); width: 320px; height: 365px;">
                                <div class="card-img text-center d-flex flex-wrap-reverse mt-3 ml-3">
                                        <img src="../assets/img/cath1.jpeg" alt="haut-gauche" style="height: 110px; width: 140px; border-radius: 0 0 0 12px;">
                                        <img src="../assets/img/cath2.jpeg" alt="haut-droit" style="height: 110px; width: 140px; border-radius: 0 0 12px 0; ">
                                        <img src="../assets/img/cath3.jpeg" alt="bas-gauche" style="height: 110px; width: 140px; border-radius: 12px 0 0 0;">
                                        <img src="../assets/img/cath4.jpeg" alt="bas-droit" style="height: 110px; width: 140px; border-radius: 0 12px 0 0;">
                                </div>
                                <div style="margin-left: 18px; margin-top: 5px;">
                                    <strong style>Cathédrales de France</strong>
                                    <p>Liste de @Philippe EL</p>
                                </div>
                                
                                <div v-on:click="toggleModale" class="bouton">
                                  
                                  <a href="#" class="btn text-white" style="background-color: rgb(163, 228, 215); margin-left: 195px; border-radius: 12px;"><strong>Partager</strong></a>
                                </div>
                              </div>
                        </div>
                        <div class="col">
                            <div class="card mt-5 ml-4 text-white" style="border-radius: 12px; background-color: rgb(255,197,228); width: 320px; height: 365px;">
                                <div class="card-img text-center d-flex flex-wrap-reverse mt-3 ml-3">
                                        <img src="../assets/img/scul1.jpeg" alt="haut-gauche" style="height: 110px; width: 140px; border-radius: 0 0 0 12px;">
                                        <img src="../assets/img/scul2.jpeg" alt="haut-droit" style="height: 110px; width: 140px; border-radius: 0 0 12px 0; ">
                                        <img src="../assets/img/scul3.jpeg" alt="bas-gauche" style="height: 110px; width: 140px; border-radius: 12px 0 0 0;">
                                        <img src="../assets/img/scul4.jpeg" alt="bas-droit" style="height: 110px; width: 140px; border-radius: 0 12px 0 0;">
                                </div>
                                <div style="margin-left: 18px; margin-top: 5px;">
                                    <strong style>Les statues du monde entier</strong>
                                    <p>Liste de @QuentinStartUp</p>
                                </div>
                                
                                <div v-on:click="toggleModale" class="bouton">
                                  
                                  <a href="#" class="btn text-white" style="background-color: rgb(255, 217, 238); margin-left: 195px ;border-radius: 12px;"><strong>Partager</strong></a>
                                </div>
                              </div>
                        </div>
                        </div>

                        <modale v-bind:revele="revele" v-bind:toggleModale="toggleModale"></modale>
                
            </div>

                       


        </div>
    
</template>
       

    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>

    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>

    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>

<script>

    import Modale from '../components/Modale.vue'

    export default {
        name: 'Contenu',
        data(){
            return {
                revele: false
            }
        },

        components: {
            'modale': Modale
        },

        methods: {
            toggleModale: function() {
                this.revele=!this.revele
            }
        }
    }

</script>

<style scoped>
    .row {
        text-align: initial;
        font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
    .droite strong {
        margin-left: 20px;
    }
    .nav-item strong {
        margin-left: 20px;
    }
    .col-10 {
        margin-left: 345px;
    }
    .card-img{
        margin-left: 17px;
    }

</style>
