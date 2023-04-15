const Input2 = (props) => {
  return (
    <div>
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={props.onDataPass.value}
        onChange={props.onDataPass2.passwordChangeHandler}
        onBlur={props.onDataPass3.validatePasswordHandler}
      />
    </div>
  );
};

export default Input2;
