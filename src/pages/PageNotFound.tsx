import HomeLink from '../components/Navigation/HomeLink';

function PageNotFound() {
  return (
    <div className="w-full h-full bg-orange-300 flex flex-col justify-center items-center">
      <div className="bg-purple-600 rounded p-10 m-4">
        <h1 className="font-bold text-md">Oops!</h1>
        <p className="text-white text-md">This page does not exist!</p>
      </div>
      <HomeLink />
    </div>
  );
}

export default PageNotFound;
