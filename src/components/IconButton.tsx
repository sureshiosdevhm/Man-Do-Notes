import "./IconButton.css";

type IconButtonProps = {
  onClick: () => void;
  icon: React.ReactNode;
};

export default function IconButton({ icon, onClick }: IconButtonProps) {
  return (
    <button onClick={onClick}>
      <div className="icon_button_card">{icon}</div>
    </button>
  );
}
