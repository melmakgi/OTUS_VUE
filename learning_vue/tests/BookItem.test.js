import {describe, it, expect} from "vitest";
import Component from "@/components/BookItem2.vue";
import {mount} from '@vue/test-utils'

const wrapper = mount(Component);

describe('Component BookItem', () => {
    it('Renders All', () => {
        expect(wrapper.html()).toMatchSnapshot();
    })
})