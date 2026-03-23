// TODO: Import useTheme from the correct path
/* YOUR CODE HERE */
import { useTheme } from "./ThemeContext";
export default function ThemedBox() {
  // TODO: Use the useTheme hook to get `theme`
  /* YOUR CODE HERE */

  const {theme,toggleTheme}=useTheme()
  return (
    <div
      style={{
        marginTop: "32px",
        padding: "40px",
        borderRadius: "12px",
        textAlign: "center",
        // TODO: "#f9f9f9" if light, "#1a1a1a" if dark
       backgroundColor:theme==='light'?'white':'black',
        color:theme==='light'?'black':'white',
        border: "1px solid #ccc",
      }}
    >
      <p style={{ fontSize: "18px" }}>
        {/* TODO: "Light Mode ☀️ — bright and clean!" if light */}
        {/*       "Dark Mode 🌙 — easy on the eyes!" if dark  */}
        {/* YOUR CODE HERE */}
      </p>

      <small style={{ opacity: 0.5 }}>
        {/* TODO: Show → Current theme: light (or dark) */}
        {/* YOUR CODE HERE */}
      </small>
    </div>
  );
}
