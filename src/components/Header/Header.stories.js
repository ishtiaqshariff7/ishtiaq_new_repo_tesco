import { Header } from ".";

export default {
  title: "Components/Header",
  component: Header,
  argTypes: {
    size: {
      options: ["forty-two-px-flex", "fifty-six-px-fixed"],
      control: { type: "select" },
    },
    type: {
      options: ["text", "checkbox", "radio-button"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    borderTop: true,
    borderLeft: false,
    heading: true,
    borderBottom: true,
    text: "Heading",
    borderRight: true,
    sortControls: false,
    size: "forty-two-px-flex",
    type: "text",
    className: {},
    borderRightClassName: {},
    borderTopClassName: {},
    borderBottomClassName: {},
  },
};
