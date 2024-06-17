import { createApp, ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

const App = {
    setup() {
        const message = ref('Hello Vue with Composition API!');
        const reverseMessage = () => {
            message.value = message.value.split('').reverse().join('');
        };

        return {
            message,
            reverseMessage
        };
    },
    template: `
        <div>
            <h1>{{ message }}</h1>
            <button @click="reverseMessage">按我</button>
            <input v-model="message" placeholder="Edit me">
        </div>
    `
};

createApp(App).mount('#app');