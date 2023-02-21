import UInput from './UInput.vue';
import UButton from './UButton.vue';

const components = [
    {name: 'UInput', components: UInput},
    {name: 'UButton', components: UButton},    
]
export default {
    install(app) {
        components.forEach(({name, component}) => {
            app.component(name, component)
        })
    }
}