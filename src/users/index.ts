import {create} from './createUser';

export function createUser(userRequest: UserCreateRequest): void {
  return create(userRequest);
}

export interface UserCreateRequest {
  email: string;
  firstName?: string;
  lastName?: string;
  imageUrl?: string;
}
