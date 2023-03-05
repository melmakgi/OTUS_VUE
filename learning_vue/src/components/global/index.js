import UNavbar from "@/components/global/UNavbar.vue";
import UFooter from "@/components/global/UFooter.vue";
import UInput from '@/components/global/UInput.vue';
import UButton from '@/components/global/UButton.vue';

const components = [
    {name: 'UNavbar', components: UNavbar},
    {name: 'UFooter', components: UFooter},
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