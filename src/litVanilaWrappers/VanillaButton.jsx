import "../litComponents/simple-btn";

export const VanillaButon = ({ onClick, children }) => {
  return <simple-btn onClick={onClick}>{children}</simple-btn>;
};
