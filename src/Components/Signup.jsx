import React, { useRef, useState } from "react";
import { useAuth } from "../Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";

// import { Alert, Button } from "@mui/material";

export default function Signup() {
   const [values, setValues] = React.useState({
      password: "",
      showPassword: false,
   });

   // const handleChange = (prop) => (event) => {
   //   setValues({ ...values, [prop]: event.target.value });
   // };

   // const handleClickShowPassword = () => {
   //   setValues({
   //     ...values,
   //     showPassword: !values.showPassword,
   //   });
   // };

   const handleMouseDownPassword = (event) => {
      event.preventDefault();
   };

   const emailRef = useRef();
   const passwordRef = useRef();
   const passwordConfirmRef = useRef();
   const { signup } = useAuth();
   const [error, setError] = useState("");
   const navigate = useNavigate();

   async function handleSubmit(e) {
      e.preventDefault();

      if (passwordRef.current.value !== passwordConfirmRef.current.value) {
         return setError("Passwords do not match");
      }

      try {
         setError("");
         await signup(emailRef.current.value, passwordRef.current.value);
         navigate("/");
      } catch (e) {
         let error = e.message.split("Firebase: ");
         error = error[1].split(".");
         setError(error[0] + ".");
      }
   }

   return (
      <div
         style={{
            width: "30%",
            margin: "auto",
            marginTop: "7%",
            marginBottom: 50,
            borderRadius:"2%",
           boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
           padding:"5%"
         }}
      >
         <Card  >
            <Card.Body  >
               <h2 className="text-center mb-4">Sign Up</h2>
               {error && <Alert variant="danger">{error}</Alert>}
               <Form onSubmit={handleSubmit}>
                  <Form.Group id="email">
                     <Form.Label>Email</Form.Label>
                     <Form.Control type="email" ref={emailRef} required />
                  </Form.Group>
                  <Form.Group id="password">
                     <Form.Label>
                        Password <span>(Atleast 6 characters long)</span>
                     </Form.Label>
                     <Form.Control type="password" ref={passwordRef} required />
                  </Form.Group>
                  <Form.Group id="password-confirm">
                     <Form.Label>Password Confirmation</Form.Label>
                     <Form.Control
                        type="password"
                        ref={passwordConfirmRef}
                        required
                     />
                  </Form.Group>
                  <Button
                     className="w-100"
                     type="submit"
                     style={{
                        backgroundColor: "rgb(244,28,178)",
                        border: "none",
                        marginTop: "2%",
                     }}
                  >
                     Sign Up
                  </Button>
               </Form>
            </Card.Body>
         </Card>
         <div className="w-100 text-center mt-2">
            Already have an account? <Link to="/login">Log In</Link>
         </div>
      </div>
   );
}
