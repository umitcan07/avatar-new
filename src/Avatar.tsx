import hash from "./hash";
import colors from "./colors";

function Avatar(props: { name?: string; size?: number; display?: string }) {
  // set default values for props

  let name = (props.name || "?").trim().toUpperCase();
  let size = props.size || 32;
  let display = (props.display || "").trim().toUpperCase();

  // if no initials are provided, use the initials of the name up to 2 characters,
  // if the name is shorter than 2 words then use the first two letters of the name.

  if (!display) {
    if (name.split(" ").length < 2) {
      display = name.substr(0, 2);
    } else {
      display = name
        .split(" ")
        .map((word) => word[0])
        .join("")
        .substr(0, 2);
    }
  } else {
    display = display.substr(0, 2);
  }

  return (
    <div
      className="Avatar"
      style={{
        height: `${props.size}px`,
        width: `${props.size}px`,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        backgroundColor: colors[hash(name, colors.length)].background,
        color: colors[hash(name, colors.length)].accent,
        fontSize: `${(size * 14) / 32}px`,
        fontWeight: "500",
        letterSpacing: "-0.03em",
        lineHeight: "24/14em",
      }}
    >
      {display}
    </div>
  );
}

export default Avatar;
