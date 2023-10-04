import PropTypes from "prop-types"; // ES6

const StickyBottom = ({ children }) => {
  console.log(children);
  return (
    <div className="  md:h-screen  md:overflow-y-auto overflow-x-hidden">
      {children}
    </div>
  );
};

StickyBottom.propTypes = {
  children: PropTypes.object,
};

export default StickyBottom;
