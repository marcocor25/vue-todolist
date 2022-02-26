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
        newTask: '',
        taskList: [
            'Studiare JavaScript e VueJs',
            'Fare aggiornamenti driver del PC',
            'Comprare ingredienti per fare la torta di mele'
        ]
    }
})