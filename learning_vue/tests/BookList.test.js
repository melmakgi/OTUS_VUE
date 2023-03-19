import {describe, it, expect} from "vitest";
import Component from "@/components/BookItem2.vue";
import {mount} from '@vue/test-utils'

const items = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}];
const wrapper = mount(Component, {props: {items}});

describe('Component BookItem2', () => {
    it('Mounts without errors', () => {
        expect(wrapper).toBeDefined();
        expect(wrapper.exists()).toBe(true);   // Проверка: нашли или нет
    })
    it('Renders list', () => {
        expect(wrapper.html()).toContain({id: 1});
        expect(wrapper.html()).toContain({id: 2});
        expect(wrapper.html()).toContain({id: 3});
        expect(wrapper.html()).toContain({id: 4});
        expect(wrapper.html()).toContain({id: 5});
    })
    it('Renders All', () => {
        expect(wrapper.html()).toMatchSnapshot();
    })
    it('Emits event', () => {
        const removeControl = wrapper.find("button");
        // Проверка: нашли или нет
        expect(removeControl.exists()).toBe(true);
        removeControl.trigger('click');
        // проверка, что событие было вызвано
        expect(wrapper.emitted()).toBeTruthy()
        //console.log(wrapper.emitted());
        expect(wrapper.emitted().remove);
    })
})

