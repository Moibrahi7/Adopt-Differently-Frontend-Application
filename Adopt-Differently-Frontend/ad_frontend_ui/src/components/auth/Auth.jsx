import { useState } from "react";
import { auth } from "../../firebase/fireBaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
        <div>
            <div className="email">
                <label htmlFor="email">Sign In</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            </div>
            <div className="password">
                <label htmlFor="password">Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
            </div>
            <div className="auth-buttons">
                <button onClick={handleSignIn} className="">Sign In</button>
            </div>
        </div>
    </form>
  );
}

