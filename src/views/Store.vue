<template>
  <h1>Store</h1>
  <h2>Here are the IU songs that are currently in store</h2>
  <ul>
    <li v-for="product in products">
      <button v-if="product.amount>0" @click="product.amount--">-</button>
      <span class="song">{{ product.song }}</span>
      <button @click="product.amount++">+</button>
      <span class="price"> {{ product.price }}.00$</span>
      <span class="amount"> Amount in cart: {{ product.amount }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Store.vue",

  data(){
    return{
      products: [
        {song: 'BBIBBI', price: 40, amount: 0},
        {song: 'Palette', price: 40, amount: 0},
        {song: 'Good Day', price: 40, amount: 0},
        {song: 'YOU&I', price: 40, amount: 0},
        {song: 'eight', price: 40, amount: 0},
        {song: 'Celebrity', price: 35, amount: 0},
        {song: 'Blueming', price: 35, amount: 0},
        {song: 'Friday', price: 35, amount: 0},
        {song: 'Raindrop', price: 35, amount: 0},
        {song: 'dlwlrma', price: 35, amount: 0},
        {song: 'Flu', price: 35, amount: 0},
        {song: 'Not Spring, Love, or Cherry Blossoms', price: 35, amount: 0},
        {song: 'Coin', price: 30, amount: 0},
        {song: 'heart', price: 30, amount: 0}
      ],
      methods:{
        removeSong(product){
          if(product.amount != 0){
            product.amount--;
          }
        },
        addSong(product){
          product.amount++;
        }
      }
    }
  }
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
</style>