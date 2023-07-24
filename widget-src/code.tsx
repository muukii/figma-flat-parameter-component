const { widget } = figma;
const { Frame, AutoLayout, useSyncedState, Input, Text, Ellipse } = widget;

import { FlatParameterView, Data } from "./FlatParameterView";
import { LabeledToggle, Toggle } from "./Toggle";

function Widget() {
  const [data, setData] = useSyncedState<Data>("data", {
    parameters: [],
  });

  return (
    <AutoLayout
      direction="vertical"
      fill={"#FFFFFF"}
      stroke={"#F2F2F2"}
      strokeWidth={2}
      padding={16}
      cornerRadius={8}
    >
      <FlatParameterView tintColor="#eb4034" data={data} onChange={setData} />
      <Toggle isOn={true} />
      {bookLabeledToggle()}
    </AutoLayout>
  );
}

function bookLabeledToggle() {
  const [isOn, setIsOn] = useSyncedState<boolean>("isOn", false);

  return (
    <LabeledToggle
      label="AAA"
      isOn={isOn}
      onClick={setIsOn}
      activeBackgroundColor={"#FF0000"}
      activeForegroundColor={"#0000FF"}
    />
  );
}

widget.register(Widget);
