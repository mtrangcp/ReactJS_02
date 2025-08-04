let phoneBooks = [];

const addContact = (name, phone, email) => {
  let obj = new Object();
  obj.name = name;
  obj.phone = phone;
  obj.email = email;

  phoneBooks.push(obj);
};

const displayContact = (arr) => {
  arr.forEach((el) => {
    console.log(
      `Name: ${el.name} - Phone: ${el.phone} - Email: ${el.email} \n`
    );
  });
};

addContact("An", "0123456789", "an@gmail.com");
addContact("Binh", "0123456789", "binh@gmail.com");
addContact("Duong", "0123456789", "duong@gmail.com");

console.log(displayContact(phoneBooks));
