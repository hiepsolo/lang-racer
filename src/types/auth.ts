export type LoginForm = {
  email: string;
  password: string;
};

export type SignupForm = {
  email: string;
  password: string;
  name: string;
  // 0: beginner, 1: intermediate, 2: advanced
  level: string;
}

export type UserInfo = {
  level: string
}