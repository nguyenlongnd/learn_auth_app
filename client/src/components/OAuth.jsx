import Button from "react-bootstrap/esm/Button";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase";
import { useSignInGoogleMutation } from "../store/services/authService";
import { useNavigate } from "react-router-dom";

const OAuth = () => {
  const navigate = useNavigate()
  const auth = getAuth(app);
  const [signInGoogle] = useSignInGoogleMutation()
  const provider = new GoogleAuthProvider();
  const handleSignInGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const payload = {
        userName: result?.user?.displayName,
        email: result?.user?.email,
        photoURL: result?.user?.photoURL,
      }
      await signInGoogle(payload)
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Button
        variant="danger"
        className=" w-full mt-2"
        onClick={handleSignInGoogle}
      >
        Continue with google
      </Button>
    </div>
  );
};

export default OAuth;
