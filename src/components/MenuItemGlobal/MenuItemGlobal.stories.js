import { MenuItemGlobal } from ".";

export default {
  title: "Components/MenuItemGlobal",
  component: MenuItemGlobal,
  argTypes: {
    type: {
      options: ["label", "flag"],
      control: { type: "select" },
    },
    state: {
      options: ["focus", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    icon: true,
    type: "label",
    state: "focus",
    className: {},
    text: "Menu label",
    flagsFlagGreatClassName: {},
    flagsFlagGreat:
      "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/flags-flag---great-britain-1.svg",
    labelClassName: {},
  },
};
