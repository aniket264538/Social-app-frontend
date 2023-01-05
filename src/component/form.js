import React, { useState } from "react";
import SignUpInfo from "./SignUpInfo";
import PersonalInfo from "./PersonalInfo";
import OtherInfo from "./otherInfo";
import axios from 'axios';
import signUp from "../services/user-service"
// import './formstyle.css'; 

function Form() {
  const [page, setPage] = useState(0);
  const [userDto, setuserDto] = useState({
    email: "",
    password: "",
    DOB: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    occupation: "",
    nationality: "",
    about: "",
  });

  const FormTitles = ["Sign Up", "Personal Info", "Other"];

  const PageDisplay = () => {
    if (page === 0) {
      return <PersonalInfo userDto={userDto} setuserDto={setuserDto} />;
    } else if (page === 1) {
      return < SignUpInfo userDto={userDto} setuserDto={setuserDto} />;
    } else {
      return <OtherInfo userDto={userDto} setuserDto={setuserDto} />;
    }
  };
  // const submitform = (e) => {
  //   e.preventDefault();
  const submitform = async (e) => {
    // e.preventDefault();
    console.log(JSON.stringify({ ...userDto }));

    // try {
    //   const response = await axios.post('http://localhost:9090/api/user/register');
    //   console.log(response.data);
    // } catch (error) {
    //   console.error(error);
    // }

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({ ...userDto }),
      redirect: 'follow'
    };

    fetch("http://localhost:9090/api/user/register", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  // axios.post("http://localhost:9090/api/user/register", userDto).then((response) => {
  //   console.log(response)
  //   console.log("success")
  // });

  // signUp(userDto).then((resp) => {
  //   console.log(resp);
  //   console.log("success log");
  // }).catch((error) => {
  //   console.log(error)
  //   console.log("error")
  // })

  // };

  return (
    <div className="form" onSubmit={submitform}>
      <div className="progressbar">
        <div
          style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }}
        ></div>
      </div>
      <div className="form-container">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <button
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button><br />
          <button
            onClick={() => {
              if (page === FormTitles.length - 1) {
                alert("FORM SUBMITTED");
                submitform()
                console.log(userDto);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>
          <p id="alreadyaccount">Already Have an account? <span className="signin">Sign In</span></p>
        </div>
      </div>
    </div>
  );
}

export default Form;