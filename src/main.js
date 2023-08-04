// импорт создания приложения из vue библиотеки
import { createApp } from 'vue'

// импорт корневого приложения
import AppVue from './App.vue'

// импорт компонентов
import componentsUi from './components/UI/indexUi.js'

// создаем приложение vue и монтируем его внутри блока с id #vue
const App = createApp(AppVue)
App.mount('#vue')

// импорт компонентов глобально
componentsUi.forEach(component => {
    App.component(component.name, component)
})

// проверяем список зарегистрированных компонентов
console.log(App._context.components)
