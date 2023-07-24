import { NumberedPageLinks } from ".";

export default {
  title: "Components/NumberedPageLinks",
  component: NumberedPageLinks,
  argTypes: {
    state: {
      options: ["ellipses", "hover", "selected", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    state: "ellipses",
    text: "1",
    className: {},
  },
};
