"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type ToastType = "success" | "error" | "info";

interface Toast {
  id: number;
  message: string;
  type: ToastType;
}

interface ToastContextType {
  showToast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = (message: string, type: ToastType = "info") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000); // auto hide after 3 sec
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {/* DaisyUI Toast Container */}
      <div className="toast toast-top toast-end z-2000">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`alert ${
              toast.type === "error"
                ? "alert-error"
                : toast.type === "success"
                ? "alert-success"
                : "alert-info"
            }`}
          >
            <span>{toast.message}</span>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used inside ToastProvider");
  return ctx;
};
