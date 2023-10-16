import { RotatingLines } from 'react-loader-spinner';

const Loader = () => {
  return (
    <span className="loader">
      <RotatingLines strokeColor="#04ff00"></RotatingLines>
    </span>
  );
};

export default Loader;
