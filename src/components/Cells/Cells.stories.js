import { Cells } from ".";

export default {
  title: "Components/Cells",
  component: Cells,
  argTypes: {
    size: {
      options: ["forty-two-px-flex", "fifty-six-px-fixed"],
      control: { type: "select" },
    },
    type: {
      options: [
        "form-field",
        "checkbox",
        "status",
        "dropdown",
        "link",
        "radio-button",
        "secondary-button",
        "alert",
        "text",
      ],
      control: { type: "select" },
    },
    backgroundColour: {
      options: ["grey", "white"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    borderBottom: true,
    borderRight: true,
    text: "Table cell",
    linkText: "Link label",
    borderLeft: false,
    borderTop: false,
    showText: true,
    size: "forty-two-px-flex",
    type: "form-field",
    backgroundColour: "grey",
    className: {},
    borderRightClassName: {},
    borderBottomClassName: {},
    inputsTextInputClassName: {},
    text1: "Label",
  },
};
