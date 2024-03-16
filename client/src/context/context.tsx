import React, { createContext, useReducer } from 'react';

interface Props {
  children: React.ReactNode;
}

type State = {
  theme: string;
  advanceOptionsChecked: boolean;
};
type Action = { type: string; payload: any };

const cachedUserData = JSON.parse(
  localStorage.getItem('cachedUserSettings') as string
);

const defaultValue: State = {
  theme: cachedUserData?.darkMode ? 'dark' : 'light',
  advanceOptionsChecked: cachedUserData ? cachedUserData?.autAdvance : true,
};

if (defaultValue.theme == 'dark') {
  document.body.className = defaultValue.theme;
}

let currentTheme: string;

const StateContext = createContext<State | null>(defaultValue);

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'SET_THEME': {
      currentTheme = action.payload;
      document.body.className = currentTheme;
      return {
        ...state,
        theme: currentTheme,
      };
    }
    case 'SET_ATM_ADVANCE': {
      return { ...state, advanceOptionsChecked: action.payload };
    }
    default:
      return state;
  }
};
const StateContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, defaultValue);
  const value = { state, dispatch } as unknown as State;

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};

export { StateContext, StateContextProvider };
