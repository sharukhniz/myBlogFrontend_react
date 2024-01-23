import React from "react";
import Header from "../Common/Header";
import DataForm from "./DataForm/DataForm";
import style from "./AdminPanel.module.css";

const AdminPanel = () => {
  return (
    <>
      <div className={style.MainPage}>
        <div className={style.container}>
          <div className={style.Main_Heading}>
            <Header name={"Admin Panel"} />
          </div>
          <div className={style.contents}>
            <DataForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPanel;
