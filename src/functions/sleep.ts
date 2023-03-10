export default async (sec: number) => new Promise((resolve, reject) => setTimeout(() => resolve(null), sec * 1000));
