import { GlobalHeaderElementsBasket } from ".";

export default {
  title: "Components/GlobalHeaderElementsBasket",
  component: GlobalHeaderElementsBasket,
  argTypes: {
    state: {
      options: ["items-added", "items-loading", "no-items-added"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    items: "0 items",
    total: "£94.60",
    state: "items-added",
    className: {},
  },
};
