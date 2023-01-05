import React from "react";

function OtherInfo({ userDto, setuserDto }) {
  return (
    <div className="other-info-container">

      <formgroup className="form" id="about">

        <input
          type="text"
          placeholder="."
          value={userDto.about}
          onChange={(e) => {
            setuserDto({ ...userDto, about: e.target.value });
          }}
        />
        <label className="formlabel" id="aboutlabel">about</label>
      </formgroup>
    </div>
  );
}

export default OtherInfo;