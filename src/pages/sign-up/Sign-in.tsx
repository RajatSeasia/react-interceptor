
import { useNavigate } from "react-router-dom";
import UserButton from "../../components/UserButton";
import UserInput from "../../components/UserInput";
import "./signIn.scss";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { registerAsync } from "../../store/login/loginSlice";

 interface user{
  name:any,
  email:any,
  phone:any,
  password:any,
  cPassword:any
}
export default function SignIn() {

  const obj:user = {
    name:"",
    email:"",
    phone:"",
    password:"",
    cPassword:""
  }
  const [formData,setFormData]=useState({...obj})

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleNext=()=>{
    navigate('/')
  }

  const handleRegister=async()=>{
   const response:any = await dispatch(registerAsync(formData))
   if(response?.payload?.status == 200){
    navigate('/')
   }
  }


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
                  labelname="FULL NAME"
                  type="text"
                  labelClass="userLabelClass"
                  placeholder="Name"
                  className="inputClass"
                  showValue={formData?.name}
                  name="name"
                  onChange={handleChange}
                />
                <UserInput
                  labelname="EMAIL"
                  type="email"
                  labelClass="userLabelClass"
                  placeholder="Email"
                  className="inputClass"
                  showValue={formData?.email}
                  name="email"
                  onChange={handleChange}
                />
                <UserInput
                  labelname="Phone"
                  type="text"
                  labelClass="userLabelClass"
                  placeholder="Phone"
                  className="inputClass"
                  showValue={formData?.phone}
                  name="phone"
                  onChange={handleChange}
                />
                <UserInput
                  labelname="PASSWORD"
                  type="password"
                  labelClass="userLabelClass"
                  placeholder="Password"
                  className="inputClass"
                  showValue={formData?.password}
                  name="password"
                  onChange={handleChange}
                />
                <UserInput
                  labelname="Confirm Password"
                  type="password"
                  labelClass="userLabelClass"
                  placeholder="Password"
                  className="inputClass"
                  showValue={formData?.cPassword}
                  name="cPassword"
                  onChange={handleChange}
                />
                <UserButton name="Sign Up" styleClass="userBtn" action={handleRegister} />
              </div>
            </div>
            <div className="col-lg-6 rightBar d-flex  justify-content-center  align-items-center text-center">
              <div>
                <p className="heading_main">Welcome to login</p>
                <p className="heading_second">Don't have an account?</p>
                <UserButton name="Sign In" styleClass="userBtnUp" action={handleNext} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
