const ControlledInputs = () => {
  return (
    <form className="form">
      <h4>controlled inputs</h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input type="text" id='name' className="form-input"></input>
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input type="email" id='email' className="form-input"></input>
      </div>
      <button type='submit' className="btn btn-block">submit</button>
    </form>
  );
};
export default ControlledInputs;
