import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { useGoogleAuth } from '../../providers/GoogleAuthProvider';
import { useRegisterContext } from '../../providers/RegisterProvider';

const GoogleAuth = ({}) => {
  const { clientId, handleLoginSuccess } = useGoogleAuth();
  const { registrationData } = useRegisterContext();

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          handleLoginSuccess(credentialResponse, registrationData);
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
