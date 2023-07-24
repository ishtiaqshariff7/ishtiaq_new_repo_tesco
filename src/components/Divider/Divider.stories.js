import { Divider } from ".";

export default {
  title: "Components/Divider",
  component: Divider,
  argTypes: {
    color: {
      options: ["light-grey", "dark-grey"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    color: "light-grey",
    className: {},
  },
};
