import { MenuItemToolkit } from ".";

export default {
  title: "Components/MenuItemToolkit",
  component: MenuItemToolkit,
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
    borderRight: true,
    label: true,
    borderLeft: true,
    state: "active",
    device: "desktop",
    text: "Menu label",
  },
};
