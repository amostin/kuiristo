<template>
  <div class="page-wrapper">
    <h1 class="recipes-page-title">Page des Recettes</h1>
    <router-link
      class="create-recipe-btn"
      :to="{ name: 'addrecipe' }"
    >
      Ajouter une recette
    </router-link>
    <!-- <recipe-list class="recipe-list"></recipe-list> -->
    <!-- <add-recipe v-if="networkOnLine"></add-recipe> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
// import RecipeList from '@/components/RecipeList'
// import AddRecipe from '@/components/AddRecipe'

export default {
  // components: { RecipeList, AddRecipe },
  computed: mapState('app', ['networkOnLine'])
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.recipes-page-title {
  text-align: center;
  margin-bottom: 60px;
}

// .recipe-list {
//   margin: 20px 0;
// }

.create-recipe-btn {
  cursor: pointer;
  padding: 5px 10px;
  border: 1px solid;
  display: inline-block;
  border-radius: 3px;
  margin-left: 10px;
  border-color: #2c3e50;

  &.disabled {
    pointer-events: none;
    background-color: #aaa;
  }

  &:hover {
    color: $vue-color;
    border-color: $vue-color;
  }
}
</style>