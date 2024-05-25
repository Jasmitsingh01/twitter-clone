interface InputboxProps {
  value?: string;
  onChange: () => void;
  classname: string;
  label: string;
  placeholder: string;
  type: string;
  error?: string;
}
function InputBox({
  value,
  onChange,
  classname,
  label,
  placeholder,
  type,
  error = "",
}: InputboxProps) {
  return (
    <div >
      <label>{label}</label>
      <input
        type={type}
        value={value}
        className={classname}
        onChange={onChange}
        placeholder={placeholder}
      />
      <div className="text-red-500 font-semibold my-2">{error}</div>
    </div>
  );
}

export default InputBox;
