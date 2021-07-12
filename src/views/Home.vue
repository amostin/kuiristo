<template>
  <div class="page-wrapper">
    <h1 class="home-page-title">Kuiristo</h1>
    <img alt="logo-kuiristo" class="logo" src="@/assets/img/kuiristo.svg" />

    <a
      rel="noopener"
      class="documentation-link"
      target="_blank"
      href="https://github.com/amostin/kuiristo/wiki"
      >Documentation →</a
    >
  </div>
</template>

<script>

export default {
  head() {
    return {
      title: {
        inner: 'Home'
      },
      meta: [
        {
          name: 'description',
          content: `Kuiristo home page`,
          id: 'desc'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.page-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .logo {
    margin-bottom: 3rem;
  }

  .home-page-title {
    text-align: center;
  }

  .documentation-link {
    display: inline-block;
    font-size: 1.2rem;
    color: #fff;
    background-color: #5d6788;
    padding: 0.8rem 1.6rem;
    border-radius: 4px;
    transition: background-color 0.1s ease;
    box-sizing: border-box;
    text-decoration: none;
    width: fit-content;
    font-weight: 500;
  }
}
</style>
