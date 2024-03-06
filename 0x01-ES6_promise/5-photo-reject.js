// return Promise rejecting with  Error and the string
export default function uploadPhoto(fileName) {
  return Promise.reject(new Error(`${fileName} cannot be processed`));
}
