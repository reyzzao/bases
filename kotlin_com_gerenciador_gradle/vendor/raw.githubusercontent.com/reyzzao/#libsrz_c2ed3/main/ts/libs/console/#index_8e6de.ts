export const Log = (...data: any[]): void => {
  if (data.length === 1 && typeof data[0] === 'object' && data[0] !== null) {
    console.dir(data[0], { depth: null });
  } else {
    console.log(...data);
  }
}