import {Context} from 'koa';
import {getNewGoogleOAuth2Client} from './googleClientFactory';

const SCOPES = ['openid', 'profile', 'email'];

function generateUrl(): string {
  const oauth2Client = getNewGoogleOAuth2Client();
  return oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
}

/**
 * Generates a url to redirect the user in order to authenticate via google oAuth containing all the required keys.
 */
async function handleGoogleRegister(ctx: Context): Promise<void> {
  const url = generateUrl();
  const {response} = ctx;
  response.redirect(url);
}

export {handleGoogleRegister};
