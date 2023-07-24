import { SearchInput } from ".";

export default {
  title: "Components/SearchInput",
  component: SearchInput,
  argTypes: {
    state: {
      options: ["active", "default", "focus", "error-focus", "error", "disabled"],
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
    optionalHint: true,
    scrollbar: false,
    preferredHint: true,
    button: true,
    label: true,
    complete: true,
    state: "active",
    device: "desktop",
    className: {},
    DDSFormStyleDdsFormStyleClassName: {},
    leadingIconWebIconsSearchUnion:
      "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-110.svg",
    text: "Hint text (optional)",
    searchButtonButtonIconButtonState: "abc",
    searchButtonUsage: "global-1",
  },
};
