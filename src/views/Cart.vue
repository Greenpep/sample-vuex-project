<template>
  <h1>Here is your shopping cart</h1>
  <ul>
    <li v-for="item in $store.state.purchases">
      <span class="song">{{ item.song }}</span>
      <span class="amount">Number of items: {{ item.amount }}</span>
      <span class="price">{{ item.total }}.00$</span>
    </li>
  </ul>
  <div class="total">
    Total: {{ $store.state.total }}.00$
  </div>
</template>

<script>
export default {
  name: "Cart.vue"
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
  .song{
    margin-right:100px;
    margin-left:10px;
  }
  .amount{
    margin-right:100px;
    margin-left:10px;
  }
  .price{
    margin-right:10px;
    margin-left:10px;
  }
</style>