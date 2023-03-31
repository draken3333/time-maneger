import React from "react";
import { useDispatch } from "react-redux";
import { actionItem, clear } from "../../redux/features/appSlicer";

const DeashItem = () => {
  const dateNew = new Date();
  const offset = dateNew.getTimezoneOffset();
  dateNew.setMinutes(dateNew.getMinutes() - offset);
  const formattedDate = dateNew.toISOString().slice(0, 16);
  const dispatch = useDispatch();
  const [id, setId] = React.useState(1);
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [date, setDate] = React.useState(formattedDate);

  const animBtn = `button${"animated" ? " animated" : ""}`;

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handldDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleAddClick = () => {
    // Send Actions
    title === ""
      ? alert("Форма не заполнена!")
      : dispatch(actionItem({ title, description, id, date }));

    title === "" ? setId(id) : setId(id + 1);

    setTimeout(() => {
      setTitle("");
      setDescription("");
      setDate(formattedDate);
    }, 200);
  };
  const handleClearClick = () => {
    // Сlear Actions
    dispatch(clear());
  };

  return (
    <div className="dashboard-item">
      <input
        className="date-item"
        type="datetime-local"
        value={date}
        onChange={handldDateChange}
      />
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={handleTitleChange}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={handleDescriptionChange}
      />
      <button className={animBtn} onClick={handleAddClick}>
        Добавить
      </button>
      <button className={animBtn} onClick={handleClearClick}>
        Удалить все
      </button>
    </div>
  );
};

export default DeashItem;
