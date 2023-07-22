const { widget } = figma;
const { Frame, AutoLayout, useSyncedState, Input, Text, Ellipse } = widget;

import { FlatParameterView, Data } from "./FlatParameterView";
import { LabeledToggle, Toggle } from "./Toggle";

import { CorePalette, Scheme } from "@material/material-color-utilities";

// const scheme = Scheme.light(0xff695873);
const scheme = Scheme.lightFromCorePalette(CorePalette.of(0x0022ff));

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
      <FlatParameterView data={data} onChange={setData} />
      <Toggle isOn={true} />
      {bookLabeledToggle()}
      <Frame width={10} height={10} fill={scheme.background.toString()} />
      <Frame width={10} height={10} fill={scheme.primary.toString()} />
      <Frame width={10} height={10} fill={scheme.tertiary.toString()} />
      <Frame width={10} height={10} fill={scheme.onTertiary.toString()} />
      <Frame width={10} height={10} fill={scheme.onPrimary.toString()} />
      <Frame
        width={10}
        height={10}
        fill={scheme.onPrimaryContainer.toString()}
      />
      <Frame width={10} height={10} fill={scheme.onSecondary.toString()} />
      <Frame
        width={10}
        height={10}
        fill={scheme.onSecondaryContainer.toString()}
      />
      <Frame width={10} height={10} fill={scheme.onBackground.toString()} />
      <Frame width={10} height={10} fill={scheme.onSurface.toString()} />
      <Frame width={10} height={10} fill={scheme.surface.toString()} />
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
      activeBackgroundColor={scheme.primary.toString()}
      activeForegroundColor={scheme.onPrimaryContainer.toString()}
    />
  );
}

widget.register(Widget);
