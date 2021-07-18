<template>
  <div class="inventory-item">
    <router-link
      class="inventory-link"
      :to="{ name: 'product', params: { id: data.id } }"
    >
    {{ data.name }}
      <!-- #{{ index }} {{ data.name }} -->
    </router-link>
    <div
      v-if="!disableActions"
      class="delete-btn"
      @click="$emit('deleteProduct', data.id)"
    >
      {{ isProductDeletionPending ? 'suppression en cours...' : 'supprimer' }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
    index: Number,
    isProductDeletionPending: Boolean,
    disableActions: Boolean
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.inventory-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  .inventory-link {
    color: $vue-color;
  }

  .delete-btn {
    cursor: pointer;
    padding: 5px 10px;
    border: 1px solid;
    display: inline-block;
    border-radius: 3px;
    margin-left: 10px;
    color: $danger-color;
    border-color: $danger-color;
  }
}
</style>
