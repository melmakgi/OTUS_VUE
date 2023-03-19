import {describe, it, expect} from "vitest";
import Component from "@/components/AuthorsSelect.vue";
import {shallowMount, mount} from '@vue/test-utils'

const items = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}];
const wrapper = mount(Component, {props: {items}});

describe('Component', () => {

    it('Mounts without errors', () => {
        expect(wrapper).toBeDefined();
        expect(wrapper.exists()).toBe(true);   // Проверка: нашли или нет
    })
    it("can simulate select selection", () => {
        const selected = wrapper.find("select");
        const options = selected.findAll("option");
        //const fooViewWrapper = shallowMount(items);
        //console.log(fooViewWrapper)
        selected.setValue("item 2");

        selected.trigger('input');
        // проверка, что событие было вызвано
        expect(wrapper.emitted()).toBeTruthy()
        console.log(wrapper.emitted());

        expect(selected.element.value);
        console.log(selected.element.value)
        options.at(2).element.selected = true
        console.log(selected.element.value)
    })
})