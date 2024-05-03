"use client";
import useKeepLogin from "@/hooks/api/auth/useKeepLogin";
import { PropsWithChildren, useEffect } from "react";

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { keeplogin } = useKeepLogin();

  useEffect(() => {
    keeplogin();
  }, []);

  return <>{children}</>;
};
