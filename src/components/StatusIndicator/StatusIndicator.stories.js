import { StatusIndicator } from ".";

export default {
  title: "Components/StatusIndicator",
  component: StatusIndicator,
  argTypes: {
    state: {
      options: ["warning", "amend", "information", "pending", "success", "error"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    state: "warning",
    className: {},
  },
};
