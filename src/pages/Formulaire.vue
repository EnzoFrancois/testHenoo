<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12 text-center p-0 mt-3 mb-2">
                <div class="px-0 pt-4 pb-0 mt-3 mb-3">
                    <form id="form">
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" :aria-valuenow="progression" :style="{width: progression+'%'}" aria-valuemax="100" aria-valuemin="0">{{progression}}%</div>
                        </div> <br>
                        <fieldset id="step1" v-if="currentStep == 1">
                            <h2>Nom de la voiture</h2>
                            <label for="nom_voiture">Nom de la voiture : </label>
                            <input type="text" name="nom_voiture" placeholder="Audi R8, Ford Focus..." v-model="step1.nom_voiture">
                            <input type="button" name="next-step" 
                            class="next-step" value="Suivant" @click.prevent="goToStep(currentStep+1)" />
                        </fieldset>
                        <fieldset id="step2" v-if="currentStep == 2">
                            <h2>Description</h2>
                            <label for="description"> Description de la voiture : </label>
                            <textarea name="description" class="form-control" placeholder="origine, histoire, caractéristiques techniques..." v-model="step2.description"></textarea>
                            <input type="button" name="next-step" 
                            class="next-step" value="Suivant" @click.prevent="goToStep(currentStep+1)"/>
                            <input type="button" name="previous-step" 
                            class="previous-step" 
                            value="Precedent" @click.prevent="goToStep(currentStep-1)"/>
                        </fieldset>
                        <fieldset id="step3" v-if="currentStep == 3">
                            <h2>Tags</h2>
                            <label for="tags">Tags : </label>
                            <input type="text" name="tags" placeholder="sport, campagne, luxe" v-model="step3.tags">
                            <input type="button" name="next-step" 
                            class="next-step" value="Envoyer" @click.prevent="goToStep(currentStep+1)"/>
                            <input type="button" name="previous-step" 
                            class="previous-step" 
                            value="Precedent" @click.prevent="goToStep(currentStep-1)"/>
                        </fieldset>
                        <fieldset>
                            <h2>Rappel des données envoyées</h2>
                            <strong>Nom de voiture : </strong> {{step1.nom_voiture}} <br />
                            <strong>Description : </strong> {{step2.description}} <br />
                            <strong>Tags : </strong> {{step3.tags}} <br />
                            <input type="button" name="previous-step" 
                            class="previous-step" 
                            value="Accueil" @click.prevent="goToStep(1)"/>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'formulaire',
    data() {
        return {
            progression:1,
            currentStep: 1,
            step1: {
                nom_voiture: "",
            },
            step2: {
                description: "",
            },
            step3: {
                tags: [],
            }
        }
    },
    methods: {
        goToStep: function(step) {
            if(this.step1.nom_voiture == "") {
                alert("Veuillez saisir un nom de voiture");
            }
            else if(this.currentStep > step){
                this.currentStep=step;
                this.progression-=33;
            }
            else {
                this.currentStep=step;
                this.progression+=33;
            }
            if(step==1) {
                this.progression=1;
            }
        }
    }
}
</script>

<style scoped>


html {
    height: 100%;
}
h2{
    color: #2F8D46;
}
#form {
    text-align: center;
    position: relative;
    margin-top: 20px;
}
#form fieldset {
    background: white;
    border: 0 none;
    border-radius: 0.5rem;
    box-sizing: border-box;
    width: 100%;
    margin: 0;
    padding-bottom: 20px;
    position: relative
}
.finish {
    text-align: center
}
#form fieldset:not(:first-of-type) {
    display: none
}
#form .previous-step, .next-step {
    width: 100px;
    font-weight: bold;
    color: white;
    border: 0 none;
    border-radius: 0px;
    cursor: pointer;
    padding: 10px 5px;
    margin: 10px 5px 10px 0px;
    float: right
}
.form, .previous-step {
    background: #616161;
}
.form, .next-step {
    background: #2F8D46;
}
#form .previous-step:hover,
#form .previous-step:focus {
    background-color: #000000
}
#form .next-step:hover,
#form .next-step:focus {
    background-color: #2F8D46
}
.text {
    color: #2F8D46;
    font-weight: normal
}

.progress {
    height: 20px
}
.progress-bar {
    background-color: #2F8D46
}

</style>
