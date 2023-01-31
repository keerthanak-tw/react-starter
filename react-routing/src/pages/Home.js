import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

function HomePage() {
  // const navigate = useNavigate(); can be used to navigate programatically
  // navigate('/products');

  return (
    <>
      <h1>My Home Page</h1>
      <p>
        Go to <Link to="/products">the list of products</Link>.
      </p>
    </>
  );
}

// <a> will send HTTP request to backend where as Link will not.
export default HomePage;
