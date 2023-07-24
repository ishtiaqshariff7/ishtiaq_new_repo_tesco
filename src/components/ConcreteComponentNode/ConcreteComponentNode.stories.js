import { ConcreteComponentNode } from ".";

export default {
  title: "Components/ConcreteComponentNode",
  component: ConcreteComponentNode,
  argTypes: {
    type: {
      options: [
        "mobile-microsite",
        "generic",
        "signed-in",
        "custom",
        "groceries-signed-out",
        "groceries-signed-in",
        "clubcard",
        "dotcom",
      ],
      control: { type: "select" },
    },
    screen: {
      options: ["seven-hundred-and-fifty-six-px-and-above", "seven-hundred-and-fifty-five-px-and-below"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "mobile-microsite",
    screen: "seven-hundred-and-fifty-six-px-and-above",
    className: {},
  },
};
