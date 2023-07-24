const { widget } = figma;
const { Frame, AutoLayout, useSyncedState, Input, Text, Ellipse } = widget;
import { TextButton } from "./TextButton";

export function FlatParameterView(props: {
  tintColor: string;
  data: Data;
  onChange: (data: Data) => void;
}) {
  return (
    <AutoLayout direction="vertical">
      {props.data.parameters.map((parameter, index) => (
        <AutoLayout direction="vertical">
          <AutoLayout key={index} direction="horizontal">
            <AutoLayout
              key={index}
              direction="horizontal"
              verticalAlignItems="center"
            >
              <AutoLayout padding={8}>
                <Ellipse width={4} height={4} fill={"#000000"} />
              </AutoLayout>
              <Input
                value={parameter.identifier}
                placeholder="name"
                onTextEditEnd={(value) => {
                  const parameters = [...props.data.parameters];
                  parameters[index] = {
                    identifier: value.characters,
                    value: parameter.value,
                  };
                  props.onChange({ ...props.data, parameters });
                }}
              />
            </AutoLayout>
            <Input
              value={parameter.value}
              placeholder="value"
              onTextEditEnd={(value) => {
                const parameters = [...props.data.parameters];
                parameters[index] = {
                  identifier: parameter.identifier,
                  value: value.characters,
                };
                props.onChange({ ...props.data, parameters });
              }}
            />
            <TextButton
              foregroundColor={props.tintColor}
              label="Delete"
              onClick={() => {
                const parameters = [...props.data.parameters];
                parameters.splice(index, 1);
                props.onChange({ ...props.data, parameters });
              }}
            />
          </AutoLayout>
          <AutoLayout
            padding={{ left: 8, right: 8, top: 16, bottom: 16 }}
            width={"fill-parent"}
          >
            <Frame width={"fill-parent"} height={1} fill={"#F2F2F2"} />
          </AutoLayout>
        </AutoLayout>
      ))}
      <AutoLayout
        width={"fill-parent"}
        direction="horizontal"
        padding={{ top: 8, bottom: 8 }}
      >
        <AutoLayout width={"fill-parent"} height={1} />
        <TextButton
          foregroundColor={props.tintColor}
          label="Add"
          onClick={() => {
            const parameters = [...props.data.parameters];
            parameters.push({
              identifier: "",
              value: "",
            });
            props.onChange({ ...props.data, parameters });
          }}
        />
      </AutoLayout>
    </AutoLayout>
  );
}

export type Parameter = {
  identifier: string;
  value: string;
};

export type Data = {
  parameters: Parameter[];
};
