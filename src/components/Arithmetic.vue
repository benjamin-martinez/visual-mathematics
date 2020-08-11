<template>
 <div class="page">

    <h2>Visual Arithmetic</h2>
   
   Please enter 2 operands as well as the operation to be performed on them.
           <br><br>
            <div class="arithmetic-input">
                <v-text-field type="number" outlined label="Operand 1" v-model="operand1"></v-text-field>

                <v-btn-toggle color="blue" mandatory v-model="operator">
                    <v-btn>+</v-btn>
                    <v-btn>-</v-btn>
                    <v-btn>×</v-btn> <!-- Alt-code 0215 -->
                    <v-btn>÷</v-btn> <!-- Alt-code 0247 -->
                </v-btn-toggle>
                <br><br>
                <v-text-field type="number" outlined label="Operand 2" v-model="operand2"></v-text-field>
            </div> <!--  -->
            
            <br>
            <v-btn :click="visualizationBegun = true">Begin Visualization</v-btn>

            {{ operand1 }}
            {{ operand2 }}    
            {{ operator }}
            {{ visualizationBegun }}
            <div v-if="visualizationBegun" class="visualization-board">
                <div class="operand1-display">
                    <div v-for="n in operand1" class="operand1-unit">

                    </div>
                </div>
2
                <div class="operand2-display">
                    <div v-for="n in operand2" class="operand2-unit">

                    </div>
                </div>

            </div>
            3
 </div>
</template>

<script>
    export default {
        name: 'Addition',
        data: function () {
            return {
                operand1: null,
                operand2: null,
                operator: null,
                visualizationBegun: false
            }
        },
        methods: {

            submit() {

               

            },

            toggleBoard() {
                if (this.visualizationBegun == false)
                    this.visualizationBegun = true
            },

            updateTermsArray() {
               
            },

            beginCalculating() {

            },

            calculateAddition() {
                
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


.operand1-unit {
    margin: 20px;
    padding: 2px;
    background: #f90;
    width: 10px;
    height: 10px;
    border-radius: 50%;
}

.operand2-unit {
    margin: 20px;
    padding: 2px;
    background: #6a2;
    width: 10px;
    height: 10px;
    border-radius: 50%;
}
</style>