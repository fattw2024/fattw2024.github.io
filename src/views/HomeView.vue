<template>
  <div class="home">
    <!--<div class="title1 font-merri">Testing Technology and Practice in the age of LLM</div>-->
    <div class="title2 font-merri">
      Welcome to the Future Advanced Testing Technology Workshop 2024!
    </div>
    <p class="pa pa-header p">
      Join us for FATTW 2024, a premier event dedicated to the latest advancements and innovations
      in testing technology. In an era where software complexity is ever-increasing, the role of
      advanced testing technologies has never been more critical. This workshop is dedicated to
      exploring the forefront of software testing innovations. We have invited many well-known experts and scholars from around the world to discuss the challenges, share the latest research results and explore future-oriented testing methods. This workshop covers a number of topics, including but not limited to quality assurance of AI systems, the future of AI in software testing and methods of evaluating intelligent systems. Participants will learn about latest practices from experts face-to-face, exchange their minds with top experts and connect with peers from different backgrounds.
    </p>

    <div class="title2 section-title">Why Join us?</div>
    <p class="pa pa-header p">
      This workshop promises to be a pivotal event for professionals and researchers in the field of
      advanced testing technologies. Organized by a distinguished committee of professors from
      renowned Japanese universities, this workshop aims to explore cutting-edge advancements and
      practical applications in testing technologies, particularly in relation to Large Language
      Models (LLM). Whether you are a senior testing engineer, a cross-domain expert interested in testing technologies or a newcomer to the industry, you can reap valuable information and inspire thinking about the development of testing technology.
    </p>

    <div class="title2 section-title">Topics of Interest:</div>
    <div class="pa pa-header p">
      <ul>
        <li>
          <strong>AI Testing Technology Research and Practices.</strong> This segment will delve
          into automated and autonomous testing methods, crucial for enhancing efficiency and
          accuracy in AI systems. Additionally, discussions on data management for LLM and the
          importance of explainable AI will provide valuable insights into making AI systems more
          transparent and trustworthy.
        </li>
        <li>
          <strong>Testing AI Technologies Research, </strong>which will cover AI performance testing
          and safety evaluation. These sessions are designed to address the challenges of ensuring
          AI systems perform reliably and safely, which is critical as AI becomes increasingly
          integrated into various industries.
        </li>
        <li>
          <strong>Systematic Evaluation Technologies,</strong> focusing on system reliability
          evaluation and software auditing tools for system networks. This segment will provide
          participants with practical tools and methodologies to assess and improve the reliability
          and security of complex systems.
        </li>
      </ul>
      <p class="pa pa-header p">
        Participants can join the workshop via Zoom Livestream Platforms, making it accessible to a
        global audience. Supported by IPSJ-SIGSE, this event is set to be a cornerstone for those
        looking to stay at the forefront of testing technology advancements.
      </p>
    </div>

    <div style="margin-top: 30px; color: #000; font-size: 1.6rem">
      <div class="title2 section-title">Location</div>
      <div class="tip font-merri location-content">
        <el-icon><Location /></el-icon>
        <a target="_blank" href="https://www.newotani.co.jp/en/makuhari/" class=""
          >Hotel New Otani Makuhari</a
        >
        <p style="margin-left:8px">Tokyo, Japan, November 1st-2nd, 2024</p>
      </div>
      For more information, please contact us at
      <a class="link" href="mailto:FATTW2024@gmail.com"> FATTW2024@gmail.com</a>
    </div>
  </div>
  <supporters></supporters>
</template>

import Supporters from '../components/Supporters.vue'
<style lang="less" scoped>
.home {
  .pa {
    margin-top: 1.4 rem;

    &.pa-header {
      line-height: 1.8;
    }

    &.pa-content {
      line-height: 1.6;
    }
  }

  .section-title {
    margin: 1.6rem 0;
  }
  .location-content {
    display: flex;
    align-items: center;
  }
}
strong {
  font-weight: 700; // 或者使用 'bold'
  color: #333; // 可以根据需要调整颜色
}
</style>
