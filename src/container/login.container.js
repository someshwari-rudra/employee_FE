import { useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useLoginContainer = () => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const isAuth = localStorage.getItem("authToken");
    console.log("isAuth :>> ", isAuth);
    if (isAuth) {
      navigate("/dashboard");
    }
  }, []);

  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
    if (!e.target.value) {
      setErrors((prev) => ({
        ...prev,
        [e.target.name]: `${e.target.name} is required`,
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        [e.target.name]: "",
      }));
    }
  };

  const onSubmit = () => {
    localStorage.setItem("authToken", "user");
    setErrors(null);
    navigate("/dashboard");
  };
  return { values, errors, onSubmit, onChange };
};

export default useLoginContainer;
