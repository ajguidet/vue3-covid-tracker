<template>
  <section>
    <h2>Vue 3 test with suspense</h2>
    <Suspense class="content">
      <template #default>
        <DataGetter />
      </template>
      <template #fallback>
        <span>Loading...</span>
      </template>
    </Suspense>
  </section>
</template>

<script>
import DataGetter from './components/DataGetter.vue'

export default {
  name: 'App',
  components: {
    DataGetter
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-align: center;
}
h2 {
  margin: 30px 0;
}
.content {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
}
</style>