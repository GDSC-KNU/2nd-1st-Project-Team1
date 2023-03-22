import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SemesterDnd from "./SemesterDnd";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Planner/Semester",
  component: SemesterDnd,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof SemesterDnd>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SemesterDnd> = args => (
  <SemesterDnd {...args} />
);

export const SemesterExm = Template.bind({});
