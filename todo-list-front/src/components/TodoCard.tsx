import React, {useState} from "react";

type Props = {
  item: TodoDTO;
  onRemoval: Function;
  onItemUpdate: Function;
};

const TodoCard: React.FC<Props> = ({item, onRemoval, onItemUpdate}) => {
  const [msg, setMsg] = useState(item.msg);

  const footerStyle = {
    display: 'inline-flex',
    justifyContent: 'space-between',
    justifyItems: 'space-between',
    width: '100%',
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMsg(event.target.value);
  }

  return (
    <div className="card col-md-3">
      <div className="card-body">
        {/*Item input area*/}
        <form onSubmit={(event) => {
          event.preventDefault();
          onItemUpdate({...item, msg});
        }}>
          <textarea className="card-text form-control"
                    autoComplete="off"
                    value={msg}
                    onChange={handleChange}
                    disabled={item.status}
                    style={item.status ? {textDecoration: "line-through"} : {textDecoration: "none"}}>
          </textarea>
          <button type="submit"
                  disabled={item.status}
                  className="btn btn-primary btn-sm">Save
          </button>
        </form>
      </div>
      <div className="card-footer justify-content-center mx-auto" style={footerStyle}>
        {/*Change status button*/}
        <div>
          <form onSubmit={(event) => {
            event.preventDefault();
            onItemUpdate({...item, status: !item.status});
          }}>
            <button type="submit"
                    className="btn btn-primary btn-sm">{item.status ? 'Not Done' : 'Done'}</button>
          </form>
        </div>
        {/*Remove button*/}
        <div>
          <form onSubmit={(event) => {
            event.preventDefault();
            onRemoval(item._id);
          }}>
            <button type="submit" className="btn btn-primary btn-sm">Remove</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TodoCard;
