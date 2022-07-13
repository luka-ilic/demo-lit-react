import '../litComponents/simple-btn';
const VanillaButton = ({ handleClick, placeHolder }) => {
  return <simple-btn onClick={handleClick}>{placeHolder}</simple-btn>;
};

export default VanillaButton;
