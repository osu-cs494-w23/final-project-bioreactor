import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import RecipePanel from "../components/RecipePanel";
import AddForm from "../components/AddForm";
import EditForm from "../components/EditForm";
import DeleteWarning from "../components/DeleteWarning";
import { NavLink } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";

const Manage = () => {
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

  return (
    <div className="manage-page">
      <Sidebar onClickHandler={onClickHandler} />
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
        </div>
      </div>
    </div>
  );
};

export default Manage;
