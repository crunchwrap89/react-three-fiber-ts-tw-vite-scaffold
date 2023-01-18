import { useNavigate } from 'react-router-dom';

function HomeLink() {
  const navigate = useNavigate();
  function goHome() {
    navigate('/');
  }

  return (
    <div className="cursor-pointer mb-5 p-4" onClick={goHome}>
      Go Back
    </div>
  );
}

export default HomeLink;
