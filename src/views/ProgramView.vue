<template>
  <div class="program">
    <p class="pa-content p">TBD</p>
    <!-- <div class="date">Tuesday, October 10th</div>
    <el-table
      :data="tableData"
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
            <div class="keynote">{{ scope.row.title }}</div>
            <i v-if="scope.row.speaker" class="speaker">{{ scope.row.speaker }}</i>
          </template>
        </template>
      </el-table-column>
    </el-table> -->
  </div>
</template>

<script lang="ts" setup>
import type { TableColumnCtx } from 'element-plus'

interface Data {
  startTime: string
  endTime: string
  topic?: string
  speaker?: string
  title?: string
  tip?: string
}

interface MethodProps {
  row: Data
  column: TableColumnCtx<Data>
  rowIndex: number
  columnIndex: number
}

const tableData: Data[] = [
  { startTime: '10:30', endTime: '11:00', speaker: 'Prof. Joseph Sifakis (Verimag, Université Grenoble Alpes)', title: 'Keynote 1: Trustworthy Intelligent Systems – A Daunting Challenge' },
  { startTime: '11:00', endTime: '11:30', speaker: 'Prof. Zheng Zheng (Beihang University)', title: 'Keynote 2: Reliability and Testing of Reinforcement Learning Systems' },
  { startTime: '11:30', endTime: '12:00', speaker: 'Prof. Domenico Cotroneo (University of Naples Federico II)', title: 'Keynote 3: Unveiling the Veil: Towards the Trustworthiness of AI Code Generators' },
  { startTime: '12:00', endTime: '12:30', title: 'Panel: How Large Language Models help in Software Dependability Engineering' },
  { startTime: '12:30', endTime: '14:00', tip: 'Lunch Break' },

  { startTime: '14:00', endTime: '16:35', tip: 'Doctoral Symposium' },
  { startTime: '14:00', endTime: '16:35', speaker: 'Jiyue Huang', title: 'Training-time Attacks and Defenses of Distributed Learning' },
  { startTime: '14:00', endTime: '16:35', speaker: 'Yuning Jiang', title: 'Data-driven Design and Operation of Complex Intelligent Systems: An Interplay between Control, Learning and Optimization' },
  { startTime: '14:00', endTime: '16:35', speaker: 'Baiwei Guo', title: 'Safe Zeroth-Order Optimization Using Local Proxies' },
  { startTime: '14:00', endTime: '16:35', speaker: 'Ni Dang', title: 'Distributed Stochastic Model Predictive Control for a Microscopic Interactive Traffic Model' },
  { startTime: '14:00', endTime: '16:35', tip: 'Tea Break' },
  { startTime: '14:00', endTime: '16:35', speaker: 'Fenghua Wang', title: 'Robustness and Recoverability of Network Controllability with respect to Node Removals' },
  { startTime: '14:00', endTime: '16:35', speaker: 'Xinpeng Hong', title: 'In-network machine learning for limit order books' },
  { startTime: '14:00', endTime: '16:35', speaker: 'Chi Hong', title: 'Knowledge Extraction in Machine Learning' },
  { startTime: '14:00', endTime: '16:35', speaker: 'Xiao Wang', title: 'Safe Reinforcement Learning for Autonomous Vehicles' },

  { startTime: '16:35', endTime: '17:35', tip: 'Accepted Paper Presentation' },
  { startTime: '16:35', endTime: '17:35', speaker: 'Shiming Liu, Qunli Zhang, Wei Li, Siyun Yao, Yucheng Mu and Zheng Hu', title: 'Runtime operational design domain monitoring of static road geometry for automated vehicles' },
  { startTime: '16:35', endTime: '17:35', speaker: 'Xiaolei Yu, Kai Jia, Wenhua Hu, Jing Tian and Jianwen Xiang', title: 'Black-Box Test Case Prioritization Using Log Analysis and Test Case Diversity' },
  { startTime: '16:35', endTime: '17:35', speaker: 'Peng Wang, Qingyang Xu, Siyun Yao, Xiangfei Wu, Qunli Zhang, et al.', title: 'A robust online extrinsic calibration method for GNSS-RTK and IMU system and vehicle setups' },
  { startTime: '16:35', endTime: '17:35', speaker: 'Wenyi Fang, Hao Zhang, Ziyu Gong, Longbin Zeng, Xuhui Lu, Biao Liu, et al.', title: 'A Survey of Approaches to Enhance Training Dependability in Large Language Models' },
  { startTime: '17:35', endTime: '', tip: 'Closing and Dinner' },
]

const cellClassName = ({ rowIndex, columnIndex }: MethodProps) => {
  if (rowIndex === 5 || rowIndex === 11 || rowIndex === 21) {
    if (columnIndex > 0) {
      return 'rest'
    }
  } else if (rowIndex === 6 || rowIndex === 16) {
    if (columnIndex > 0) {
      return 'title'
    }
  }
}

const spanMethod = ({ rowIndex, columnIndex } : MethodProps) => {
  if (columnIndex === 0) {
    if (rowIndex === 6) {
      return [10, 1]
    } else if (rowIndex > 6 && rowIndex < 16) {
      return [0, 0]
    } else if (rowIndex === 16) {
      return [5, 1]
    } else if (rowIndex > 16 && rowIndex < 21) {
      return [0, 0]
    }
  }
}
</script>

<style lang="less" scoped>
.program {
  .date {
    font-weight: bold;
    line-height: 4.5rem;
    background-color: #b86a6a;
    padding: 0 1rem;
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
  :deep(.title) {
    background-color: #C2C2C2;
  }

  .keynote {
    color: #000;
    font-size: 1.6rem;
  }

  .speaker {
    color: #333;
  }

  .tip {
    text-align: center;
    font-size: 1.6rem;
    color: #333;
    line-height: 1.8;
  }
}
</style>