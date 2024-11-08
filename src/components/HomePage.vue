<template>
  <div class="home-container">
    <!-- 左侧边栏 -->
    <div class="sidebar">
      <div class="user-info" @click="showSettings">
        <span class="pro-tag">PRO</span>
        <span class="username">song</span>
      </div>
      
      <div class="stats">
        <div class="stat-item">
          <div class="number">2</div>
          <div class="label">笔记</div>
        </div>
        <div class="stat-item">
          <div class="number">0</div>
          <div class="label">标签</div>
        </div>
        <div class="stat-item">
          <div class="number">1494</div>
          <div class="label">天</div>
        </div>
      </div>

      <!-- 日历热力图 -->
      <div class="calendar-heatmap">
        <!-- 这里可以使用vue-calendar-heatmap组件 -->
      </div>

      <!-- 侧边栏菜单 -->
      <div class="sidebar-menu">
        <div 
          class="menu-item"
          :class="{ active: currentView === 'notes' }"
          @click="showNotes"
        >
          <i class="icon-notes"></i>
          全部笔记
        </div>
        <div class="menu-item">
          <i class="icon-chat"></i>
          微信输入
        </div>
        <div class="menu-item">
          <i class="icon-calendar"></i>
          每日回顾
        </div>
        <div class="menu-item">
          <i class="icon-search"></i>
          找一找
        </div>
        <div class="menu-item">
          <i class="icon-random"></i>
          随机漫步
        </div>
      </div>
    </div>

    <!-- 右侧内容区 -->
    <div class="content">
      <SettingsPage v-if="currentView === 'settings'" />
      <div v-else>
        <div class="header">
          <div class="title">全部笔记</div>
          <div class="search-bar">
            <input type="text" placeholder="搜索..." />
            <span class="shortcut">⌘+K</span>
          </div>
        </div>
        
        <NoteList :notes="notes" />
      </div>
    </div>
  </div>
</template>

<script>
import NoteList from './NoteList.vue'
import SettingsPage from './SettingsPage.vue'

export default {
  name: 'HomePage',
  components: {
    NoteList,
    SettingsPage
  },
  data() {
    return {
      notes: [],
      currentView: 'notes' // 'notes' 或 'settings'
    }
  },
  async created() {
    // TODO: 从Notion API获取笔记数据
    // this.notes = await this.fetchNotesFromNotion()
  },
  methods: {
    async fetchNotesFromNotion() {
      // 实现Notion API调用
    },
    showSettings() {
      this.currentView = this.currentView === 'settings' ? 'notes' : 'settings'
    },
    showNotes() {
      this.currentView = 'notes'
      // 如果需要刷新笔记列表，可以在这里调用
      // this.fetchNotesFromNotion()
    }
  }
}
</script>

<style scoped>
.home-container {
  display: flex;
  height: 90vh;
  width: 90vw;
  max-width: 1200px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.sidebar {
  width: 250px;
  background: #f7f7f7;
  padding: 20px;
  border-right: 1px solid #e0e0e0;
  border-radius: 8px 0 0 8px;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
  cursor: pointer;
}

.pro-tag {
  background: #666;
  color: white;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 12px;
}

.stats {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.stat-item {
  text-align: center;
}

.number {
  font-size: 24px;
  font-weight: bold;
}

.label {
  font-size: 12px;
  color: #666;
}

.sidebar-menu {
  margin-top: 20px;
}

.menu-item {
  padding: 10px;
  margin: 5px 0;
  border-radius: 6px;
  cursor: pointer;
}

.menu-item.active {
  background: #e9e9e9;
}

.content {
  flex: 1;
  padding: 20px;
  max-width: calc(100% - 250px);
  overflow-y: auto;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.search-bar {
  display: flex;
  align-items: center;
  gap: 10px;
}

.search-bar input {
  padding: 8px 12px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  width: 300px;
}

.shortcut {
  color: #666;
  font-size: 12px;
}
</style>