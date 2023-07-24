import { DropdownMenuItem } from ".";

export default {
  title: "Components/DropdownMenuItem",
  component: DropdownMenuItem,
  argTypes: {
    state: {
      options: ["active", "focus", "default"],
      control: { type: "select" },
    },
    device: {
      options: ["desktop", "mobile"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    icon: true,
    label: true,
    state: "active",
    device: "desktop",
    text: "Menu label",
    webIconsExpandWebIconsExpand:
      "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-expand-24px--small--5.svg",
  },
};
