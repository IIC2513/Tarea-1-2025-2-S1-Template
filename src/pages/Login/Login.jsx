import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ name: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
  };

  const handleSubmit = async (e) => {
    
  };

  return (
    <div className="login">
      <h1>Login!</h1>
    </div>
  );
};

export default Login;
