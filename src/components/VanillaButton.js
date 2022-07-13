import "../litComponents/simple-btn";

export const VanillaButon = ({ onClick, action }) => {
  return <simple-btn onClick={onClick}>{action}</simple-btn>;
};
