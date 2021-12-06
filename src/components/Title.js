import "./Title.css";

export default function Title({ children, className = "title-block" }) {
  return <div className={className}>{children}</div>;
}
