<template>
  <h1>Here is the sign up form to take part of the Uaenas</h1>
  <form>
    <label>Username:</label>
    <input type="text" required v-model="username">

    <label>Password:</label>
    <input type="password" required v-model="password">

    <label>Repeat Password:</label>
    <input type="password" required v-model="requiredPassword">
    <div v-if="passwordError" class="error">{{ this.passwordError }}</div>

    <label>Email:</label>
    <input type="email" required v-model="email">

    <label>Fan Level:</label>
    <select v-model="fan">
      <option value="new">New Fan</option>
      <option value="casual">Casual Fan</option>
      <option value="die-hard">Die-Hard Fan</option>
    </select>

    <div class="news">
      <input type="checkbox" v-model="news">
      <label>Do you want to receive the latest deals and news about IU and her merchandise?</label>
    </div>

    <div class="submit">
      <button>Create Fan Account</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "Signup.vue",
  data(){
    return{
      username:'',
      password:'',
      requiredPassword:'',
      email:'',
      fan:'new',
      news:'false',
      passwordError: ''
    }
  },
  methods: {
    passwordConfig(){
      if (this.password.length <= 5){
        this.passwordError = "*Password must be at least 6 characters long";
      }
    }
  }
}
</script>

<style scoped>
  form {
    max-width:550px;
    margin: 30px auto;
    background: rgb(231, 149, 218);
    text-align: left;
    padding: 40px;
    border-radius: 10px;
  }
  label {
    color: rgb(48, 45, 45);
    display:inline-block;
    margin: 25px 0 15px;
    font-size:15px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
  }
  input, select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555
  }
  input[type="checkbox"] {
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0 ;
    position: relative;
    top: 1px;
  }
  button {
    background:rgb(248, 248, 129);
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: rgb(231, 149, 218);
    border-radius:20px;
  }
  .submit {
    text-align: center;
  }
  .error {
    color: red;
    margin-top: 10px;
    font-size: 0.9em;
    font-weight: bold;
  }
</style>