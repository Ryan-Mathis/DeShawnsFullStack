export const getGreeting = async () => {
  const res = await fetch("/api/hello");
  return res.json();
};

export const getDogs = async () => {
  const res = await fetch("/api/dogs");
  const data = await res.json();
  return data;
}

export const getDog = async (id) => {
  const res = await fetch(`/api/dogs/${id}`);
  const data = await res.json();
  return data;
}