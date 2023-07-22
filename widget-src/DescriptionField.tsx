const { widget } = figma;
const { Rectangle, Frame, AutoLayout, Input, Text, Ellipse } = widget;

export function DescriptionField(props: {
  label: string;
  value: string;
  onChange?: (value: string) => void;
}) {}
