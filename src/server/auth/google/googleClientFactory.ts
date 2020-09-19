import {google} from 'googleapis';

const YOUR_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const YOUR_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const YOUR_REDIRECT_URL = process.env.APP_BASE_URL + '/google-callback';

export const getNewGoogleOAuth2Client = () =>
  new google.auth.OAuth2(YOUR_CLIENT_ID, YOUR_CLIENT_SECRET, YOUR_REDIRECT_URL);
