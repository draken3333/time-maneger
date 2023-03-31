import React from "react";
import { useDispatch } from "react-redux";
import { clearItem } from "../../redux/features/appSlicer";

const ActiveItems = ({ title, description, id, date }) => {
  const dispatch = useDispatch();
  const hendleDel = (i) => {
    dispatch(clearItem(i));
  };

//   const idS = useSelector((state) => state.appSlicer.value);


  return (
    <div className="active-items">
      <div className="header-item">
        <span>{id} : Задача</span>
        <span>Дата: {date.replace('T' , "    Время: ")}</span>
        <span onClick={() => hendleDel(id)} className="del">
          &times;
        </span>
      </div>
      <h1 className="active-title">{title}</h1>
      <p className="active-subtitle">{description}</p>
    </div>
  );
};

export default ActiveItems;
