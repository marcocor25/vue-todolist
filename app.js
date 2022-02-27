// COLLEGAMENTO VUE.JS
const app = new Vue({
    el: '#root',
    data: {
        title: 'title',
        sidebarTitle: 'to do list',
        barWrapperClass: 'bar-wrapper',
        inputType: 'text',
        placeOlder: 'Inserisci qui le tue cose da fare...',
        inputClass: 'input-text',
        mainTitle: 'your tasks :',
        ulClass: 'todolist',
        messageAddTask: 'Aggiungi la task che hai scritto.',
        messageDone: 'Clicca per segnare la task come completata.',
        messageDelete: 'Elimina questa task.',
        newTask: '',
        taskList: [
            {
                text: 'Studiare JavaScript e VueJs',
                value: false,
            },
            {
                text: 'Fare aggiornamenti driver del PC',
                value: false,
            },
            {
                text: 'Comprare ingredienti per fare la torta di mele',
                value: false,
            },
        ],
    },
    methods: {

        addTask: function() {
            if (this.newTask !== '') {
                this.taskList.push({text: this.newTask, value: false})
            } else {
                alert('Devi scrivere una task!')
            }

            this.newTask = ''
        },

        deleteTask (i) {
            this.taskList.splice(i, 1)
        },

        taskDone (j) {

            if (j.value == true) {
                j.value = false
            } else {
                j.value = true
            }

        },
    },
});

console.log(app);