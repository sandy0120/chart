<template>
  <div class="list">
    <el-table :data="arr" style="width: 100%" @row-click="handdleRow">
      <el-table-column :label="$t('area')">
        <template #default="scope">
          {{ lang === 'ch' ? scope.row.sarea : scope.row.sareaen }}
        </template>
      </el-table-column>
      <el-table-column :label="$t('site')">
        <template #default="scope">
          {{ lang === 'ch' ? scope.row.sna : scope.row.snaen }}
        </template>
      </el-table-column>
      <el-table-column :label="$t('addr')">
        <template #default="scope">
          {{ lang === 'ch' ? scope.row.ar : scope.row.aren }}
        </template>
      </el-table-column>
      <el-table-column prop="sbi" :label="$t('sbi')" sortable>
      </el-table-column>
      <el-table-column prop="tot" :label="$t('tot')" sortable>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex'

export default {
  name: 'Bike List',
  computed: {
    ...mapGetters({
      lang: 'app/lang'
    })
  },
  props: ['arr'],
  setup(props: any, { emit }: any) {
    const handdleRow = (row: any) => {
      emit('getSnoChart', {
        sbi: Number(row.sbi),
        tot: Number(row.tot),
        lat: Number(row.lat),
        lng: Number(row.lng),
        sna: row.sna,
        snaen: row.snaen
      })
    }
    return {
      handdleRow
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep {
  .el-table td,
  .el-table th {
    text-align: center;
  }
  .el-table .cell {
    word-wrap: break-word;
    word-break: normal;
  }
}
</style>
