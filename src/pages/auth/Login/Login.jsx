import { useState } from "react";
import { useAuth } from "../../../context/useContext";
import { useNavigate, Link } from "react-router-dom";
import "./login.css";

export const Login = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const login = async (e) => {
    e.preventDefault();
    setError("");
    try {
      console.log(setValues);
      navigate("/home");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="backgroundDiv flex justify-center bg-violet-900">
      <div className="formContainer mt-40 bg-white p-10 rounded-xl ">
        <div className="flex flex-col justify-center">
          <img
            className="mx-2 h-13 w-32 self-center"
            src="../../../../img/Icono_minion_app.svg"
            alt="Your Company"
          />
          <h2 className="mt-8 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 self-center">
            Iniciar sesion
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm form">
          <form
            onSubmit={login}
            className="space-y-6 w-96 labelContainer"
            action="#"
            method="POST"
          >
            <div>
              <label
                htmlFor="email"
                className=" label flex text-sm font-medium leading-6 text-gray-900"
              >
                Correo electronico
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={values.email}
                  autoComplete="email"
                  onChange={handleChange}
                  placeholder="negocio@info.com"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Contraseña
                </label>
              </div>
              <div className="mt-2 mr-3">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={values.password}
                  placeholder="***********"
                  autoComplete="current-password"
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
                />
              </div>
            </div>
            <div>
              <div className="checkboxContainer text-sm flex justify-between ">
                <div className="mb-2">
                  <input
                    className="mr-4"
                    type="checkbox"
                    name="my-checkbox"
                    id="opt-in"
                  />
                  <label
                    htmlFor="opt-in"
                    className=" text-sm font-medium leading-6 text-gray-900"
                  >
                    Recordar contraseña
                  </label>
                </div>
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Olvidaste tu contraseña?
                </a>
              </div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-5"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
