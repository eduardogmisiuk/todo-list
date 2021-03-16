import React, {useState} from "react";

type Props = {
  submitHandler: Function;
}

const AddTodo: React.FC<Props> = ({submitHandler}) => {
  const [msg, setMsg] = useState<String>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMsg(event.target.value);
  }

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      submitHandler(msg);
    }}>
      <input
        type="text"
        id="add-todo"
        className="input"
        name="text"
        autoComplete="off"
        onChange={(event) => handleChange(event)}
      />
      <button type="submit" className="btn btn-primary btn-sm">Add</button>
    </form>
  );
};

export default AddTodo;
