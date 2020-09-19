/**
 * The response model of google user info API
 * https://www.googleapis.com/oauth2/v1/userinfo
 */
interface GoogleUserDetailsResponseDto {
  id: string;
  email: string;
  verified_email: boolean;
  name?: string;
  given_name?: string;
  family_name?: string;
  picture?: string;
  locale?: string;
  hd?: string;
}

/**
 * The query params that google set on redirection url
 */
interface GoogleCallbackQueryParams {
  code: string;
  scope: string;
}

export {GoogleUserDetailsResponseDto, GoogleCallbackQueryParams};
