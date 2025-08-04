const user = {
  name: "Jonh",
  age: 25,
  location: {
    city: "Hanoi",
    country: "Vietnam",
  },
  contact: {
    email: "jonh@example.com",
    phone: "0123456789",
  },
  job: {
    title: "Developer",
    company: "Tech Corp",
  },
};

const user1 = {
  name: "Jonh",
  age: 25,
  location: {
    city: "Hanoi",
    country: "Vietnam",
  },
};

const displayUserInfo = (user) => {
  let {
    name,
    age,
    location: { city, country },
  } = user;

  let { email = "unknown", phone = "unknown" } = user.contact || {};
  let { title = "unknown", company = "unknown" } = user.job || {};

  return `${name} is ${age} years old, lives in ${city}, ${country}, works as ${title} at ${company}, and can be contacted via ${email} or ${phone}.`;
};

console.log(displayUserInfo(user));
console.log(displayUserInfo(user1));
