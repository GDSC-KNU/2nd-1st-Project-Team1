import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Semester from "./Semester";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Planner/Semester",
  component: Semester,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Semester>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Semester> = args => (
  <Semester {...args} />
);

export const SemesterExm = Template.bind({});
