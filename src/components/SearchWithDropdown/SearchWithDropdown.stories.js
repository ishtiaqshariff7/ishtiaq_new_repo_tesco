import { SearchWithDropdown } from ".";

export default {
  title: "Components/SearchWithDropdown",
  component: SearchWithDropdown,
  argTypes: {
    device: {
      options: ["desktop", "mobile"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    device: "desktop",
    className: {},
    dropdownDefaultAtomsDropdowIconsWebIconsExpandWrapperWebIconsExpand:
      "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-expand-24px--default--9.svg",
    dropdownDefaultHintText: true,
    dropdownDefaultText: "Select [label]",
    dropdownDefaultLabel: true,
    searchInputLeadingIconWebIconsSearchUnion:
      "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-24.svg",
    searchInputDdsFormStyleDdsFormStyleClassName: {},
    searchInputPreferredHint: true,
    searchInputText: "Hint text (optional)",
    searchInputLabel: true,
    searchInputSearchButtonUsage: "abc",
  },
};
