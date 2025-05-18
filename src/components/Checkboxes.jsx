import Checkbox from './Checkbox';

const Checkboxes = (props) => {

  return (
    <div className="containCheckbox">
      <Checkbox
        label="Uppercase"
        name="uppercase"
        checked={props.options.uppercase}
        onCheckBoxChange={props.onCheckBoxChange}
      />
      <Checkbox
        label="Lowercase"
        name="lowercase"
        checked={props.options.lowercase}
        onCheckBoxChange={props.onCheckBoxChange}
      />
      <Checkbox
        label="Numbers"
        name="numbers"
        checked={props.options.numbers}
        onCheckBoxChange={props.onCheckBoxChange}
      />
      <Checkbox
        label="Symbols"
        name="symbols"
        checked={props.options.symbols}
        onCheckBoxChange={props.onCheckBoxChange}
      />
    </div>
  );
};

export default Checkboxes;
