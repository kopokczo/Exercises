import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext({
  theme: "light",
  setTheme: (theme: string) => {},
});
const LangContext = createContext({
  theme: "pl",
  setTheme: (lang: string) => {},
});

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [lang, setLang] = useState("pl");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
    <LangContext.Provider value={{lang, setLang}}>
        {children}
    </LangContext.Provider>
  );
};

const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div>
      <p>Current Theme: {theme}</p>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </div>
  );
};
const LangSwitcher = () => {
  const { lang, setLang } = useContext(LangContext);
  return (
    <div>
      <p>Current Language: {lang}</p>
      <button onClick={() => setLang(lang === "pl" ? "en" : "pl")}>
        Toggle Language
      </button>
    </div>
  );
};

const App = () => (
  <ThemeProvider>
    <ThemeSwitcher />
  </ThemeProvider>
);

export default App;
