<template>
  <div class="app-container">
    <div class="filter-container">Test</div>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
      style="width: 100%;"
    >
      <el-table-column prop="id" label="ID" align="center" width="80">
        <template slot-scope="scope">{{ scope.row.id }}</template>
      </el-table-column>
      <el-table-column label="System">
        <template slot-scope="scope">{{ scope.row.systemName }}</template>
      </el-table-column>
      <el-table-column label="Body">
        <template slot-scope="scope">{{ scope.row.bodyName }}</template>
      </el-table-column>
      <el-table-column label="CMDR" width="200" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.cmdrName }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Latitude" width="110" align="center">
        <template slot-scope="scope">{{ scope.row.latitude }}</template>
      </el-table-column>
      <el-table-column label="Longitude" width="110" align="center">
        <template slot-scope="scope">{{ scope.row.longitude }}</template>
      </el-table-column>
      <el-table-column label="Type" width="200" align="center">
        <template slot-scope="scope">{{ scope.row.type }}</template>
      </el-table-column>
      <el-table-column label="Client Version" width="200" align="center">
        <template slot-scope="scope">{{ scope.row.clientVersion }}</template>
      </el-table-column>
      <el-table-column class-name="status-col" label="Status" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.reportStatus | statusFilter">{{ scope.row.reportStatus }}</el-tag>
        </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="fetchData" />

  </div>
</template>

<script>
import Pagination from '@/components/Pagination'
import { fetchAPReports } from '@/api/reports/apreports'

export default {
  name: 'APReports',
  components: { Pagination },
  filters: {
    statusFilter(status) {
      const statusMap = {
        accepted: 'success',
        duplicate: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      tablekey: 0,
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20,
        sort: '+id'
      }
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      fetchAPReports().then(response => {
        console.log(response)
        this.list = response
        this.listLoading = false
      })
    }
  }
}
</script>
