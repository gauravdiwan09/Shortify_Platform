import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";
import { setToken as saveToken } from "../utils/auth";
import { toast } from "react-toastify";
import { Container, Form, Button, Card } from "react-bootstrap";

function Login({ onLogin }) {  // accept onLogin from App
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await API.post("/auth/public/login", { username, password });
      saveToken(response.data.token);   // save in localStorage
      onLogin(response.data.token);      // update App state
      toast.success("Login successful!");
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="p-4 shadow" style={{ maxWidth: "400px", width: "100%" }}>
        <h3 className="text-center mb-3">Shortify Login</h3>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              autoComplete="username" // Added autocomplete
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password" // Added autocomplete
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </Button>
        </Form>
      </Card>
    </Container>
  );
}

export default Login;
