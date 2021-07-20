<template>
  <div class="page-wrapper">
    <div class="popup">
      voulez vous supprimer la recette "nom recette" ?
    </div>

    <div class="btn-container">
      <router-link :to="{ name: 'recipes' }">
        <img
          src="@/assets/img/confirm.png"
          alt="supprimer la recette"
          class="icon"
        />
      </router-link>
      <router-link :to="{ name: 'recipes' }">
        <img
          src="@/assets/img/delete.png"
          alt="supprimer la recette"
          class="icon"
        />
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.popup {
  display: flex;
  justify-content: center;
}

.btn-container {
  display: flex;
  justify-content: center;
  padding: 3vw;

  .icon {
    width: 2vw;
    min-width: 40px;
    padding-left: 5vw;
  }
}
</style>
