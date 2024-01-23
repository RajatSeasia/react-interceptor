import { memo } from "react";
const UserButton = memo(
  ({ name, action, type, disabled, styleClass,id,setIcon }:any) => {
    return (
      <button
        id={id}
        disabled={disabled ? true : false}
        type={type ? type : "button"}
        onClick={action}
        className={styleClass}>
        {setIcon}
        {name}
      </button>
    );
  }
);


export default UserButton;