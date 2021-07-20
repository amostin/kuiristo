<template>
  <div class="recipe-container">
    <div class="recipe-title-container">
      <div class="recipe-title btn">
        Ajout d'une recette
      </div>
    </div>
    <div class="recipe-photo-container">
      <div class="recipe-photo btn-photo">
        <img src="../assets/img/camera.png" alt="" />
      </div>
    </div>
    <div class="input-container">
      <input placeholder="Nom de la recette" class="recipe-input" type="text" />
      <div class="mini-input-container">
        <input placeholder="Nb" class="person-number-input" type="number" />
      </div>
    </div>
    <hr />
    <div class="input-container">
      <input placeholder="Ingrédient 1" class="recipe-input" type="text" />
      <div class="mini-input-container">
        <input placeholder="Qt." class="person-number-input" type="text" />
      </div>
    </div>
    <!-- <div ref="addedInputs"></div> -->
    <div class="input-container" v-if="addDiv > 0">
      <input placeholder="Ingrédient 2" class="recipe-input" type="text" />
      <div class="mini-input-container">
        <input placeholder="Qt." class="person-number-input" type="text" />
      </div>
    </div>
    <div class="input-container" v-if="addDiv > 1">
      <input placeholder="Ingrédient 3" class="recipe-input" type="text" />
      <div class="mini-input-container">
        <input placeholder="Qt." class="person-number-input" type="text" />
      </div>
    </div>
    <div class="input-container" v-if="addDiv > 2">
      <input placeholder="Ingrédient 4" class="recipe-input" type="text" />
      <div class="mini-input-container">
        <input placeholder="Qt." class="person-number-input" type="text" />
      </div>
    </div>
    <div class="input-container" v-if="addDiv > 3">
      <input placeholder="Ingrédient 5" class="recipe-input" type="text" />
      <div class="mini-input-container">
        <input placeholder="Qt." class="person-number-input" type="text" />
      </div>
    </div>
    <div class="input-container" v-if="addDiv > 4">
      <input placeholder="Ingrédient 6" class="recipe-input" type="text" />
      <div class="mini-input-container">
        <input placeholder="Qt." class="person-number-input" type="text" />
      </div>
    </div>
    <div class="input-container" v-if="addDiv > 5">
      <input placeholder="Ingrédient 7" class="recipe-input" type="text" />
      <div class="mini-input-container">
        <input placeholder="Qt." class="person-number-input" type="text" />
      </div>
    </div>
    <div class="input-container" v-if="addDiv > 6">
      <input placeholder="Ingrédient 8" class="recipe-input" type="text" />
      <div class="mini-input-container">
        <input placeholder="Qt." class="person-number-input" type="text" />
      </div>
    </div>
    <div class="input-container" v-if="addDiv > 7">
      <input placeholder="Ingrédient 9" class="recipe-input" type="text" />
      <div class="mini-input-container">
        <input placeholder="Qt." class="person-number-input" type="text" />
      </div>
    </div>
    <div class="input-container" v-if="addDiv > 8">
      <input placeholder="Ingrédient 10" class="recipe-input" type="text" />
      <div class="mini-input-container">
        <input placeholder="Qt." class="person-number-input" type="text" />
      </div>
    </div>
    <div class="input-container" v-if="addDiv > 9">
      <input placeholder="Ingrédient 11" class="recipe-input" type="text" />
      <div class="mini-input-container">
        <input placeholder="Qt." class="person-number-input" type="text" />
      </div>
    </div>
    <div class="input-container" v-if="addDiv > 10">
      <input placeholder="Ingrédient 12" class="recipe-input" type="text" />
      <div class="mini-input-container">
        <input placeholder="Qt." class="person-number-input" type="text" />
      </div>
    </div>
    <div class="input-container" v-if="addDiv > 11">
      <input placeholder="Ingrédient 13" class="recipe-input" type="text" />
      <div class="mini-input-container">
        <input placeholder="Qt." class="person-number-input" type="text" />
      </div>
    </div>
    <div class="input-container" v-if="addDiv > 12">
      <input placeholder="Ingrédient 14" class="recipe-input" type="text" />
      <div class="mini-input-container">
        <input placeholder="Qt." class="person-number-input" type="text" />
      </div>
    </div>
    <div class="input-container" v-if="addDiv > 13">
      <input placeholder="Ingrédient 15" class="recipe-input" type="text" />
      <div class="mini-input-container">
        <input placeholder="Qt." class="person-number-input" type="text" />
      </div>
    </div>
    <div class="input-container" v-if="addDiv > 14">
      <input placeholder="Ingrédient 16" class="recipe-input" type="text" />
      <div class="mini-input-container">
        <input placeholder="Qt." class="person-number-input" type="text" />
      </div>
    </div>
    <div class="input-container" v-if="addDiv > 15">
      <input placeholder="Ingrédient 17" class="recipe-input" type="text" />
      <div class="mini-input-container">
        <input placeholder="Qt." class="person-number-input" type="text" />
      </div>
    </div>
    <div class="input-container" v-if="addDiv > 16">
      <input placeholder="Ingrédient 18" class="recipe-input" type="text" />
      <div class="mini-input-container">
        <input placeholder="Qt." class="person-number-input" type="text" />
      </div>
    </div>
    <div class="input-container" v-if="addDiv > 17">
      <input placeholder="Ingrédient 19" class="recipe-input" type="text" />
      <div class="mini-input-container">
        <input placeholder="Qt." class="person-number-input" type="text" />
      </div>
    </div>
    <div class="add-ingredient btn" @click="showDiv">
      Ajouter un ingrédient
    </div>
    <hr />
    <div class="input-container">
      <textarea placeholder="Étape 1" class="recipe-textarea" type="text" />
    </div>
    <div class="input-container" v-if="addTextarea > 0">
      <textarea placeholder="Étape 2" class="recipe-textarea" type="text" />
    </div>
    <div class="input-container" v-if="addTextarea > 1">
      <textarea placeholder="Étape 3" class="recipe-textarea" type="text" />
    </div>
    <div class="input-container" v-if="addTextarea > 2">
      <textarea placeholder="Étape 4" class="recipe-textarea" type="text" />
    </div>
    <div class="input-container" v-if="addTextarea > 3">
      <textarea placeholder="Étape 5" class="recipe-textarea" type="text" />
    </div>
    <div class="input-container" v-if="addTextarea > 4">
      <textarea placeholder="Étape 6" class="recipe-textarea" type="text" />
    </div>
    <div class="input-container" v-if="addTextarea > 5">
      <textarea placeholder="Étape 7" class="recipe-textarea" type="text" />
    </div>
    <div class="input-container" v-if="addTextarea > 6">
      <textarea placeholder="Étape 8" class="recipe-textarea" type="text" />
    </div>
    <div class="input-container" v-if="addTextarea > 7">
      <textarea placeholder="Étape 9" class="recipe-textarea" type="text" />
    </div>
    <div class="input-container" v-if="addTextarea > 8">
      <textarea placeholder="Étape 10" class="recipe-textarea" type="text" />
    </div>
    <div class="input-container" v-if="addTextarea > 9">
      <textarea placeholder="Étape 11" class="recipe-textarea" type="text" />
    </div>
    <div class="input-container" v-if="addTextarea > 10">
      <textarea placeholder="Étape 12" class="recipe-textarea" type="text" />
    </div>
    <div class="input-container" v-if="addTextarea > 11">
      <textarea placeholder="Étape 13" class="recipe-textarea" type="text" />
    </div>
    <div class="input-container" v-if="addTextarea > 12">
      <textarea placeholder="Étape 14" class="recipe-textarea" type="text" />
    </div>
    <div class="input-container" v-if="addTextarea > 13">
      <textarea placeholder="Étape 15" class="recipe-textarea" type="text" />
    </div>
    <div class="input-container" v-if="addTextarea > 14">
      <textarea placeholder="Étape 16" class="recipe-textarea" type="text" />
    </div>
    <div class="input-container" v-if="addTextarea > 15">
      <textarea placeholder="Étape 17" class="recipe-textarea" type="text" />
    </div>
    <div class="input-container" v-if="addTextarea > 16">
      <textarea placeholder="Étape 18" class="recipe-textarea" type="text" />
    </div>
    <div class="input-container" v-if="addTextarea > 17">
      <textarea placeholder="Étape 19" class="recipe-textarea" type="text" />
    </div>
    <div class="input-container" v-if="addTextarea > 18">
      <textarea placeholder="Étape 20" class="recipe-textarea" type="text" />
    </div>
    <div class="input-container" v-if="addTextarea > 19">
      <textarea placeholder="Étape 21" class="recipe-textarea" type="text" />
    </div>
    <div class="input-container" v-if="addTextarea > 20">
      <textarea placeholder="Étape 22" class="recipe-textarea" type="text" />
    </div>
    <div class="input-container" v-if="addTextarea > 21">
      <textarea placeholder="Étape 23" class="recipe-textarea" type="text" />
    </div>
    <div class="input-container" v-if="addTextarea > 22">
      <textarea placeholder="Étape 24" class="recipe-textarea" type="text" />
    </div>
    <div class="input-container" v-if="addTextarea > 23">
      <textarea placeholder="Étape 25" class="recipe-textarea" type="text" />
    </div>
    <div class="add-ingredient btn" @click="showTextarea">
      Ajouter une étape
    </div>
    <hr />

    <div
      :class="{ disabled: productCreationPending }"
      class="create-recipe-btn btn"
    >
      Ajouter la recette
    </div>
    <!-- <button>
      <span>Ajouter la recette</span>
    </button> -->
  </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      addDiv: 0,
      addTextarea: 0,
    };
  },
  computed: mapState("products", [
    "productNameToCreate",
    "productCreationPending",
  ]),
  methods: {
    ...mapMutations("products", ["setProductNameToCreate"]),
    ...mapActions("products", ["triggerAddProductAction"]),
    showDiv() {
      this.addDiv += 1;
      // console.log(this.addDiv);
    },
    showTextarea() {
      this.addTextarea += 1;
      // this.$refs.addedInputs.innerHTML += `
      //   <div class="input-container">
      //     <textarea placeholder="Étape 1" class="recipe-textarea" type="text" ></textarea>
      //   </div>
      // `;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/theme/variables.scss";

.recipe-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .recipe-title-container {
    // max-width: 100%;
    // height: auto;
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
      // height: 100%;
      width: 50%;
      padding: 5px;
      text-align: center;
    }
  }
  .recipe-photo-container {
    // max-width: 100%;
    // height: auto;
    // background-image: url("../assets/img/food-rainbow.jpg");
    min-height: 5em;
    width: 100%;
    max-width: 700px;
    // background-attachment: fixed;
    // background-position: center;
    // background-repeat: no-repeat;
    // background-size: cover;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .recipe-photo {
      cursor: pointer;
      background-color: $navbar-color;
      // border-radius: 50%;
      font-weight: bold;
      // height: 100%;
      width: 8vw;
      min-width: 50px;
      // max-width: 80px;
      padding: 2vw;
      text-align: center;

      img {
        width: 70%;
      }
    }
  }
  .input-container {
    display: flex;

    .recipe-input {
      width: 100%;
      min-width: 150px;
      padding: 5px;
      border: 1px solid;
      border-color: #2c3e50;
      border-radius: 3px;
      margin: 10px 0px 10px 0px;
      outline: none;
      font: inherit;
      box-shadow: 5px 5px 20px rgb(81, 139, 47);
      // font-size: 5vw; // font responsive
    }

    .recipe-textarea {
      width: 40vw;
      min-width: 150px;
      padding: 5px;
      border: 1px solid;
      border-color: #2c3e50;
      border-radius: 3px;
      margin: 10px 0px 10px 0px;
      outline: none;
      font: inherit;
      box-shadow: 5px 5px 20px rgb(81, 139, 47);
    }

    .mini-input-container {
      display: flex;
      flex-flow: row-reverse wrap;

      .person-number-input {
        width: 40%;
        min-width: 10px;
        padding: 5px;
        border: 1px solid;
        border-color: #2c3e50;
        border-radius: 3px;
        margin: 10px 0px 10px 0px;
        outline: none;
        font: inherit;
        box-shadow: 5px 5px 20px rgb(81, 139, 47);
      }
    }
  }

  hr {
    width: 80%;
    max-width: 700px;
  }

  .add-ingredient {
    cursor: pointer;
    text-align: center;
    width: 70%;
    max-width: 700px;
    padding: 5px;
    border: 1px solid;
    border-color: #2c3e50;
    border-radius: 3px;
    margin: 10px 0px 10px 0px;

    &:after {
      content: "\002B";
      color: black;
      font-weight: bold;
      float: right;
      // margin-left: 5%;
      margin-right: 5%;
    }
  }

  // last component

  .create-recipe-btn {
    cursor: pointer;
    text-align: center;
    width: 40%;
    min-width: 150px;
    padding: 5px;
    border: 1px solid;
    margin: 10px 0px 10px 0px;

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

  .btn-photo {
    border-radius: 20%;
    // line-height: 1.5rem;
    font-weight: 600;
    border: 1px solid #0c8001;
    background-image: linear-gradient(-180deg, #97ff89 0%, #2cc01f 100%);
    box-shadow: 0 1rem 1.25rem 0 rgba(36, 195, 22, 0.5),
      0 -0.25rem 1.5rem rgb(20, 155, 15) inset,
      0 0.75rem 0.5rem rgba(255, 255, 255, 0.4) inset,
      0 0.25rem 0.5rem 0 rgb(75, 207, 70) inset;
  }

  // https://codepen.io/arronhunt/pen/WWOOeO?editors=1100

  button {
    cursor: pointer;
    position: relative;
    padding: 1.5rem 7.5rem;
    border-radius: 3.75rem;
    margin: 10px;
    line-height: 1.5rem;
    font-size: 1rem;
    font-weight: 600;

    border: 1px solid #0c8001;
    background-image: linear-gradient(-180deg, #97ff89 0%, #2cc01f 100%);
    box-shadow: 0 1rem 1.25rem 0 rgba(36, 195, 22, 0.5),
      0 -0.25rem 1.5rem rgb(20, 155, 15) inset,
      0 0.75rem 0.5rem rgba(255, 255, 255, 0.4) inset,
      0 0.25rem 0.5rem 0 rgb(75, 207, 70) inset;
  }

  // button span {
  //   color: transparent;
  //   background-image: linear-gradient(0deg, #ee82da 0%, #fefafd 100%);
  //   -webkit-background-clip: text;
  //   background-clip: text;
  //   filter: drop-shadow(0 2px 2px hsla(290, 100%, 20%, 1));
  // }

  // button::before {
  //   content: "";
  //   display: block;
  //   height: 0.25rem;
  //   position: absolute;
  //   top: 0.5rem;
  //   left: 50%;
  //   transform: translateX(-50%);
  //   width: calc(100% - 7.5rem);
  //   background: #fff;
  //   border-radius: 100%;

  //   opacity: 0.7;
  //   background-image: linear-gradient(
  //     -270deg,
  //     rgba(255, 255, 255, 0) 0%,
  //     #ffffff 20%,
  //     #ffffff 80%,
  //     rgba(255, 255, 255, 0) 100%
  //   );
  // }

  // button::after {
  //   content: "";
  //   display: block;
  //   height: 0.25rem;
  //   position: absolute;
  //   bottom: 0.75rem;
  //   left: 50%;
  //   transform: translateX(-50%);
  //   width: calc(100% - 7.5rem);
  //   background: #fff;
  //   border-radius: 100%;

  //   filter: blur(1px);
  //   opacity: 0.05;
  //   background-image: linear-gradient(
  //     -270deg,
  //     rgba(255, 255, 255, 0) 0%,
  //     #ffffff 20%,
  //     #ffffff 80%,
  //     rgba(255, 255, 255, 0) 100%
  //   );
  // }
}
</style>
