<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list></city-list>
        <city-letter></city-letter>
    </div>
</template>

<script>
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
  }
}
</script>
