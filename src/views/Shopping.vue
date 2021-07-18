<template>
  <div class="page-wrapper">
    <h1 class="shopping-page-title">Liste de courses</h1>
    <shopping-list class="shopping-list"></shopping-list>
    <add-shopping v-if="networkOnLine"></add-shopping>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ShoppingList from '@/components/ShoppingList'
import AddShopping from '@/components/AddShopping'

export default {
  components: { ShoppingList, AddShopping },
  computed: mapState('app', ['networkOnLine'])
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.shopping-page-title {
  text-align: center;
  margin-bottom: 60px;
}

.shopping-list {
  margin: 20px 0;
}
</style>
