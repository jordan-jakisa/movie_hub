interface Props {
  children: string;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "link";
  onClick: () => void;
}

function Button({ onClick, children, color = "primary" }: Props) {
  return (
    <button className={"btn btn-" + color} onClick={() => onClick()}>
      {children}
    </button>
  );
}

export default Button;
