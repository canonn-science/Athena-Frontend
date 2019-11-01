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
import apTable from './components/ApTable'
import bmTable from './components/BmTable'
import fgTable from './components/FgTable'
import twTable from './components/TwTable'

export default {
  name: 'Biology',
  data() {
    return {
      tabMapOptions: [
        { label: 'Amphora Plants', key: 'ap', table: apTable },
        { label: 'Bark Mounds', key: 'bm', table: bmTable },
        { label: 'Fungal Gourds', key: 'fg', table: fgTable },
        { label: 'Tube Worms', key: 'tw', table: twTable }
      ],
      activeName: 'ap'
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
