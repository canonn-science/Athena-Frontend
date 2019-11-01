<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
      style="width: 100%;"
    >
      <el-table-column align="center" prop="id" label="Report ID" width="95">
        <template slot-scope="scope">
          {{ scope.row.id }}
        </template>
      </el-table-column>
      <el-table-column label="System">
        <template slot-scope="scope">
          {{ scope.row.systemName }}
        </template>
      </el-table-column>
      <el-table-column label="Body">
        <template slot-scope="scope">
          {{ scope.row.bodyName }}
        </template>
      </el-table-column>
      <el-table-column label="CMDR" width="200" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.cmdrName }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Latitude" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.latitude }}
        </template>
      </el-table-column>
      <el-table-column label="Longitude" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.longitude }}
        </template>
      </el-table-column>
      <el-table-column label="Type" width="200" align="center">
        <template slot-scope="scope">
          {{ scope.row.type }}
        </template>
      </el-table-column>
      <el-table-column label="Client Version" width="200" align="center">
        <template slot-scope="scope">
          {{ scope.row.clientVersion }}
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="Status" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.reportStatus | statusFilter">{{ scope.row.reportStatus }}</el-tag>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { fetchTBReports } from '@/api/reports/tbreports' // secondary package based on el-pagination

export default {
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
      list: null,
      listLoading: true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      fetchTBReports().then(response => {
        this.list = response
        console.log(response)
        this.listLoading = false
      })
    }
  }
}
</script>
