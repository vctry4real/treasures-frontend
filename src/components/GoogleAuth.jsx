import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { useGoogleAuth } from '../providers/GoogleAuthProvider';

const GoogleAuth = ({ handleNext }) => {
  const { clientId, handleLoginSuccess } = useGoogleAuth();
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log('Heeew');

          handleLoginSuccess(credentialResponse);
          handleNext();
        }}
        onError={() => {
          console.log('Login Failed');
        }}
        type="outline"
        size="large"

        // useOneTap
        // auto_select
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleAuth;
