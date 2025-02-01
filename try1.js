async function fetchRandomUserData() {
  try {
    const response = await fetch('https://randomuser.me/api/');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return {
      name: data.results[0].name.first,
      email: data.results[0].email
    };
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error; // Re-throw the error to be handled by the caller
  }
}

async function displayUserData() {
  try {
    const userData = await fetchRandomUserData();
    console.log(`Name: ${userData.name}`);
    console.log(`Email: ${userData.email}`);
  } catch (error) {
    console.error('Error displaying user data:', error);
  }
}

displayUserData();