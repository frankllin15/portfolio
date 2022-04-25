import { useTheme } from "../context/theme/ThemeProvider";
import { MoonIcon } from "./icons/MoonIcon";
import { SunIcon } from "./icons/SunIcon";

type Props = {
  className?: string;
};
export const SwitchTheme: React.FC<Props> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className={className}>
      {theme === "light" ? (
        <MoonIcon className="h-8 w-8" />
      ) : (
        <SunIcon className="h-8 w-8" />
      )}
    </button>
  );
};
