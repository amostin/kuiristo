<template>
  <div>
    <p v-if="products === null" class="infos-label">Loading...</p>
    <p v-if="products && !products.length" class="infos-label">
      Vous n'avez pas encore de produits dans votre liste de courses
    </p>
    <shopping-item
      v-for="(product, index) in products"
      :key="product.id"
      class="shopping-row"
      :index="index"
      :is-product-deletion-pending="isProductDeletionPending(product.id)"
      :disable-actions="!networkOnLine"
      :data="product"
      @deleteProduct="deleteUserProduct"
    ></shopping-item>
  </div>
</template>

<script>
import ShoppingItem from '@/components/ShoppingItem'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  components: { ShoppingItem },
  computed: {
    ...mapGetters('products', ['isProductDeletionPending']),
    ...mapState('products', ['products']),
    ...mapState('app', ['networkOnLine'])
  },
  methods: mapActions('products', ['deleteUserProduct'])
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.infos-label {
  text-align: center;
}

.shopping-row {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 500px;
  margin: 10px auto;
  justify-content: space-between;
}
</style>
