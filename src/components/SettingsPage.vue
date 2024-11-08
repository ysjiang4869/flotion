<template>
  <div class="settings-container">
    <h2>账号设置</h2>
    <div class="settings-form">
      <div class="form-item">
        <label>Notion Token</label>
        <input 
          type="password" 
          v-model="notionToken" 
          placeholder="请输入 Notion Token"
        />
      </div>
      <div class="form-item">
        <label>Database ID</label>
        <input 
          type="text" 
          v-model="databaseId" 
          placeholder="请输入 Database ID"
        />
      </div>
      <button class="save-btn" @click="saveSettings">保存设置</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SettingsPage',
  data() {
    return {
      notionToken: '',
      databaseId: ''
    }
  },
  created() {
    // 从localStorage加载已保存的设置
    this.notionToken = localStorage.getItem('notionToken') || ''
    this.databaseId = localStorage.getItem('databaseId') || ''
  },
  methods: {
    saveSettings() {
      // 保存到localStorage
      localStorage.setItem('notionToken', this.notionToken)
      localStorage.setItem('databaseId', this.databaseId)
      // 可以添加保存成功的提示
      alert('设置已保存')
    }
  }
}
</script>

<style scoped>
.settings-container {
  padding: 20px;
}

.settings-form {
  max-width: 500px;
  margin: 20px 0;
}

.form-item {
  margin-bottom: 20px;
}

.form-item label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #333;
}

.form-item input {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

.save-btn {
  background: #40b883;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.save-btn:hover {
  background: #3aa876;
}
</style> 