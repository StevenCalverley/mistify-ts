import MBadge from './MBadge.vue';

export default {
  title: 'Mistify/Badge',
  component: MBadge,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['GRAY', 'BLUE', 'RED', 'GREEN', 'YELLOW', 'PURPLE'],
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MBadge },
  template: '<m-badge v-bind="$props">Testing Badge</m-badge>',
});

export const Blue = Template.bind({});
Blue.args = {
  type: 'BLUE',
};

export const Purple = Template.bind({});
Purple.args = {
  type: 'PURPLE',
};
