import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Jane Doe',
    email: 'Jane@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Darius Farcasanu',
    email: 'darius@example.com',
    password: bcrypt.hashSync('gexanu', 10),
  },
];

export default users;
