<template>
 <div class="page">

    <h2>Visual Arithmetic</h2>
   <v-text-field type="number" label="Number of terms to be calculated" v-model="numTerms" v-on:keydown="updateTermsArray"></v-text-field>

   You've selected: {{ numTerms }} <br><br>

    
        <div v-if="parseInt(numTerms) > 0">
        Terms:<br>
            <div v-for="term in parseInt(numTerms)" >
                <v-text-field  type="number" v-model="terms[term]" ></v-text-field>
            </div>
        </div>


        <br>
        <v-btn @click="submit()">Submit</v-btn>
        <br>

        <!-- <p >length: {{terms.length}}</p> -->

        <div class="math-board">

        </div>
        

        </br>
        <!-- {{terms}} -->


        <div v-if="boardInitiated" class="demonstration">
            <div v-for="term in terms" :key="term" class="term">
                <div :class="term" >
                    {{ term }}
                    <div v-if="term && parseInt(term) <= 10 ">
                        <div v-for="n in parseInt(term)" :key="n" class="one-circle">
                            
                        </div>
                    </div>
                    <div v-if-else="term && parseInt(term) > 10 ">
                        <div v-for="n in parseInt(term)" :key="n" class="one-circle-g10">
                            
                        </div>
                    </div>
                </div> 
            </div>
        </div>
        size = {{ numTerms }} <br>
        terms = {{ terms }} <br>
        0th term = {{ terms[0] }} <br>
        1st term = {{ terms[1] }}


        <br>
        <v-btn @click="beginCalculating()">Calculate</v-btn>
        <br>
 </div>
</template>

<script>
    export default {
        name: 'Addition',
        data: function () {
            return {
                numTerms: null,
                terms: new Array(),
                displayedTerms: new Array(),
                boardInitiated: false
            }
        },
        methods: {

            submit() {

                if(!this.terms[0])     
                    this.displayedTerms = this.terms.slice[1]
                else {
                   this.terms.length = this.numTerms
                   this.displayedTerms.length = this.numTerms
                   }

                if (this.numTerms && this.terms.length > 0 && !this.boardInitiated)
                    this.toggleBoard();

            },

            toggleBoard() {
                    this.boardInitiated = !this.boardInitiated;
                
            },

            updateTermsArray() {
                if ( parseInt(this.numTerms) < this.terms.length )
                    this.terms.length = parseInt(this.numTerms)
            },

            beginCalculating() {

            },

            calculateAddition() {
                for (x in this.terms)
                {
                    let total = 0

                    if (terms[x])
                        total = total + terms[x]

                }

                // return total
            }

            //Animation methods
        }
    }
</script>



<style lang="scss">

.page {
    margin-left: 15%;
    margin-right: 15%;
    margin-top: 3%;
}

.term {
    display: inline-grid;
    grid-gap: 10%;
}


.one-circle {
    margin: 20px;
    padding: 2px;
    background: #f90;
    width: 10px;
    height: 10px;
    border-radius: 50%;
}

.one-circle-g10 {
    margin: 20px;
    padding: 2px;
    background: #f90;
    width: 10px;
    height: 10px;
    border-radius: 50%;
}
</style>