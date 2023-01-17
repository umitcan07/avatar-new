import hash from "./hash";
import colors from "./colors";

function Avatar(props: { name?: string; size?: number; initials?: string }) {
  // set default values for props

  let name = props.name || "";
  let size = props.size || 32;
  let initials = props.initials || "";

  name = name.trim();
  initials = initials.trim();
  initials = initials.length > 2 ? initials.slice(0, 2) : initials;
  let init: string = "W"; // default to "W" if no name or initials
  init = initials ? initials : name.slice(0, 2).toUpperCase();

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
      {init}
    </div>
  );
}

export default Avatar;
