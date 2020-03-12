<template>
  <section class="app">
    {{ state.value }}
  </section>
</template>

<script>
import { reactive } from 'vue'
import { onMounted } from 'vue'

const getData = () => {
  return fetch('https://cors-anywhere.herokuapp.com/https://www.worldometers.info/coronavirus/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then(text => {
      return text.text()
    })
    .then(html => {
      var parser = new DOMParser()
      const documentCovid = parser.parseFromString(html, 'text/html')

      const values = documentCovid.querySelectorAll('.maincounter-number')
      return {
        cases: values[0].innerText,
        deaths: values[1].innerText,
        recovered: values[2].innerText
      }
    })
}

export default {
  name: 'App',
  setup () {
    const { cases, deaths, recovered } = getData()
    const state = reactive({
      cases,
      deaths,
      recovered
    })
    console.log(state)
    return { state }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>