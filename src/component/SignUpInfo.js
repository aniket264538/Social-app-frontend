import React from "react";


function SignUpInfo({ userDto, setuserDto }) {
  return (
    <div className="sign-up-container">

      <formgroup className="form">
        <input
          type="date"
          placeholder=""
          value={userDto.DOB}
          onChange={(event) =>
            setuserDto({ ...userDto, DOB: event.target.value })
          }
        /> <br />
        <label className="formlabel"></label>

      </formgroup>
      <formgroup className="form">

        <input
          type="text"
          placeholder=""
          value={userDto.phoneNumber}
          onChange={(e) => {
            setuserDto({ ...userDto, phoneNumber: e.target.value });
          }}
        />
        <label className="formlabel">Phone Number
        </label>
      </formgroup>
      <br />

      <formgroup className="form">

        <input
          type="text"
          placeholder=""
          value={userDto.occupation}
          onChange={(e) => {
            setuserDto({ ...userDto, occupation: e.target.value });
          }}
        />
        <label className="formlabel">Occupation</label>
      </formgroup>

      <br />
      <formgroup className="form">

        <input
          type="text"
          placeholder=""
          value={userDto.nationality}
          onChange={(e) => {
            setuserDto({ ...userDto, nationality: e.target.value });
          }}
        />
        <label className="formlabel">Nationality</label>
      </formgroup>
      <br />
    </div >
  );
}

export default SignUpInfo;