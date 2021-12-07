import "./Title.css";

type TitleProps = {
  children: React.ReactChild[];
};

export default function Title({ children }: TitleProps) {
  return <div className="title-block">{children}</div>;
}
