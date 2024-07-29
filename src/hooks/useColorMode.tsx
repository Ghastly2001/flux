import { createContext, useContext, useState } from "react";

type ColorMode = "light" | "dark";

interface IColorModeContext {
  colorMode: ColorMode;
  setColorMode: (colorMode: ColorMode) => void;
}

const ColorModeContext = createContext<IColorModeContext | undefined>(
  undefined
);

export const useColorMode = () => {
  const context = useContext(ColorModeContext);

  if (!context) {
    throw new Error("useColorMode must be used within a ColorModeProvider");
  }

  return context;
};

export const ColorModeProvider: React.FC = ({ children }: any) => {
  const [colorMode, setColorMode] = useState<ColorMode>("dark");

  return (
    <ColorModeContext.Provider value={{ colorMode, setColorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
};
