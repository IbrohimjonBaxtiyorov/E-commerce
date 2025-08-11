import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function validation(obj) {
  if (obj.email?.trim().length == 0) {
    return {
      target: "email",
      message: "Email is required",
    };
  }

  if (obj.password?.trim().length == 0) {
    return {
      target: "password",
      message: "Password is required",
    };
  }

  return false;
}

export function validation2(obj) {
  if (obj.email.trim().length == 0) {
    return {
      target: "email",
      message: "Email is required",
    };
  }

  if (obj.userName.trim().length == 0) {
    return {
      target: "userName",
      message: "Username is required",
    };
  }

  if (obj.password.trim().length == 0) {
    return {
      target: "password",
      message: "Password is required",
    };
  }

  return false;
}
