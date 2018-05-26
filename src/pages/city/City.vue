<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list :cities='cities' :hot='hotCities'></city-list>
        <city-letter :cities="cities"></city-letter>
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
      cities: {}
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
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>
