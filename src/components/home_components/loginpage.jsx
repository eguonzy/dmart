import React, { useEffect } from "react";
import "../../res/css modules/login.scss";
import login_img from "../../res/images/login.svg";
import { loginUser } from "../../controller/api/authApi";
import { loginUser as loginDispatch } from "../../model/store/user";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const LoginPage = (props) => {
  const handlePlaceHolder = () => {};
  const dispatch = useDispatch();
  const { isAuthorized } = useSelector((state) => state.user);
  const [isMember, setIsMember] = React.useState(true);
  const { onLoad } = props;
  React.useEffect(() => {
    onLoad("login");

    setIsMember(true);
    return () => {
      onLoad("sign");
      setIsMember(false);
    };
  }, [onLoad, isAuthorized, props.history]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let form = new FormData(e.target);
    let req = await loginUser(form);
    if (req.status === 200) {
      let { state } = props.location;
      let data = await req.json();
      let userObject = { ...data.user };
      userObject.token = data.token;

      await dispatch(loginDispatch(userObject));
      console.log(state.from);

      userObject.type === "customer"
        ? props.history.push(state?.from.pathname || "/")
        : props.history.push("/merchant/home");
      // return <Redirect to={state?.from.pathname || "/"} />;
    } else {
      alert("Unauthorized");
    }
  };

  useEffect(() => {}, []);
  return (
    <div
      className={
        "form_con " + (isMember ? "slide__in__left" : "slide__out__left")
      }
    >
      <form onSubmit={handleSubmit} className="form">
        <div className="input_container">
          <input
            onFocus={handlePlaceHolder}
            type="text"
            name="email"
            required
            className="input"
          />
          <label className="label">Email/Phone Number</label>
        </div>
        <div className="input_container">
          <input className="input" name="password" type="password" required />
          <label className="label">Password</label>
        </div>
        <div className="btn_con">
          <button className="login_btn">
            {" "}
            <p>Login</p>
            <img src={login_img} className="btn_icon" alt="login" />
          </button>
        </div>
      </form>
      <div className="forgot_password">
        <a href="http://#">Forgot your password?</a>
      </div>
    </div>
  );
};

export default LoginPage;
