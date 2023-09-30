/* -------------- VUE JS --------------- */

const { createApp } = Vue;

createApp({

  data() {
    return {
      tasks: [  ],
      doneClass: 'line-through',
      newTask: '',
      errorMessage: ''
    }
  },

  methods: {
    removeTask(index) {
      const isDone = this.tasks[index].isDone;
      if (isDone) {
        this.tasks.splice(index, 1);
        this.errorMessage = ''
      }
      else {
        this.errorMessage = 'Questa task non è stata ancora completata'
        this.hideError();
      }
    },

    addTask() {
      const taskLength = this.newTask.toString().trim().length;

      if (taskLength >= 5) {
        this.tasks.push({ 
          content: this.newTask, 
          isDone: false
        });
        this.newTask = '';
        this.errorMessage = '';
      } 
      else {
        this.errorMessage = 'La task deve contenere almeno 5 caratteri';
        this.hideError();
      }
    },

    hideError() {
      setTimeout(() => {
        this.errorMessage = '';
      }, 4000)
    }
  }

}).mount('#app');