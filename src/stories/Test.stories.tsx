import { Story } from "@storybook/react";
import React from "react";
import Test from "../components/Test";

export default {
  title: "Components / Test",
  component: Test,
};

const Template: Story = (args) => <Test {...args} />;

export const Default = Template.bind({});
Default.args = {};
