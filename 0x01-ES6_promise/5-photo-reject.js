export default function uploadPhoto(filename) {
    return Promise.reject(Error(`${filename} jpg cannot be processed`));
  }
