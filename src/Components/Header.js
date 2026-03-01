import { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/UserSlice";
import { gptSearchPage } from "../utils/GptSlice";
import { showHomeSection, showmovieSection, showtvShowsSection } from "../utils/SectionsSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const gptPage = useSelector((store) => store.gpt?.openGptPage);
  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, username: displayName }));
        navigate("/home");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubcribe();
  }, []);
  const handelSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  const handleGptSearch = () => {
    dispatch(gptSearchPage());
  };
  return (
    <div className="fixed bg-gradient-to-b from-black z-20 w-full flex justify-between items-center ">
      <div className="flex items-center">
        <img
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-01-09/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
          className="w-52 px-6 py-2"
        />
        {user &&
          !gptPage &&(
            <ul className=" flex ">
              <Link onClick={() => dispatch(showHomeSection())} to="/home">
                <li className="py-2 mr-3 px-4 text-white rounded-lg font-semibold text-lg hover:bg-gray-300 hover:text-black">
                  Home
                </li>
              </Link>
              <Link to="/movies" onClick={() => dispatch(showmovieSection())}>
                <li className="py-2 mr-3 px-4 text-white rounded-lg font-semibold text-lg hover:bg-gray-300 hover:text-black">
                  movies
                </li>
              </Link>
              <Link
                to="/tvshows"
                onClick={() => dispatch(showtvShowsSection())}
              >
                <li className="py-2 mr-3 px-4 text-white rounded-lg font-semibold text-lg hover:bg-gray-300 hover:text-black">
                  TvShows
                </li>
              </Link>
            </ul>
          )}
      </div>

      <div>
        {user && (
          <>
            <button
              className="bg-blue-500 text-white p-2 mx-6 rounded-lg "
              onClick={handleGptSearch}
            >
              {!gptPage ? "GPT Search" : "Homepage"}
            </button>
            <button
              className="p-2 bg-red-600 text-white rounded-lg mr-10"
              onClick={handelSignout}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
