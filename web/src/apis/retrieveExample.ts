export default function retrieveExample(value: string): Promise<string> {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      return resolve(value);
    }, 2000);
  });
}
