async function fetchProfileData() {
  const url = "./data/profile.json";
  const data = await (await fetch(url)).json();

  return data;
}
