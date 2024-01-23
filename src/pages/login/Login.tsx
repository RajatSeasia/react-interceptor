import { useNavigate } from "react-router-dom";
import UserButton from "../../components/UserButton";
import UserInput from "../../components/UserInput";
import "./login.scss";
import { useDispatch } from "react-redux";
import { loginAsync } from "../../store/login/loginSlice";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState<any>();
  const [password, setPassword] = useState<any>();
  const handleNext = () => {
    navigate("/sign-in");
  };


  const dispatch = useDispatch();

  const handleLogin = async() => {
  const response: any  =  await dispatch(loginAsync({ email: username, password: password }));
  if(response?.payload?.status==200){
    navigate('/home')
  }
  };

  return (
    <section>
      <div className="container">
        <div className="main_wraper">
          <div className="wrap">
            <div className="row">
              <div className="col-lg-6 d-flex  justify-content-center p-5">
                <div>
                  <h3>Sign In</h3>
                  <UserInput
                    labelname="USERNAME"
                    name="username"
                    showValue={username}
                    onChange={(e: any) => setUsername(e.target.value)}
                    type="email"
                    labelClass="userLabelClass"
                    placeholder="Username"
                    className="inputClass"
                  />
                  <UserInput
                    labelname="PASSWORD"
                    type="password"
                    name="password"
                    showValue={password}
                    onChange={(e: any) => setPassword(e.target.value)}
                    labelClass="userLabelClass"
                    placeholder="Password"
                    className="inputClass"
                  />
                  <UserButton
                    name="Sign in"
                    styleClass="userBtn"
                    action={handleLogin}
                  />
                </div>
              </div>
              <div className="col-lg-6 rightBar d-flex  justify-content-center  align-items-center text-center">
                <div>
                  <p className="heading_main">Welcome to login</p>
                  <p className="heading_second">Don't have an account?</p>
                  <UserButton
                    name="Sign Up"
                    styleClass="userBtnUp"
                    action={handleNext}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
