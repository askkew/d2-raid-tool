import { useEffect, useState } from 'react';
import { Linking } from 'react-native';

const useBungieAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const initiateAuth = async () => {
    const clientId = 'YOUR_CLIENT_ID';
    const redirectUrl = 'YOUR_REDIRECT_URL';
    const authUrl = `https://www.bungie.net/en/OAuth/Authorize?client_id=${clientId}&response_type=code&state=random_state&redirect_uri=${redirectUrl}`;

    try {
      const supported = await Linking.canOpenURL(authUrl);

      if (!supported) {
        throw new Error('Could not open the authorization URL');
      }

      setIsLoading(true);

      await Linking.openURL(authUrl);

      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const handleOAuthResponse = async () => {
      const url = await Linking.getInitialURL();

      if (url) {
        const code = new URL(url).searchParams.get('code');

        if (code) {
          // Perform the necessary steps to exchange the code for an access token
          // and handle the authentication process
          // This code block will execute when the app is opened with the redirect URL
        }
      }
    };

    handleOAuthResponse();
  }, []);

  return { isLoading, error, initiateAuth };
};

export default useBungieAuth;
