<template>
  <div>
    <div
      v-for="(data, key, idx) in state"
      :key="idx"
      class="box"
    >
      <p>{{ data }}</p>
      <br>
      <span>{{ translationsDic[key] }}</span>
    </div>
  </div>
</template>

<script>
import { fetchApi } from '../services/index'

const getData = () => {
  return fetchApi('https://cors-anywhere.herokuapp.com/https://www.worldometers.info/coronavirus/')
    .then(html => {
      if (html) {
        const parser = new DOMParser()
        const documentCovid = parser.parseFromString(html, 'text/html')
  
        const values = documentCovid.querySelectorAll('.maincounter-number')

        const table = documentCovid.querySelector('#main_table_countries')

        const tableBodys = documentCovid.querySelectorAll('tbody')

        const tableData = tableBodys[0]
        const tableTotal = tableBodys[1]

        return {
          cases: values[0].innerText,
          deaths: values[1].innerText,
          recovered: values[2].innerText
        }
      }
    })
}

export default {
  name: 'DataGetter',
  async setup () {
    const { cases, deaths, recovered } = await getData()

    return {
      state: {
        cases,
        deaths,
        recovered
      },
      translationsDic: {
        cases: 'Total de casos',
        deaths: 'Muertes',
        recovered: 'Recuperados'
      }
    }
  }
}
</script>

<style>
  .box {
    width: 300px;
    height: 200px;
    margin: 20px auto;
    text-align: center;
  }
  .box p {
    font-size: 3rem;
  }
  .box:first-child p {
    color: turquoise;
  }
  .box:nth-child(2) p {
    color: tomato;
  }
  .box:last-child p {
    color: teal;
  }
  .box span {
    font-size: 1.2rem;
  }
</style>