import Vue, { CreateElement, VNode } from 'vue';

const MButton = Vue.extend({
  name: 'm-button',
  props: {
    id: {
      type: String,
      required: true,
    },
    tag: {
      type: String,
      default: 'button',
      validator(value) {
        return ['button', 'a'].indexOf(value) !== -1;
      },
    },
    value: {
      type: [String, Number],
      default: null,
    },
    classes: {
      type: [String, Array, Object],
      default:
        'block px-4 py-2 text-white transition duration-100 ease-in-out bg-blue-500 border border-transparent rounded shadow-sm hover:bg-blue-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50  disabled:opacity-50 disabled:cursor-not-allowed',
    },
  },
  render(createElement) {
    const renderFun: (createElement: CreateElement) => VNode = this.render;
    return renderFun(createElement);
  },
  methods: {
    blurHandler(e: FocusEvent) {
      this.$emit('blur', e);
    },
    focusHandler(e: FocusEvent) {
      this.$emit('focus', e);
    },
    clickHandler(e: MouseEvent) {
      this.$emit('click', e);
    },
    keydownHandler(e: MouseEvent) {
      this.$emit('keydown', e);
    },
    mousedownHandler(e: MouseEvent) {
      this.$emit('mousedown', e);
    },
    /**
     * Attrs according to the button type
     * @return {Object}
     */
    getAttributes() {
      return {
        id: this.id,
        value: this.value,
        type: 'button',
      };
    },
    render(createElement: CreateElement): VNode {
      return createElement(
        this.tag,
        {
          attrs: this.getAttributes(),
          class: this.classes,
          on: {
            click: this.clickHandler,
            focus: this.focusHandler,
            blur: this.blurHandler,
            keydown: this.keydownHandler,
            mousedown: this.mousedownHandler,
          },
        },
        this.$slots.default,
      );
    },
  },
});

export default MButton;
