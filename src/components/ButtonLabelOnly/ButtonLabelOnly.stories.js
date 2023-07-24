import { ButtonLabelOnly } from ".";

export default {
  title: "Components/ButtonLabelOnly",
  component: ButtonLabelOnly,
  argTypes: {
    style: {
      options: ["primary", "secondary"],
      control: { type: "select" },
    },
    state: {
      options: ["active", "active-focus", "selected", "selected-focus", "loading", "disabled"],
      control: { type: "select" },
    },
    size: {
      options: ["thirty-two-px", "forty-px-default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    style: "primary",
    onDark: true,
    state: "active",
    size: "thirty-two-px",
    className: {},
    buttonNoIconText: "Button label",
  },
};
