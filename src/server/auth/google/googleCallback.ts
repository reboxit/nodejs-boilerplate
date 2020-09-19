import {Context} from 'koa';
import {createUser, UserCreateRequest} from '../../../users';
import {getNewGoogleOAuth2Client} from './googleClientFactory';
import {getUserData} from './http';
import {GoogleCallbackQueryParams, GoogleUserDetailsResponseDto} from './http/models';
import {logger} from '../../../logger';

function convertToCreateRequest(data: GoogleUserDetailsResponseDto): UserCreateRequest {
  return {
    email: data.email,
    firstName: data.given_name,
    lastName: data.family_name,
    imageUrl: data.picture,
  };
}

/**
 * Creates an account for the user that has requested this API.
 *
 * Based on the code given as query param, requests a token from google.
 * Then makes a request to google's "../userinfo" REST API using this token
 * in order to retrieve the data. Finally it delegates the request to the create
 * user functionality.
 */
async function handleGoogleCallback(ctx: Context): Promise<void> {
  const code = (ctx.request.query as GoogleCallbackQueryParams).code;
  const oauth2Client = getNewGoogleOAuth2Client();
  const tokens = await oauth2Client.getToken(code);

  const accessToken: string = tokens.tokens.access_token as string;

  await getUserData(accessToken)
    .then((googleDetailsDto) => convertToCreateRequest(googleDetailsDto))
    .then((createRequest) => createUser(createRequest))
    .catch((reason) => logger.error('Failed to register user', reason));

  const {response} = ctx;
  //todo: enhance the response (handle also the failure)
  response.status = 200;
}

export {handleGoogleCallback};
