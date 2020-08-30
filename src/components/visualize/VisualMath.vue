<template>
    <div>
        <div class="vmath-menu" >

            <div class="vmath-submenu">
                <h4>Elementary Math</h4>
                    <router-link to="/visual-mathematics/arithmetic"><v-btn text>Arithmetic</v-btn></router-link>
                    <router-link to="/visual-mathematics/fractions"><v-btn text>Fractions</v-btn></router-link>
                    <v-btn text disabled>Percentages</v-btn>
                    <v-btn text disabled>Place Value</v-btn>
                    <v-btn text disabled>Negative Numbers</v-btn>
            </div>

            <div class="vmath-submenu">
                <h4>Algebra</h4>
                    <v-btn text disabled>Equation Solving</v-btn>
                    <v-btn text disabled>Polynomials</v-btn>
                    <v-btn text disabled>Simplification</v-btn>
                    <v-btn text disabled>Domain & Range</v-btn>
                    <v-btn text disabled>Matrices</v-btn>
            </div>

            <div class="vmath-submenu">
                <h4>Geometry</h4>
                    <v-btn text disabled>Plane Geometry</v-btn>
                    <v-btn text disabled>Solid Geometry</v-btn>
                    <v-btn text disabled>Geometric Transformations</v-btn>
                    <v-btn text disabled>Moire Patterns</v-btn>
                    <v-btn text disabled>High-Dimensional Geometry</v-btn>
            </div>

            <div class="vmath-submenu">
                <h4>Calculus</h4>
                    <v-btn text disabled>Integrals</v-btn>
                    <v-btn text disabled>Derivatives</v-btn>
                    <v-btn text disabled>Limits</v-btn>
            </div>
        </div>

        <router-view></router-view>
    </div>


</template>

<script>

</script>

<style lang="scss">
    .vmath-menu {
        display: grid;
        grid-gap: 1em;
        grid-template-columns: auto auto auto auto;
        padding: 1%;
        /*background-color: #64B5F6;    same as "blue lighten-2" */
        background-color: lightgrey;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    .vmath-submenu {
        color: black;

        .v-btn {
            color: white;
            text-decoration: none;
        }
    }
</style>