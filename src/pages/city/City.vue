<template>
    <div>
        <city-header></city-header>
        <city-search :cities="cities"></city-search>
        <city-list :cities='cities' :hot='hotCities' :letter="letter"></city-list>
        <city-letter :cities="cities"  @change="handleClickChange"></city-letter>
    </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/header'
import CitySearch from './components/search'
import CityList from './components/list'
import CityLetter from './components/Letter'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityLetter
  },
  data () {
    return {
      hotCities: [],
      cities: {},
      letter: ''
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json')
        .then(this.getCityInfoSucc)
    },
    getCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.hotCities = data.hotCities
        this.cities = data.cities
      }
    },
    handleClickChange (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>
