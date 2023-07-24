import { EnhancedStandaloneLinks } from ".";

export default {
  title: "Components/EnhancedStandaloneLinks",
  component: EnhancedStandaloneLinks,
  argTypes: {
    iconPosition: {
      options: ["right", "left"],
      control: { type: "select" },
    },
    state: {
      options: ["disabled", "hover", "default"],
      control: { type: "select" },
    },
    fontSize: {
      options: ["twenty-pt", "sixteen-pt", "fourteen-pt"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    iconPosition: "right",
    state: "disabled",
    fontSize: "twenty-pt",
    inverse: true,
    className: {},
    enhancedStandaloneText: "Link Label",
    enhancedStandaloneTextClassName: {},
    text: "Link Label",
    webIconsForward:
      "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-forward-24px--default--11.svg",
    enhancedStandaloneWrapper:
      "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-forward-24px--small--7.svg",
  },
};
