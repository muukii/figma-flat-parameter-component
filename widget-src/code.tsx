const { widget } = figma;
const { Frame, AutoLayout, useSyncedState, Input, Text } = widget;

function FlatParameterView(props: {
  data: Data;
  onChange: (data: Data) => void;
}) {
  return (
    <AutoLayout direction="vertical">
      {props.data.parameters.map((parameter, index) => (
        <AutoLayout key={index} direction="horizontal">
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
        </AutoLayout>
      ))}
      <Text
        onClick={() => {
          const parameters = [...props.data.parameters];
          parameters.push({
            identifier: "",
            value: "",
          });
          props.onChange({ ...props.data, parameters });
        }}
      >
        Add
      </Text>
    </AutoLayout>
  );
}

type Parameter = {
  identifier: string;
  value: string;
};

type Data = {
  parameters: Parameter[];
};

function Widget() {
  const [data, setData] = useSyncedState<Data>("data", {
    parameters: [],
  });

  return (
    <AutoLayout direction="vertical">
      <FlatParameterView data={data} onChange={setData} />
    </AutoLayout>
  );
}

widget.register(Widget);
