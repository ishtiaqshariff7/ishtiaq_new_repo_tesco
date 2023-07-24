import { DropdownDefault } from ".";

export default {
  title: "Components/DropdownDefault",
  component: DropdownDefault,
  argTypes: {
    state: {
      options: ["default", "focus", "error-focus", "error", "disabled"],
      control: { type: "select" },
    },
    size: {
      options: ["thirty-two-px", "forty-px"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    hintText: true,
    optionalText: true,
    label: true,
    complete: true,
    leftLabel: true,
    state: "default",
    size: "thirty-two-px",
    className: {},
    text: "Label",
    hintSelectionClassName: {},
    text1: "Select [label]",
    atomsDropdowIconsWebIconsExpandWrapperWebIconsExpand:
      "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-expand-24px--default--123.svg",
    atomsDropdowIconsAtomsDropdowIconsClassName: {},
    hintSelectionClassNameOverride: {},
    atomsDropdowIconsWebIconsExpandWrapperImg:
      "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-expand-24px--default--123.svg",
    atomsDropdowIconsAtomsDropdowIconsClassNameOverride: {},
    text2: "Hint text goes here. Delete as necessary",
  },
};
