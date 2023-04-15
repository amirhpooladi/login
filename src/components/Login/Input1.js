import React from "react";

const Input1=(props)=>{
    return(
<div>
<label htmlFor="email">E-Mail</label>
          <input
            type='email'
            id="email"
            value={props.onData.value}
            onChange={props.onData2.emailChangeHandler}
            onBlur={props.onData3.validateEmailHandler}
          />
         
</div>
    )
}
export default Input1;