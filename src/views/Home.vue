<template>
  <h1>
    Welcome to the IU store
  </h1>
  <h2>
    Here is the applause counter for entertainment:
  </h2>
  <div class="block" @click="$store.commit('applause')">
    click to applause
  </div>
  <p>Applause Counter: {{ $store.state.applause_counter }}</p>
</template>

<script>

export default {
  name: "Home.vue",
}

</script>

<style>
  .block{
    font-size: 50px;
    width: 400px;
    border-radius: 20px;
    background: #ffb3b3;
    color: white;
    text-align: center;
    padding: 100px 0;
    margin: 40px auto;
  }
</style>
