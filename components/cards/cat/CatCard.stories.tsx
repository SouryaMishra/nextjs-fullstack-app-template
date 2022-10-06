import { ComponentMeta, ComponentStory } from "@storybook/react";
import CatCard, { ICatCardProps } from "./CatCard";
import { mockCatCardProps } from "./CatCard.mocks";

export default {
  title: "templates/CatCard",
  component: CatCard,
  argTypes: {},
} as ComponentMeta<typeof CatCard>;

const Template: ComponentStory<typeof CatCard> = (args) => (
  <CatCard {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockCatCardProps.base,
} as ICatCardProps;
