import { shallowMount } from '@vue/test-utils';
import MButton from '@/components/MButton/MButton';

describe('MButton.vue', () => {
  it('renders with default tag', () => {
    const wrapper = shallowMount(MButton, {
      propsData: {
        id: 'test',
      },
    });
    expect(wrapper.element.tagName).toBe('BUTTON');
  });

  it('renders with A tag', () => {
    const wrapper = shallowMount(MButton, {
      propsData: {
        id: 'test',
        tag: 'a',
      },
    });
    expect(wrapper.element.tagName).toBe('A');
  });
});
