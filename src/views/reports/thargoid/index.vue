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
import tbTable from './components/TbTable'
import tsTable from './components/TsTable'

export default {
  name: 'Thargoid',
  data() {
    return {
      tabMapOptions: [
        { label: 'Thargoid Barnacles', key: 'tb', table: tbTable },
        { label: 'Thargoid Structures', key: 'ts', table: tsTable }
      ],
      activeName: 'tb'
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
