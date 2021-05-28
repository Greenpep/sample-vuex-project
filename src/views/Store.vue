<template>
  <h1>Store</h1>
  <h2>Here are the IU songs that are currently in store</h2>
  <ul>
    <li v-for="product in $store.state.products">
      <img :src="product.image">
      <button v-if="product.amount>0" @click="$store.commit('removeItem', product); $store.commit('calculatePrice', product); $store.commit('calculateTotal')">-</button>
      <span class="song">{{ product.song }}</span>
      <button @click="$store.commit('addItem', product); $store.commit('calculatePrice', product); $store.commit('calculateTotal')">+</button>
      <span class="price"> {{ product.price }}.00$</span>
      <span class="amount"> Amount in cart: {{ product.amount }}</span>
    </li>
  </ul>
</template>

<script>

export default {
  name: "Store.vue",
}
</script>

<style scoped>
  ul{
    padding: 0;
    list-style-type: none;
  }

  li{
    margin-right:10px;
    margin-top: 10px;
    padding: 20px;
    background: #f3cdcd;
  }

  .price{
    font-weight: bold;
    color: #cd90ff;
    display: block;
  }

  img{
    width: 100px;
    height: 100px;
    float: left;
    position: relative;
    bottom: 17px;
  }
</style>