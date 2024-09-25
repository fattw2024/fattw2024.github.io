<template>
  <div class="program">
    <div v-for="(day, index) in programData" :key="index">
      <div class="date">{{ day.date }}</div>
      <el-table
        :data="day.events"
        border
        style="width: 100%;"
        header-cell-class-name="header"
        :cell-class-name="cellClassName"
        :span-method="spanMethod"
      >
        <el-table-column prop="time" label="Begin-End" header-align="center" width="140px">
          <template #default="scope">
            <span>
              <span>{{ scope.row.startTime }}</span>
              <span>-</span>
              <span>{{ scope.row.endTime }}</span>
            </span>
          </template>
        </el-table-column>
        <el-table-column prop="subject" label="Subject" header-align="center">
          <template #default="scope">
            <div v-if="scope.row.tip" class="tip">{{ scope.row.tip }}</div>
            <template v-else>
              <div v-for="(item, itemIndex) in scope.row.items" :key="itemIndex">
                <div class="keynote">{{ item.title }}</div>
                <i v-if="item.speaker" class="speaker">{{ item.speaker }}</i>
              </div>
            </template>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { TableColumnCtx } from 'element-plus'

interface EventItem {
  title: string
  speaker?: string
}

interface Event {
  startTime: string
  endTime: string
  items?: EventItem[]
  tip?: string
}

interface DayProgram {
  date: string
  events: Event[]
}

const programData: DayProgram[] = [
  {
    date: 'Friday, November 1st, 2024',
    events: [
      { startTime: '09:30', endTime: '10:00', items: [{ speaker: 'TBD', title: 'Keynote 1' }] },
      { startTime: '10:00', endTime: '10:30', items: [{ speaker: 'TBD', title: 'Keynote 2' }] },
      { startTime: '10:30', endTime: '11:00', tip: 'Coffee Break' },
      { startTime: '11:00', endTime: '13:00', items: [
        { title: 'Session 1: TBD' },
        { speaker: 'TBD', title: 'Speech1' },
        { speaker: 'TBD', title: 'Speech2' },
        { title: 'Panel（70min）' }
      ]},
      { startTime: '13:00', endTime: '14:30', tip: 'Lunch Break' },
      // 下午的日程暂时保持不变
      { startTime: '14:30', endTime: '16:00', items: [
        { title: 'Session 2: TBD' },
        { speaker: 'TBD', title: 'Speech3' },
        { speaker: 'TBD', title: 'Speech4' },
        { title: 'Q&A' }
      ]},
      { startTime: '16:00', endTime: '16:30', tip: 'Coffee Break' },
      { startTime: '16:30', endTime: '18:30', items: [
        { title: 'Session 3: TBD' },
        { speaker: 'TBD', title: 'Speech5' },
        { speaker: 'TBD', title: 'Speech6' },
        { speaker: 'TBD', title: 'Speech7' },
        { title: 'Q&A' }
      ]},
      { startTime: '18:30', endTime: '21:00', tip: 'Dinner' }
    ]
  },

  {
    date: 'Saturday, November 2nd, 2024',
    events: [
    { startTime: '09:30', endTime: '11:00', items: [
        { title: 'Session 4: TBD' },
        { speaker: 'TBD', title: 'Speech8' },
        { speaker: 'TBD', title: 'Speech9' },
        { title: 'Q&A' }
      ]},

      { startTime: '11:00', endTime: '11:30', tip: 'Coffee Break' },

      { startTime: '11:30', endTime: '13:00', items: [
        { title: 'Session 5: TBD' },
        { speaker: 'TBD', title: 'Speech10' },
        { speaker: 'TBD', title: 'Speech11' },
        { title: 'Panel（50min）' }
      ]},
      { startTime: '13:00', endTime: '13:15', items: [{ title: 'Close Speech 15min' }] },
      { startTime: '13:15', endTime: '14:30', tip: 'Lunch' },
    ]
  }
]

const cellClassName = ({ row, columnIndex }: { row: Event, columnIndex: number }) => {
  if (columnIndex === 0) return '' // 时间列不设置背景色
  if (row.tip) return 'rest'
  return 'session' // 所有非休息时间的事件都设置为 'session' 类
}

const spanMethod = ({ row, column, rowIndex, columnIndex }: { row: Event, column: TableColumnCtx<Event>, rowIndex: number, columnIndex: number }) => {
  // 根据需要实现合并单元格的逻辑
}
</script>

<style lang="less" scoped>
.program {
  .date {
    font-weight: bold;
    line-height: 4.5rem;
    background-color: #34495e; // 更改为深蓝色
    color: #ffffff; // 添加白色文字以提高可读性
    padding: 0 1rem;
    margin-top: 2rem;
  }

  :deep(.header) {
    color: #333;
    > div {
      font-weight: bold;
      font-family: 'Raleway', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }
  }

  :deep(.rest) {
    background-color: #c0e1ec;
  }
  :deep(.multiple-events) {
    background-color: #f0f0f0;
  }

  .keynote {
    color: #000;
    font-size: 1.6rem;
    margin-bottom: 0.5rem;
  }

  .speaker {
    color: #333;
    display: block;
    margin-bottom: 1rem;
  }

  .tip {
    text-align: center;
    font-size: 1.6rem;
    color: #333;
    line-height: 1.8;
  }
}
</style>