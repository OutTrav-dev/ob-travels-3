"use client";

import React, { createContext, useReducer, useContext } from "react";
import type { HomePage } from "@/types/homePage.types";

// -------------------- State Types --------------------

export interface AppState {
  homePage: HomePage | null;
}

export type AppAction = { type: "SET_HOME_PAGE"; payload: HomePage };

// -------------------- Reducer --------------------

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case "SET_HOME_PAGE":
      return {
        ...state,
        homePage: action.payload, // FULL REPLACE
      };

    default:
      return state;
  }
}

// -------------------- Context --------------------

const AppDataContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
  setHomePage: (data: HomePage) => void;
} | null>(null);

// -------------------- Provider --------------------

export const AppDataProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(appReducer, {
    homePage: null,
  });

  const setHomePage = (data: HomePage) => {
    dispatch({ type: "SET_HOME_PAGE", payload: data });
  };

  return (
    <AppDataContext.Provider value={{ state, dispatch, setHomePage }}>
      {children}
    </AppDataContext.Provider>
  );
};

// -------------------- Hook --------------------

export const useAppData = () => {
  const ctx = useContext(AppDataContext);
  if (!ctx) throw new Error("useAppData must be used inside <AppDataProvider>");
  return ctx;
};
