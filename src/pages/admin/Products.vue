<template>
  <table>
    <thead>
      <tr>
        <th>#id</th>
        <th>Title</th>
        <th>Description</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products" :key="product.id">
        <td>{{product.id}}</td>
        <td>{{product.title}}</td>
        <td>{{product.description}}</td>
        <td>Action</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core';
export default {
    name: 'ProductsList',
    setup(){
      const products = ref([]);
      onMounted( async () => {
        const res = await fetch('http://localhost:3000/products');
        products.value = await res.json();
      })

      return { products }
    }
}
</script>

<style>

</style>