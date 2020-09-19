import axios from 'axios';
import {GoogleUserDetailsResponseDto} from './models';

function getUserData(accessToken: string): Promise<GoogleUserDetailsResponseDto> {
  return axios
    .get(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${accessToken}`)
    .then((value) => {
      return value.data as GoogleUserDetailsResponseDto;
    });
}

export {getUserData};
