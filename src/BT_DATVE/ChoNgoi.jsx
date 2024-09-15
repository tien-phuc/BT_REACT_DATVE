import React from "react";
import data from "./danhSachGhe.json";
import { useSelector, useDispatch } from "react-redux";
import { btDatVeActions } from "../storeReduxToolkit/DATVE/sliceDatVe";
import "./style.css";

export const ChoNgoi = () => {
  const dispatch = useDispatch();
  const selectedSeats = useSelector(
    (state) => state.btDatVeReducer.selectedSeats
  );

  const handleSeatClick = (seat) => {
    const isSeatSelected = selectedSeats.some((s) => s.soGhe === seat.soGhe);
    if (isSeatSelected) {
      dispatch(btDatVeActions.removeSeat(seat.soGhe));
    } else {
      dispatch(btDatVeActions.addSeat(seat));
    }
  };

  return (
    <div>
      <div className="screen">
        <div className="manHinh text-center">Màn Hình</div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-1"></div>
          {data[0]?.danhSachGhe.map((ghe, seatIndex) => (
            <div key={seatIndex} className="col text-center">
              {ghe.soGhe}
            </div>
          ))}
        </div>

        {data.slice(1).map((hang, rowIndex) => (
          <div className="row" key={rowIndex}>
            <div className="col-1 text-center">{hang.hang}</div>
            {hang.danhSachGhe.map((ghe, seatIndex) => (
              <div key={seatIndex} className="col text-center">
                <button
                  className={`btn ${
                    selectedSeats.some((s) => s.soGhe === ghe.soGhe)
                      ? "btn-danger text-white"
                      : "btn-light"
                  }`}
                  onClick={() => handleSeatClick(ghe)}
                >
                  {ghe.soGhe}
                </button>
              </div>
            ))}
          </div>
        ))}
      </div>
      <h1 className="text-center">Chúc bạn xem phim vui nhé!!!</h1>
    </div>
  );
};
