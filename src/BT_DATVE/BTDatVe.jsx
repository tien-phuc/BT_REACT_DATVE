import React from "react";

import "./style.css";
import { ChoNgoi } from "./ChoNgoi";
import { DanhSach } from "./DanhSach";

export const BTDatVe = () => {
  return (
    <div
      style={{
        backgroundImage: `url('./../public/img/bgmovie.jpg')`,
        backgroundSize: "cover",
        height: "100vh",
        backgroundPosition: "center",
      }}
    >
      <div
        id="component"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.75)",
          overflowY: "auto",
        }}
      >
        <div id="left">
          <h1 className="text-center p-3">BÀI TẬP ĐẶT VÉ XEM PHIM</h1>
          <ChoNgoi />
        </div>
        
        <div id="right">
          <h1 className="text-center ms-5 p-3">DANH SÁCH GHẾ CHỌN</h1>
          <DanhSach />
        </div>
      </div>
    </div>
  );
};
