
type DropdownProps = {
    label: string;
    value: string;
    changeHandler: (value: string) => void;
    options: string[];
}
import "./style.css";
export default function Dropdown(props: DropdownProps) {
    const { label, value, changeHandler, options } = props;
    return (
        <div className="dropdown-wrapper">
            <label className="category">{label}</label>

            <select
                className="dropdown-select"
                value={value}
                onChange={(e) => changeHandler(e.target.value)}
            >
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}