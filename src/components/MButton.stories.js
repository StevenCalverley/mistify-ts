import MButton from "./MButton.ts";

export default {
  title: "Mistify/Button",
  component: MButton,
  argTypes: {
    tag: { control: { type: "select", options: ["button", "a"] } }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MButton },
  template: '<m-button v-bind="$props">Testing Story</m-button>'
});

export const Primary = Template.bind({});
Primary.args = {
  id: "test",
  tag: "button"
};
