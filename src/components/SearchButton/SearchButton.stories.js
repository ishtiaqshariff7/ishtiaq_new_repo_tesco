import { SearchButton } from ".";

export default {
  title: "Components/SearchButton",
  component: SearchButton,
  argTypes: {
    usage: {
      options: ["global-1", "inline", "global-2"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    usage: "global-1",
    className: {},
    buttonIconButtonState: "active",
  },
};
