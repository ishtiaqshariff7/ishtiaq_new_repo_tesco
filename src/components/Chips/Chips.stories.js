import { Chips } from ".";

export default {
  title: "Components/Chips",
  component: Chips,
  argTypes: {
    state: {
      options: [
        "selected-hover",
        "unselected",
        "unselected-disabled",
        "selected",
        "unselected-hover",
        "selected-disabled",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    state: "selected-hover",
    className: {},
    buttonIconButtonButtonNoTextElementWebIconsCloseUnion: "abc",
    text: "Chip label",
  },
};
