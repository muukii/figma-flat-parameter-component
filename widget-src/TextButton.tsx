const { widget } = figma;
const { Frame, AutoLayout, useSyncedState, Input, Text, Ellipse } = widget;

export function TextButton(props: {
  foregroundColor: string;
  label: string;
  onClick?: () => void;
}) {
  return (
    <Text fill={props.foregroundColor} fontSize={13} onClick={props.onClick}>
      {props.label}
    </Text>
  );
}
