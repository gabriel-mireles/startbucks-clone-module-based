import './Heading.scss'

export const Heading = ({ heading, color }) => {
  return <div className="heading" style={color}>{heading}</div>;
};
