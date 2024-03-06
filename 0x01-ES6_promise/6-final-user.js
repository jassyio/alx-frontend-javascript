import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const values_1 = await Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]);
  const arr = [];
  for (const item of values_1) {
    arr.push({ status: item.status, value: item.value || item.reason });
  }
  return arr;
}
