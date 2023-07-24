import { LocalNavigation } from ".";

export default {
  title: "Components/LocalNavigation",
  component: LocalNavigation,
  argTypes: {
    type: {
      options: ["dropdown", "default"],
      control: { type: "select" },
    },
    state: {
      options: ["selected", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "dropdown",
    state: "selected",
    className: {},
    text: "Menu item",
    webIconsExpandWrapperWebIconsExpand:
      "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-expand-24px--default--74.svg",
    webIconsContract:
      "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-contract-24px--default--12.svg",
    text1: "Menu",
  },
};
