import "../litComponents/simple-btn";

export const VanillaButon = ({ onClick, name }) => {
  return <simple-btn onClick={onClick}>{name}</simple-btn>;
};
