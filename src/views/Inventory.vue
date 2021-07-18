<template>
  <div class="page-wrapper">
    <h1 class="inventory-page-title">Inventaire</h1>
    <inventory-list class="inventory-list"></inventory-list>
    <add-inventory v-if="networkOnLine"></add-inventory>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import InventoryList from '@/components/InventoryList'
import AddInventory from '@/components/AddInventory'

export default {
  components: { InventoryList, AddInventory },
  computed: mapState('app', ['networkOnLine'])
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.inventory-page-title {
  text-align: center;
  margin-bottom: 60px;
}

.inventory-list {
  margin: 20px 0;
}
</style>
