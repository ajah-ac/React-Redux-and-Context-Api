// TODO: Import useTheme from the correct path
/* YOUR CODE HERE */
import { useTheme } from "./ThemeContext";
export default function ToggleButton() {
  // TODO: Use the useTheme hook to get `theme` and `toggleTheme`
  /* YOUR CODE HERE */
  const {theme,toggleTheme}=useTheme()

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: "10px 24px",
        fontSize: "16px",
        cursor: "pointer",
        borderRadius: "8px",
        border: "2px solid #555",
        // TODO: white background if light, "#333" if dark
        backgroundColor:theme==='light'?'white':'black',
        color:theme==='light'?'black':'white'
      }}
    >
      { <h1>Hello how are you</h1>/* TODO: "Switch to Dark 🌙" if ligtht, "Switch to Light ☀️" if dark */}
      {/* YOUR CODE HERE */}
    </button>
  );
}
