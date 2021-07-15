<template>
  <header class="navbar" :class="{ offline: !networkOnLine }">
    <router-link to="/home">
      <img alt="logo-kuiristo" class="logo" src="@/assets/img/kuiristo.svg" />
      <span class="site-name title-desktop">Kuiristo</span>
      <span class="site-name title-mobile">Kuiristo</span>
    </router-link>
    <div class="links">
      <nav class="nav-links">
        <div class="nav-item">
          <router-link to="/products" class="can-hide">Aliments</router-link>
        </div>
        <div class="nav-item">
          <router-link to="/recipes" class="can-hide">Recettes</router-link>
        </div>
        <div class="nav-item">
          <router-link to="/shoppingList" class="can-hide"
            >Liste de courses</router-link
          >
        </div>
        <div class="nav-item">
          <router-link to="/inventory" class="can-hide">Inventaire</router-link>
        </div>
        <div v-if="!isUserLoggedIn && networkOnLine" class="nav-item">
          <router-link to="/login" class="can-hide">Se connecter</router-link>
        </div>
        <div
          v-if="isUserLoggedIn && networkOnLine"
          class="nav-item"
          @click="logout"
        >
          <a class="can-hide">Se déconnecter</a>
        </div>
      </nav>

      <img
        v-if="isUserLoggedIn && networkOnLine"
        class="user-picture can-hide"
        :src="user.photoURL"
        alt="Avatar"
      />

      <div class="menu-btn-container" @click="sideBar = !sideBar">
        <div class="menu-btn">
          <img
            src="@/assets/img/burger.png"
            alt="hamburger-menu"
            class="logo"
          />
        </div>
      </div>
      <div v-if="!networkOnLine" class="nav-item offline-label">Hors-ligne</div>
    </div>

    <!-- <div v-if="!sideBar"> -->
    <div>
      <div
        class="sidebar-items-container"
        :class="{
          close: !sideBar,
          'delayed-last': !sideBar,
          open: sideBar,
          'delayed-first': sideBar,
        }"
      >
        <div class="sidebar-items">
          Aliments
        </div>
      </div>
      <div
        class="sidebar-items-container"
        :class="{
          close: !sideBar,
          'delayed-fourth': !sideBar,
          open: sideBar,
          'delayed-second': sideBar,
        }"
      >
        <div class="sidebar-items">
          Recettes
        </div>
      </div>
      <div
        class="sidebar-items-container delayed-third"
        :class="{ close: !sideBar, open: sideBar }"
      >
        <div class="sidebar-items">
          Liste de courses
        </div>
      </div>
      <div
        class="sidebar-items-container"
        :class="{
          close: !sideBar,
          'delayed-second': !sideBar,
          open: sideBar,
          'delayed-fourth': sideBar,
        }"
      >
        <div class="sidebar-items">
          Inventaire
        </div>
      </div>
      <div
        class="sidebar-items-container"
        :class="{
          close: !sideBar,
          'delayed-first': !sideBar,
          open: sideBar,
          'delayed-last': sideBar,
        }"
      >
        <div class="sidebar-items">
          Se déconnecter
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import firebase from "firebase/app";
import { mapGetters, mapState } from "vuex";

export default {
  data() {
    return {
      sideBar: false,
    };
  },
  computed: {
    ...mapGetters("authentication", ["isUserLoggedIn"]),
    ...mapState("authentication", ["user"]),
    ...mapState("app", ["networkOnLine"]),
  },
  methods: {
    async logout() {
      await firebase.auth().signOut();
    },
    // showSideBar() {
    //   console.log("on va montrer la sidebar");
    //   this.sideBar = !this.sideBar;
    // },
  },
};
</script>

<style lang="scss" scoped>
@import "@/theme/variables.scss";

