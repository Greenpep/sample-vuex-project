import { createStore } from 'vuex'
import bbibbi from '../assets/BBIBBI.png'
import palette from '../assets/Palette.png'
import good_day from '../assets/Good Day.png'
import you_and_i from '../assets/YOU&I.jpeg'
import eight from '../assets/eight.jpeg'
import celebrity from '../assets/Celebrity.jpeg'
import blueming from '../assets/Blueming.png'
import friday from '../assets/Friday.jpeg'
import raindrop from '../assets/Raindrop.jpeg'
import dlwlrma from '../assets/dlwlrma.jpeg'
import flu from '../assets/Flu.jpeg'
import nslocb from '../assets/nslocb.jpeg'
import coin from '../assets/Coin.jpeg'
import heart from '../assets/heart.jpeg'

export default createStore({
   state: {
      applause_counter: 0,
      username:'',
      password:'',
      requiredPassword:'',
      email:'',
      fan:'new',
      news:'false',
      passwordError: '',
      products: [
         {song: 'BBIBBI', price: 40, amount: 0, image: bbibbi, total: 0},
         {song: 'Palette', price: 40, amount: 0, image: palette, total: 0},
         {song: 'Good Day', price: 40, amount: 0, image: good_day, total: 0},
         {song: 'YOU&I', price: 40, amount: 0, image: you_and_i, total: 0},
         {song: 'eight', price: 40, amount: 0, image: eight, total: 0},
         {song: 'Celebrity', price: 35, amount: 0, image: celebrity, total: 0},
         {song: 'Blueming', price: 35, amount: 0, image: blueming, total: 0},
         {song: 'Friday', price: 35, amount: 0, image: friday, total: 0},
         {song: 'Raindrop', price: 35, amount: 0, image: raindrop, total: 0},
         {song: 'dlwlrma', price: 35, amount: 0, image: dlwlrma, total: 0},
         {song: 'Flu', price: 35, amount: 0, image: flu, total: 0},
         {song: 'Not Spring, Love, or Cherry Blossoms', price: 35, amount: 0, image: nslocb, total: 0},
         {song: 'Coin', price: 30, amount: 0, image: coin, total: 0},
         {song: 'heart', price: 30, amount: 0, image: heart, total: 0}
      ],
      purchases: [],
      total: 0
   },
   mutations: {
      applause(state){
         state.applause_counter++;
      },
      passwordConfig(state){
         if (state.password.length <= 5){
            state.passwordError = "*Password must be at least 6 characters long";
         }
      },
      addItem(state, product){
         if(!state.purchases.includes(product)){
            state.purchases.push(product);

         }
         product.amount++;
      },
      removeItem(state, product){
         product.amount--;
         if(product.amount == 0){
            const index = state.purchases.indexOf(product);
            state.purchases.splice(index, 1);
         }
      },
      calculatePrice(state, product){
         product.total = product.amount * product.price;
      },
      calculateTotal(state){
         state.total = 0;
         var i;
         for(i = 0; i < state.purchases.length; i++){
            state.total += state.purchases[i].total;
         }
      }
   },
   actions: {

   },
   modules: {
   }
 })
