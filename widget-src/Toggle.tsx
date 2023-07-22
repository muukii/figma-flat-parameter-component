const { widget } = figma;
const { Rectangle, Frame, AutoLayout, Input, Text, Ellipse } = widget;

export function Toggle(props: {
  isOn: boolean;
  onClick?: (isOn: boolean) => void;
}) {
  if (props.isOn) {
    return (
      <Frame
        onClick={() => {
          if (props.onClick) {
            props.onClick(false);
          }
        }}
        strokeWidth={0}
        overflow="visible"
        width={16}
        height={16}
      >
        <Rectangle fill="#e8e8e8" cornerRadius={3} width={16} height={16} />
        <Ellipse x={4} y={4} fill="#6e6e6e" width={8} height={8} />
      </Frame>
    );
  } else {
    return (
      <Rectangle
        onClick={() => {
          if (props.onClick) {
            props.onClick(false);
          }
        }}
        fill="#e8e8e8"
        cornerRadius={3}
        width={16}
        height={16}
      />
    );
  }
}

export function LabeledToggle(props: {
  label: string;
  isOn: boolean;
  activeForegroundColor: string;
  activeBackgroundColor: string;
  onClick?: (isOn: boolean) => void;
}) {
  return (
    <AutoLayout
      direction="horizontal"
      onClick={() => {
        if (props.onClick) {
          props.onClick(!props.isOn);
        }
      }}
      spacing={8}
      fill={props.isOn ? props.activeBackgroundColor : "#e8e8e8"}
      padding={8}
      cornerRadius={8}
    >
      <Text fill={props.isOn ? props.activeForegroundColor : "#6e6e6e"}>
        {props.label}
      </Text>
    </AutoLayout>
  );
}
