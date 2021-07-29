import moment from 'moment';
import faker from 'faker';

const famousTunisians = [
  'Manel Amara',
  'Marwa Agrebi',
  'Maram Ben Aziza',
  'Zaza Show',
  'Sami Fehri',
  'Hedi Zaiem',
  'Music Actors',
  'Lobna Sediri',
  'Amira Al Jaziri',
  'Ramla Dhouibi	',
  'Laetitia Lo Iudice',
  'Emna Fakher	',
  'Aicha Othman',
  'Asma Othmani',
  'Karim Gharbi',
  'Faycel Lahdiri',
  'Tarek Baalouch',
  'Zahra Ben Habib',
  'Beya Zardi',
  'Lynda Toumy	',
  'Rym Ben Messaoud',
  'Nermine Sfar'
];

// TODO: HERE IS WHERE YOU NEED TO PUT THE LIST OF USERS
// { fullname, identifier, phone, birthday, added_date, parent_name }
const users = [...Array(22)].map((_, idx) => ({
  fullname: famousTunisians[idx],
  identifier: '012345678',
  phone: '97 000 000',
  birthday: moment(faker.date.between('1950-01-01', '1999-12-31')).format('YYYY-MM-DD'),
  // addedDate: moment().format('YYYY-MM-DD'),
  addedDate: moment(faker.date.between('2021-01-01', '2021-07-27')).format('YYYY-MM-DD'),
  parentName: 'X Ben Y'
}));

export default users;
