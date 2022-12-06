import React, { useRef, useState } from "react";
import SimpleReactValidator from 'simple-react-validator';
import BGImage from "../../public/assets/img/bg.jpg";

function AuthForm() {
  const simpleValidator = useRef(new SimpleReactValidator());
  const [isLogin, setIsLogin] = useState(true);
  const [, forceUpdate] = useState();
  const [userInput, setUserInput] = useState([
    (username) => "",
    (email) => "",
    (password) => "",
  ]);

  const handleAuthFormSubmit = (event) => {
    event.preventDefault();

    const formValid = simpleValidator.current.allValid();
    console.log('saving...')
    if (!formValid) {
      console.log('form not valid...')
      simpleValidator.current.showMessages()
      forceUpdate(1);
    }

  };

  const handleFormTypeChange = () => {
    setIsLogin((prevValue) => !prevValue);
    simpleValidator.current.hideMessages()
    forceUpdate(1);
  }

  const handleUserInputChange = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
    console.log(userInput);
  };

  return (
    <>
      <div
        className="login-page"
        style={{ backgroundImage: `url(${BGImage.src})` }}
      >
        <div className="container d-flex align-items-center position-relative py-5">
          <div className="card shadow-sm w-100 rounded overflow-hidden bg-none">
            <div className="card-body p-0">
              <div className="row gx-0 align-items-stretch">
                <div className="col-lg-6">
                  <div className="info d-flex justify-content-center flex-column p-4 h-100">
                    <div className="py-5">
                      <h1 className="display-6 fw-bold">Dashboard</h1>
                      <p className="fw-light mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 bg-white">
                  <div className="d-flex align-items-center px-4 px-lg-5 h-100">
                    <form className="login-form py-5 w-100">
                      <div className="input-material-group mb-3">
                        <label className="label" htmlFor="login-username">
                          User Name :
                        </label>
                        <input
                          onChange={(e) => handleUserInputChange(e)}
                          value={userInput.username}
                          className="input-material"
                          id="login-username"
                          type="text"
                          name="username"
                          autoComplete="off"
                          data-validate-field="username"
                        />
                        {simpleValidator.current.message('username', userInput.username, 'required')}
                      </div>
                      {!isLogin && (
                        <div className="input-material-group mb-3">
                          <label
                            className="label"
                            htmlFor="login-email"
                          >
                            Email :
                          </label>
                          <input
                            onChange={(e) => handleUserInputChange(e)}
                            value={userInput.email}
                            className="input-material"
                            id="login-email"
                            type="text"
                            name="email"
                            autoComplete="off"
                            data-validate-field="email"
                          />
                          {simpleValidator.current.message('email', userInput.email, 'required|email')}
                          
                        </div>
                      )}

                      <div className="input-material-group mb-4">
                      <label
                          className="label"
                          htmlFor="login-password"
                        >
                          Password :
                        </label>
                        <input
                          onChange={(e) => handleUserInputChange(e)}
                          value={userInput.password}
                          className="input-material"
                          id="login-password"
                          type="password"
                          name="password"
                          data-validate-field="password"
                        />
                        {simpleValidator.current.message('password', userInput.password, 'required|min:8|max:20')}
                      </div>
                      <button
                        onClick={(e) => handleAuthFormSubmit(e)}
                        className="btn btn-primary mb-3"
                        id="login"
                        type="submit"
                      >
                        {isLogin ? "Login" : "Signup"}
                      </button>
                      <br />
                      <a className="text-sm text-paleBlue" href="#">
                        Forgot Password?
                      </a>
                      <br />
                      <small className="text-gray-500">
                        Do not have an account?{" "}
                      </small>
                      <a
                        onClick={handleFormTypeChange}
                        className="text-sm btn text-paleBlue"
                      >
                        {isLogin ? "Signup" : "Login"}
                      </a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center position-absolute bottom-0 start-0 w-100 z-index-20">
          <p className="text-white">
            Design by{" "}
            <a
              className="external"
              href="https://bootstrapious.com/p/admin-template"
            >
              Bootstrapious
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default AuthForm;
