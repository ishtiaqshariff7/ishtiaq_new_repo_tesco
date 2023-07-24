import { SelectorsCheckbox } from ".";

export default {
  title: "Components/SelectorsCheckbox",
  component: SelectorsCheckbox,
  argTypes: {
    state: {
      options: [
        "disabled-selected",
        "indeterminate",
        "default-focus",
        "indeterminate-focus",
        "default",
        "selected",
        "selected-focus",
        "error-focus",
        "disabled-indeterminate",
        "error",
        "disabled",
      ],
      control: { type: "select" },
    },
    size: {
      options: ["thirty-two-px", "twenty-four-px"],
      control: { type: "select" },
    },
    label: {
      options: ["off", "on"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    state: "disabled-selected",
    size: "thirty-two-px",
    label: "off",
    className: {},
    checkboxCheckboxClassName: {},
    checkboxCopyClassName: {},
    checkboxDescriptionClassName: {},
    checkboxText: "Checkbox with text that can go into multiple lines as per the content.",
    checkboxSelectorClassName: {},
  },
};
