import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { app } from "../firebase";
import { useNavigate } from "react-router-dom";

const auth = getAuth(app);

const Signup = () => {
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const navigate = useNavigate();

     const handleSignup = async () => {
          try {
               await createUserWithEmailAndPassword(auth, email, password);
               navigate("/");
          } catch (error) {
               console.error("Error signing up: ", error.message);
               alert(error.message);
          }
     };

     return (
          <div
               className="d-flex align-items-center justify-content-center min-vh-100"
               style={{
                    background: "linear-gradient(to right, #433878, #7E60BF, #E4B1F0, #FFE1FF)",
               }}
          >
               <div className="bg-white p-4 rounded shadow" style={{ width: "100%", maxWidth: "450px" }}>
                    <h1 className="text-center mb-4" style={{ fontSize: 38 }}>
                         Sign Up
                    </h1>

                    <div className="mb-3">
                         <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                         <input
                              type="email"
                              className="form-control"
                              id="exampleInputEmail1"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              aria-describedby="emailHelp"
                         />
                         <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                         <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                         <input
                              type="password"
                              className="form-control"
                              id="exampleInputPassword1"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                         />
                    </div>

                    <button
                         onClick={handleSignup}
                         className="btn btn-dark w-100" // Change to dark color for button
                    >
                         Sign Up
                    </button>

                    <div className="mt-3 text-center">
                         <p>
                              Already have an account?{" "}
                              <a href="/" className="hover:underline">Log in</a>
                         </p>
                    </div>
               </div>
          </div>
     );
};

export default Signup;
