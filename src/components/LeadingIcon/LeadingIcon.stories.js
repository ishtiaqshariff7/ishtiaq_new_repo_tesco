import { LeadingIcon } from ".";

export default {
  title: "Components/LeadingIcon",
  component: LeadingIcon,
  argTypes: {
    chooseIcon: {
      options: ["search", "location", "back"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    chooseIcon: "search",
    className: {},
    webIconsSearchUnion:
      "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-49.svg",
  },
};
