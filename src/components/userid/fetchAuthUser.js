const fetchAuthUser = async () => {
  const response = await fetch('http://localhost:3000/api/v1/users', {
    headers: { Authorization: localStorage.getItem('token') },
  });
  const data = await response.json();
  console.log(data);
  return data;
};

export default fetchAuthUser;
