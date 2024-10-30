<template>
  <div class="live-view">
    <h1>FATTW 2024 Live Session</h1>
    <p>Welcome to our live session. Join us on Zoom to attend our conference.</p>
    
    <div class="zoom-section">
      <h2>Join Zoom Meeting</h2>
      <a href="https://zoom.us/j/99437716717" target="_blank" class="zoom-button">
        English Channel
      </a>
      <br/> 
      <a href="https://zoom.us/j/94707227321" target="_blank" class="zoom-button">
        Japanese Channel
      </a>
      <br/>
      This live stream is valid only during this workshop session. Please select either Japanese or English channel. It will be a one-way streaming via Zoom's webinar system, that is, a viewing-only. Please note that you are not allowed to participate in sessions such as questions. 
      <b>Recording videos, taking photo and screenshot is prohibited.</b>
      <!-- <div class="meeting-info">
        <p><strong>Meeting ID:</strong> your-meeting-id</p>
        <p><strong>Passcode:</strong> your-passcode</p>
      </div> -->
            <br/>
      <p class="instructions">Click the button above to join the living meeting. (No registration required)</p>
      <!-- <p class="instructions">Click the button above to join the meeting, or use the Meeting ID and Passcode in your Zoom client.</p> -->
    </div>

    <!-- <div class="schedule-section">
      <h2>Session Schedule</h2>
      <p>Our live session is scheduled for:</p>
      <p><strong>Date:</strong> TBD</p>
      <p><strong>Time:</strong> TBD (Time Zone)</p>
    </div> -->
  </div>
</template>

<script lang="ts" setup>
// 如果需要任何响应式数据或方法，可以在这里添加
// 例如：
// import { ref } from 'vue'
// const meetingId = ref('your-meeting-id')
// const passcode = ref('your-passcode')
</script>

<style scoped>
.live-view {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  font-family: Arial, sans-serif;
}

h1 {
  color: #2c3e50;
  margin-bottom: 20px;
}

h2 {
  color: #34495e;
  margin-top: 30px;
}

.zoom-section {
  margin-top: 30px;
  padding: 30px;
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.zoom-button {
  display: inline-block;
  padding: 15px 30px;
  background-color: #2D8CFF;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  margin: 20px 0;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.zoom-button:hover {
  background-color: #2681F2;
  transform: translateY(-2px);
}

.meeting-info {
  margin: 20px 0;
  font-size: 1.1em;
}

.instructions {
  font-size: 0.9em;
  color: #666;
  margin-top: 20px;
}

.schedule-section {
  margin-top: 40px;
  padding: 20px;
  background-color: #e9f7fe;
  border-radius: 8px;
}
</style>