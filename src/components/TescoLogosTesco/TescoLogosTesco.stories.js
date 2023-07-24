import { TescoLogosTesco } from ".";

export default {
  title: "Components/TescoLogosTesco",
  component: TescoLogosTesco,
  argTypes: {
    type: {
      options: [
        "native",
        "lotus-large",
        "lotus-small",
        "bank-native",
        "bank-large",
        "bank-x-small",
        "large-signpost",
        "small",
        "bank-small",
        "medium",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "native",
    typeBankNativeClassName: {},
    fill: "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/fill-1-1.svg",
    img: "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/fill-3-1.svg",
    text: "Signpost",
    fill1: "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/fill-1-2.svg",
    fill2: "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/fill-3-2.svg",
  },
};
