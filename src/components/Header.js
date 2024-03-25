import React from "react";
import { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsiubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    console.log("Button being clickec");
    dispatch(toggleGptSearchView());
  };

  return (
    <div className="w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img
        className="w-44 px-8 py-2  x-auto md:mx-0"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      ></img>
      {user && (
        <div className="flex p-4">
          <button
            className="py-2 bg-purple-800 mx-4 -my-1 rounded-lg text-white px-4"
            onClick={handleGptSearchClick}
          >
            GPT Search
          </button>
          <img
            className="w-8 h-8"
            alt="usericon"
            src="https://occ-0-1327-2433.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXYofKdCJceEP7pdxcEZ9wt80GsxEyXIbnG_QM8znksNz3JexvRbDLr0_AcNKr2SJtT-MLr1eCOA-e7xlDHsx4Jmmsi5HL8.png?r=1d4"
          />
          <button className="text-white" onClick={handleSignOut}>
            (Sign out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
