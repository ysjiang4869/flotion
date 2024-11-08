<template>
  <div class="note-list">
    <div v-for="note in notes" :key="note.id" class="note-item">
      <div class="note-time">{{ note.created_time }}</div>
      <div class="note-content">{{ note.content }}</div>
      <div class="note-footer">
        <!-- 笔记底部的操作按钮 -->
        <div class="note-actions">
          <button class="action-btn">
            <i class="icon-more"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NoteList',
  props: {
    notes: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
.note-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.note-item {
  background: white;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.note-time {
  font-size: 12px;
  color: #666;
  margin-bottom: 8px;
}

.note-content {
  margin-bottom: 16px;
}

.note-footer {
  display: flex;
  justify-content: flex-end;
}

.action-btn {
  border: none;
  background: none;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;
}

.action-btn:hover {
  background: #f5f5f5;
}
</style>