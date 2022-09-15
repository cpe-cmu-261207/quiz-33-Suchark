import React from "react";

export default function Reply(props) {
  return (
    <div>
      <div className="d-flex gap-2 my-2 ps-5">
        <img
          src="/profileImages/puppy.jpg"
          width="48"
          height="48"
          className="rounded-circle"
          style={{ objectFit: "cover" }}
        />
        <div
          className="rounded rounded-3 p-2"
          style={{ backgroundColor: "#3A3B3C" }}
        >
          <span className="fw-semibold" style={{ color: "#E4E6EB" }}>
            หมาน้อย
          </span>
          <br />
          <span style={{ color: "#E4E6EB" }}>จริงค้าบบบบบบบบ</span>
        </div>
      </div>
      <div className="d-flex gap-2 my-2 ps-5">
        <img
          src="/profileImages/charliebrown.jpg"
          width="48"
          height="48"
          className="rounded-circle"
          style={{ objectFit: "cover" }}
        />
        <div
          className="rounded rounded-3 p-2"
          style={{ backgroundColor: "#3A3B3C" }}
        >
          <span className="fw-semibold" style={{ color: "#E4E6EB" }}>
            ไก่จา
          </span>
          <br />
          <span style={{ color: "#E4E6EB" }}>หยุดก่อนอานนท์</span>
        </div>
      </div>
    </div>
  );
}
