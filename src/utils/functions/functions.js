export function fecha() {
  const date = new Date();
  const day = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  const hour = `${date.getHours()}:${date.getMinutes()}`;

  return {
    day,
    hour,
  };
}
