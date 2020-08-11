<template>
    <div class="page">

        <div class="vis-fractions-page">
            <h2>Visual Fractions Operations</h2>

            Please enter 2 fractions and the operation you'd like to have performed on them.
           <br><br>
            <div class="fraction-input">
                <v-text-field type="number" outlined label="Numerator 1"></v-text-field>
                <v-text-field type="number" outlined label="Denominator 1"></v-text-field>
            </div> <!-- fraction-1 -->

            <v-btn-toggle color="blue" mandatory>
                <v-btn>+</v-btn>
                <v-btn>-</v-btn>
                <v-btn>×</v-btn>
                <v-btn>÷</v-btn>  
            </v-btn-toggle>
            
            <br> <br>

            <div class="fraction-input">
                <v-text-field type="number" outlined label="Numerator 2"></v-text-field>
                <v-text-field type="number" outlined label="Denominator 2"></v-text-field>
            </div> <!-- fraction-2 -->

            
            <br>
            <br>
            <v-btn>Begin Visualization :)</v-btn>
        </div>
            
    </div> <!--page-->

</template>

<script>

</script>

<style lang="scss">
    
    .fraction-input {
        display: grid;
        grid-gap: 1em;
        grid-template-columns: auto auto;
    }

</style>