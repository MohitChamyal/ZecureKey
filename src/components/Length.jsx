
import './Length.css'

const Length = (props) => {
  return (
    <div className="length-control">
      <label htmlFor="length">Length: {props.length}</label>
      <input
        type="range"
        id="length"
        min="4"
        max="32"
        value={props.length}
        onChange={props.onLengthChange}
      />
    </div>
  );
};


export default Length
