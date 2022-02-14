const daysText = [
  'Domingo',
  'Lunes',
  'Marte',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sabado',
];

const monthText = [
  'Ene',
  'Feb',
  'Mar',
  'Abr',
  'May',
  'Jun',
  'Jul',
  'Ago',
  'Set',
  'Oct',
  'Nov',
  'Dic',
];

const hourAMPM = [
  '12',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
];

const dateFormatter = (stringDate, time) => {
  const date = new Date(stringDate);
  const [hours, minutes] = time.split(':');
  return `${daysText[date.getDay()]} ${date.getDate() + 1} ${
    monthText[date.getMonth()]
  } - ${hourAMPM[parseInt(hours)]}:${minutes} ${
    parseInt(hours) >= 11 ? 'PM' : 'AM'
  }`;
};

export default dateFormatter;
