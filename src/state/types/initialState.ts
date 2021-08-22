export interface User {
  jwt: string;
  loading: boolean;
  error: string;
}

export default interface InitialState {
  user: User;
}
