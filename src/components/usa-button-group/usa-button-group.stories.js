import Component from "./usa-button-group.twig";
import { Data, SegmentedData } from "./content";

export default {
  title: "Components/Main Content/Button Group",
};

const Template = (args) => Component(args);

export const Default = Template.bind({});
Default.args = Data;

export const Segmented = Template.bind({});
Segmented.args = SegmentedData;
