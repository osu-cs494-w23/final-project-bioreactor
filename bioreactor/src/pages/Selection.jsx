import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import RecipePanel from "../components/RecipePanel";
import Summary from "../components/Summary";
import AddForm from "../components/AddForm";
import EditForm from "../components/EditForm";
import DeleteWarning from "../components/DeleteWarning";
import { NavLink } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";

const Selection = () => {
  const [onSummary, SetOnSummary] = useState(false);
  const [onAdd, setOnAdd] = useState(false);
  const [onEdit, setOnEdit] = useState(false);
  const [onDelete, setOnDelete] = useState(false);

  const onClickHandler = () => {
    setOnAdd(!onAdd);
  };
  const onEditHandler = () => {
    setOnEdit(!onEdit);
  };
  const onDeleteHandler = () => {
    setOnDelete(!onDelete);
  };

  const onClickSummary = () => {
    SetOnSummary(!onSummary);
  };

  return (
    <div className="manage-page">
      {onSummary && (
        <>
          <Summary onClickHandler={onClickSummary} />
          <div className="backscreen"></div>
        </>
      )}
      {onAdd && (
        <>
          <AddForm onClickHandler={onClickHandler} />
          <div className="backscreen"></div>
        </>
      )}
      {onEdit && (
        <>
          <EditForm onClickHandler={onEditHandler} />
          <div className="backscreen"></div>
        </>
      )}
      {onDelete && (
        <>
          <DeleteWarning onClickHandler={onDeleteHandler} />
          <div className="backscreen"></div>
        </>
      )}
      <Sidebar onClickHandler={onClickHandler} />
      <div className="rightside">
        <div className="back-container">
          <NavLink to="/" className="back">
            <FaAngleLeft className="arrow" />
            Back
          </NavLink>
        </div>
        <div className="recipe-panel">
          <RecipePanel
            onClickEdit={onEditHandler}
            onClickDelete={onDeleteHandler}
          />
          <button className="load-button" onClick={onClickSummary}>
            Load recipe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Selection;
