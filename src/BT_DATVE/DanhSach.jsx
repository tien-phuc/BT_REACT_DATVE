import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { btDatVeActions } from "../storeReduxToolkit/DATVE/sliceDatVe";
import "./style.css";

export const DanhSach = () => {
  const dispatch = useDispatch();
  const selectedSeats = useSelector(
    (state) => state.btDatVeReducer.selectedSeats
  );

  const totalPrice = selectedSeats
    .reduce((total, seat) => total + seat.gia, 0)
    .toLocaleString("vi-VN");

  function handleRemoveSeat(seatNumber) {
    dispatch(btDatVeActions.removeSeat(seatNumber));
  }

  return (
    <div>
      <div className="ms-5 mt-3">
        <div className="d-flex">
          <div id="daDat"></div>
          <p className="fw-bold">Ghế đã đặt</p>
        </div>

        <div className="d-flex">
          <div id="chuaDat"></div>
          <p className="fw-bold">Ghế chưa đặt</p>
        </div>
      </div>

      <div className="container mt-3">
        <table className="table ms-5 table-bordered">
          <thead>
            <tr>
              <th>Số ghế</th>
              <th>Giá</th>
              <th>Xóa ghế</th>
            </tr>
          </thead>
          <tbody>
            {selectedSeats.map((seat, index) => (
              <tr key={index}>
                <td>{seat.soGhe}</td>
                <td>{seat.gia.toLocaleString("vi-VN")} VND</td>
                <td>
                  <button
                    className="remove btn btn-danger"
                    onClick={() => handleRemoveSeat(seat.soGhe)}
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan="2" className="text-end">
                Tổng tiền:
              </td>
              <td>{totalPrice} VND</td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
    </div>
  );
};
