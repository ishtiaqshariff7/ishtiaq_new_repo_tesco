import { TabMenuItems } from ".";

export default {
  title: "Components/TabMenuItems",
  component: TabMenuItems,
  argTypes: {
    state: {
      options: ["inactive", "active-selected", "hover-selected", "hover", "disabled"],
      control: { type: "select" },
    },
    width: {
      options: ["default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    state: "inactive",
    width: "default",
    className: {},
    webIconsExpandWrapperWebIconsExpand:
      "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-expand-24px--default--28.svg",
    webIconsContract:
      "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-contract-24px--default--2.svg",
  },
};
