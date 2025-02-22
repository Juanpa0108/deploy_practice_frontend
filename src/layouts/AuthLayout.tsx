import { ReactNode } from "react";
import { Outlet } from "react-router-dom";

export const AuthLayout = ({ children }: { children?: ReactNode }) => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to right, #4A90E2, #9013FE)",
      }}
    >
      <div
        style={{
          padding: "30px",
          borderRadius: "10px",
          maxWidth: "450px",
          textAlign: "center",
          background: "white",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        {children || <Outlet />}
      </div>
    </div>
  );
};