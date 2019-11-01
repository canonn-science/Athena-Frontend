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
import csTable from './components/CsTable'
import fmTable from './components/FmTable'
import gvTable from './components/GvTable'
import gyTable from './components/GyTable'
import lsTable from './components/LsTable'

export default {
  name: 'Geology',
  data() {
    return {
      tabMapOptions: [
        { label: 'Crystalline Shards', key: 'cs', table: csTable },
        { label: 'Fumaroles', key: 'fm', table: fmTable },
        { label: 'Gas Vents', key: 'gv', table: gvTable },
        { label: 'Geysers', key: 'gy', table: gyTable },
        { label: 'Lava Spouts', key: 'ls', table: lsTable }
      ],
      activeName: 'cs'
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
