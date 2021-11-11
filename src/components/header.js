const Header = (props) => {
  const { showResults } = props;
  return (
    <div className="header">
      {!showResults && (
        <div>
          <h1>Real Estate Calculator</h1>
        </div>
      )}
      {showResults && (
        <div>
          <h1>Results</h1>
        </div>
      )}
    </div>
  );
};

export default Header;
