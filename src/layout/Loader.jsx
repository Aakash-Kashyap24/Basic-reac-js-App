
import ClipLoader from "react-spinners/ClipLoader";
import './loader.css'



const Loader = () => {

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  return (
    <div className="Loader ">
      <ClipLoader color="#000" size={200} />
    </div>
  );
};

export default Loader;