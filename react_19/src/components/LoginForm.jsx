import { useEffect } from "react";
import { useDocumentClick } from "../utils/hooks/useDocumentClick";

export function LoginForm() {
  useEffect(() => {
    const resizeEventHandler = (e) => {
      console.log("Window ViewPort resized");
    };
    window.addEventListener("resize", resizeEventHandler);

    return () => {
      console.log("unmounting login form");
      window.removeEventListener("resize", resizeEventHandler);
    };
  }, []);

  useDocumentClick();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        console.log(formData.get("username"), formData.get("password"));
      }}
    >
      <label htmlFor="username">Username</label>
      <br />
      <input
        name="username"
        id="username"
        onChange={(e) => {
          console.log("Username changed", e.target.value);
        }}
      ></input>
      <br />
      <label htmlFor="username">Password</label>
      <br />
      <input name="password" type="password" id="username"></input>
      <br />
      <button>Login</button>
    </form>
  );
}
