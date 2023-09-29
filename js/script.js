/*

*/

const { createApp } = Vue;
createApp({

  data() {
    return {
      tasks: [
        {
          content: 'andare a comprare il pane',
          isDone: false
        }
      ],
      doneClass: 'line-through',
      newTask: '',
      errorMessage: ''
    }
  },

  methods: {
    removeTask(index) {
      this.tasks.splice(index,1)
    },
    addTask() {
      this.tasks.push({
        content: this.newTask,
        isDone: false
      })
      this.newTask = ''
    }
  },

  mounted() {
    console.log('ok:');
  }

}).mount('#app');