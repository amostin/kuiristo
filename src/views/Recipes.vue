<template>
  <div class="page-wrapper">
    <div class="recipes-page-title">
      <div class="recipe-title">Liste des Recettes</div>
    </div>
    <!-- 
    <input
      type="text"
      class="search-input"
      placeholder="Chercher une recette..."
    />
    <img
      src="@/assets/img/search.png"
      alt="rechercher une recette"
      class="search-img"
    /> -->

    <router-link :to="{ name: 'addrecipe' }">
      <div class="recipes-list">
        recette 1

        <router-link :to="{ name: 'deleterecipe' }">
          <img
            src="@/assets/img/delete.png"
            alt="supprimer la recette"
            class="recipe-item-delete"
          />
        </router-link>
      </div>
    </router-link>
    <router-link :to="{ name: 'addrecipe' }">
      <div class="recipes-list">
        recette 2

        <router-link :to="{ name: 'deleterecipe' }">
          <img
            src="@/assets/img/delete.png"
            alt="supprimer la recette"
            class="recipe-item-delete"
          />
        </router-link>
      </div>
    </router-link>
    <router-link :to="{ name: 'addrecipe' }">
      <div class="recipes-list">
        recette 3

        <router-link :to="{ name: 'deleterecipe' }">
          <img
            src="@/assets/img/delete.png"
            alt="supprimer la recette"
            class="recipe-item-delete"
          />
        </router-link>
      </div>
    </router-link>
    <router-link :to="{ name: 'addrecipe' }">
      <div class="recipes-list">
        recette 4

        <router-link :to="{ name: 'deleterecipe' }">
          <img
            src="@/assets/img/delete.png"
            alt="supprimer la recette"
            class="recipe-item-delete"
          />
        </router-link>
      </div>
    </router-link>
    <!-- je vais plutot faire une view entière ça va être plus simple jcrois 
      <div class="popup">
      voulez vous supprimer la recette "nom recette" ?
    </div> -->

    <router-link class="create-recipe-btn" :to="{ name: 'addrecipe' }">
      <img
        src="@/assets/img/plus.png"
        alt="créer une nouvelle recette"
        class="plus-img btn"
      />
    </router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState("app", ["networkOnLine"]),
};
</script>

<style lang="scss" scoped>
@import "@/theme/variables.scss";

.recipes-page-title {
  text-align: center;

  background-image: url("../assets/img/food-rainbow-removebg.png");
  min-height: 5em;
  width: 100%;
  max-width: 700px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .recipe-title {
    background-color: $navbar-color;
    border-radius: 5px;
    font-weight: bold;
    width: 50%;
    padding: 5px;
    text-align: center;
  }
}

.search-input {
  width: 70%;
  min-width: 150px;
  padding: 8px;
  border: 1px solid;
  border-color: #2c3e50;
  border-radius: 5%;
  // margin: 10px 0px 10px 0px;
  outline: none;
  font: inherit;
  box-shadow: 5px 5px 20px rgb(81, 139, 47);
}

.search-img {
  cursor: pointer;
  background-color: rgb(207, 207, 207);
  border-radius: 40%;
  box-shadow: 3px 3px 4px #999;
  width: 10%;
  // height: 10%;
  min-width: 30px;
  min-height: 30px;
  max-width: 150px;
  max-height: 150px;
  // padding: 2vw;
  margin: 0px 10px;
}

.recipes-list {
  border-radius: 10px;
  // line-height: 1.5rem;
  font-weight: 600;
  border: 1px solid #0c8001;
  background-image: linear-gradient(-180deg, #97ff89 0%, #2cc01f 100%);
  // box-shadow: 0 1rem 1.25rem 0 rgba(36, 195, 22, 0.5),
  //   0 -0.25rem 1.5rem rgb(20, 155, 15) inset,
  //   0 0.75rem 0.5rem rgba(255, 255, 255, 0.4) inset,
  //   0 0.25rem 0.5rem 0 rgb(75, 207, 70) inset;
  padding: 2.5vw;
  // padding: 5px 50px 5px 5px;
  margin: 5px 0px;

  .recipe-item-delete {
    width: 8vw;
    height: 8vw;
    min-width: 20px;
    min-height: 20px;
    max-width: 100px;
    max-height: 100px;
    padding: 0vw;
    // margin: 0px 0px 0px 60%;

    border-radius: 10%;
    // line-height: 1.5rem;
    // font-weight: 600;
    border: 1px solid #0c8001;
    background-image: linear-gradient(-180deg, #ff6262 0%, #ff9898 100%);
    // box-shadow: 0 1rem 1.25rem 0 rgba(36, 195, 22, 0.5),
    //   0 -0.25rem 1.5rem rgb(20, 155, 15) inset,
    //   0 0.75rem 0.5rem rgba(255, 255, 255, 0.4) inset,
    //   0 0.25rem 0.5rem 0 rgb(75, 207, 70) inset;
  }
}

// .popup {
//   position: absolute;
//   top: 20%;
//   right: 20%;
//   bottom: 50%;
//   left: 20%;
//   border: 1px solid #000000;
//   background-color: #87d48e;
// }

.create-recipe-btn {
  cursor: pointer;
  background-color: rgb(69, 185, 69);
  border-radius: 50%;
  box-shadow: 3px 3px 4px #999;
  position: fixed;
  width: 11vw;
  height: 11vw;
  min-width: 70px;
  min-height: 70px;
  max-width: 100px;
  max-height: 100px;
  bottom: 5vw;
  right: 5vw;

  .plus-img {
    width: 11vw;
    height: 11vw;
    min-width: 70px;
    min-height: 70px;
    max-width: 100px;
    max-height: 100px;
  }

  &.disabled {
    pointer-events: none;
    background-color: #aaa;
  }

  &:hover {
    color: $vue-color;
    border-color: $vue-color;
  }
}

.btn {
  border-radius: 30px;
  line-height: 1.5rem;
  font-weight: 600;
  border: 1px solid #0c8001;
  background-image: linear-gradient(-180deg, #97ff89 0%, #2cc01f 100%);
  box-shadow: 0 1rem 1.25rem 0 rgba(36, 195, 22, 0.5),
    0 -0.25rem 1.5rem rgb(20, 155, 15) inset,
    0 0.75rem 0.5rem rgba(255, 255, 255, 0.4) inset,
    0 0.25rem 0.5rem 0 rgb(75, 207, 70) inset;
}
</style>
