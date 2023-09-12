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

export const getCities = async () => {
  const res = await fetch("/api/cities");
  const data = await res.json();
  return data;
}

export const getWalkers = async () => {
  const res = await fetch("/api/walkers");
  const data = await res.json();
  return data;
}

export const addNewDog = async (newDog) => {
  await fetch("/api/dogs" , {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newDog)
  })
}

export const getWalkersByCity = async (cityId) => {
  const res = await fetch(`/api/walkers/${cityId}`);
  const data = await res.json();
  return data;
}