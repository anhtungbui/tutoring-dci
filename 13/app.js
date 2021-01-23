const app = new Vue({
    el: '#app',
    data: {
        name: "Daniel",
        age: 21,
        status: false,
        today: new Date().toLocaleString().slice(0, 10)
    }
});

const app2 = new Vue({
    el: '#app-2',
    data: {
        status: true,
        name: "B",
        weight: 101,
    }
});

const app3 = new Vue({
    el: '#app-3',
    data: {
       animals: ["Dog", "Bird", "Cat", "Mouse", "Horse"],
       todos: [
           { id: 0, body: "Learn JS"},
           { id: 1, body: "Learn Vue"},
           { id: 2, body: "Learn React"},
       ] 
    }
});

const app4 = new Vue({
    el: '#app-4',
    data: {
        name: "Nisha",
    },
    methods: {
        changeName: function () {
            this.name = "Madhu"
        }
    }
});

// Registering a component 
Vue.component('todo-item', {
    template: `
    <ul>
        <li>{{ item.body }}</li>
        <li>{{ item.id }}</li>
    </ul>
    `,
    props: ["item"]
});

const app5 = new Vue({
    data: {
        todos: [
            { id: 0, body: "Learn JS"},
            { id: 1, body: "Learn Vue"},
            { id: 2, body: "Learn React"},
        ] 
    },
    el: '#app-5',
});

const app6 = new Vue({
    el: '#app-6',
    computed: {
        message: function () {
            const originalMessage = "Hello";
            return originalMessage.split("").reverse().join("");
        }
    }
});