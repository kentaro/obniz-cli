import Login from '../obnizio/login'
import User from '../obnizio/user'
import * as Storage from '../storage'

export default async () => {
  const token = Storage.get('token');
  if (!token) {
    console.log(`Not Logged In`);
    return;
  }
  const user = await User(token);
  console.log(`Logged In User`);
  console.log(` name : ${user.name}`);
  console.log(` email: ${user.email}`);
}