.navbar {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;
  right: 0;
  height: $navbar-height;
  background-color: $navbar-color;
  // commenter ces 4 lignes pour étendre entièrement la navbar
  box-sizing: border-box;
  border-bottom: 1px solid #eaecef;
  padding: 0.7rem 1.5rem;
  line-height: 2.2rem;

  a {
    display: flex;
    align-items: center;
  }

  .title-desktop {
    display: inline;
  }

  .title-mobile {
    display: none;
  }

  @media (max-width: 725px) {
    padding: 0.7rem 0.7rem;

    .can-hide {
      display: none;
    }

    .title-desktop {
      display: none;
    }

    .title-mobile {
      display: block;
    }
  }

  .site-name {
    font-size: 1.3rem;
    font-weight: 600;
    color: #2c3e50;
    position: relative;
  }

  .logo {
    height: 24px;
    padding-right: 8px;
  }

  .links {
    padding-left: 1.5rem;
    box-sizing: border-box;
    white-space: nowrap;
    font-size: 0.9rem;
    position: absolute;
    right: 1.5rem;
    top: 0.7rem;
    display: flex;

    .menu-btn-container {
      display: flex;
      justify-content: flex-end;
    }

    .menu-btn {
      cursor: pointer;
      // padding: 0px 10px;
      // border: 1px solid;
      display: inline-block;
      // border-radius: 3px;
      // margin-left: 10px;
      // border-color: #2c3e50;

      @media screen and (min-width: 725px) {
        display: none;
      }

      &:hover {
        color: $vue-color;
        border-color: $vue-color;
      }
    }

    .nav-links {
      display: flex;
      align-items: center;
      justify-content: center;

      .nav-item {
        position: relative;
        display: inline-block;
        margin-left: 1.5rem;
        line-height: 2.2rem;

        &:first-child {
          margin-left: 0;
        }

        a {
          font-weight: 500;
          font-size: 0.9rem;
          text-decoration: none;
          color: $navbar-link-color;
          border-color: #2c3e50;
          line-height: 1.4rem;
          display: inline-block;
          cursor: pointer;
        }

        @mixin activatedLink() {
          margin-bottom: -2px;
          border-bottom: 2px solid $vue-color;
        }

        .router-link-active {
          @include activatedLink;
        }

        @media (max-width: 725px) {
          .can-hide {
            display: none;
          }
        }

        @media (hover) {
          :hover {
            @include activatedLink;
          }
        }
      }
    }
  }

  &.offline {
    background: $navbar-offline-color;
    .links .nav-links .nav-item a,
    .site-name {
      color: white;
    }
  }

  .user-picture {
    max-height: 32px;
    margin-left: 1.5rem;
    border-radius: 50%;
  }

  .offline-label {
    padding: 0px 10px;
    border: 1px solid white;
    border-radius: 5px;
    color: white;
    margin-left: 1.5rem;
  }
}

.sidebar-items-container {
  display: flex;
  flex-direction: row-reverse;
  // align-items: center;

  .sidebar-items {
    display: none;
    // background-color: $navbar-color;
    // padding: 0% 10% 0% 10%;
    // border: 1px solid black;
    // border-radius: 30px;
    // margin-top: 1%;
    // // height: 2%;
    // width: 20%;
    // text-align: center;
    // // align-items: center;
    // // justify-content: center;
    // box-shadow: 0px 0px 10px black;
  }

  @media screen and (max-width: 725px) {
    .sidebar-items {
      display: block;
      background-color: $navbar-color;
      padding: 0% 10% 0% 10%;
      border: 1px solid black;
      border-radius: 30px;
      margin-top: 1%;
      // height: 2%;
      width: 120px;
      text-align: center;
      // align-items: center;
      // justify-content: center;
      box-shadow: 0px 0px 10px black;
      cursor: pointer;
      // animation: mymove 2s ease-in-out;
      // transform: scale(100%, 0%);
    }
    // @keyframes mymove {
    //   from {left: 600px;}
    //   to {left: 0px;}
    // }
  }
}

.close {
  transform-origin: right;
  transform: scale(0%, 0%);
  // transform: translateX(-300px);
  transition: 1s transform cubic-bezier(0, 0.12, 0.14, 1);
}

.open {
  transform-origin: right;
  transform: scale(100%, 100%);
  // transform: translateX(-300px);
  transition: 1s transform cubic-bezier(0, 0.12, 0.14, 1);
}

.delayed-first {
  transition-delay: 100ms;
  transition-property: transform;
}
.delayed-second {
  transition-delay: 200ms;
  transition-property: transform;
}
.delayed-third {
  transition-delay: 300ms;
  transition-property: transform;
}
.delayed-fourth {
  transition-delay: 400ms;
  transition-property: transform;
}
.delayed-last {
  transition-delay: 500ms;
  transition-property: transform;
}
</style>
