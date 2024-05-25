interface ButtonProps {
  types?: "button" | "submit" | "reset";
  onClick?: () => void;
  classname: string;
  Name: string;
}
function Button({ types = "button", onClick, classname, Name }: ButtonProps) {
  return (
    <button onClick={onClick} type={types} className={classname}>
      {Name}
    </button>
  );
}

export default Button;
