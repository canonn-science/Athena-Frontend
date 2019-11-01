<template>
  <div class="tab-container">
    <el-tabs v-model="activeName" style="margin-top:15px;" type="border-card">
      <el-tab-pane v-for="item in tabMapOptions" :key="item.key" :label="item.label" :name="item.key">
        <component :is="item.table" v-if="activeName==item.key" :type="item.key" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import btTable from './components/BtTable'
import gbTable from './components/GbTable'
import grTable from './components/GrTable'
import gsTable from './components/GsTable'

export default {
  name: 'Guardian',
  data() {
    return {
      tabMapOptions: [
        { label: 'Brain Trees', key: 'bt', table: btTable },
        { label: 'Guardian Beacons', key: 'gb', table: gbTable },
        { label: 'Guardian Ruins', key: 'gr', table: grTable },
        { label: 'Guardian Structures', key: 'gs', table: gsTable }
      ],
      activeName: 'bt'
    }
  },
  watch: {
    activeName(val) {
      this.$router.push(`${this.$route.path}?tab=${val}`)
    }
  },
  created() {
    // init the default selected tab
    const tab = this.$route.query.tab
    if (tab) {
      this.activeName = tab
    }
  }
}
</script>

<style scoped>
  .tab-container {
    margin: 30px;
  }
</style>
