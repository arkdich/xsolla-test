export function filterEvents(events, options) {
  return events.filter((event) => {
    if (options.city !== 'all') {
      if (event.city.toLowerCase() !== options.city) return false;
    }

    if (options.month !== 'all') {
      const month = Number.parseInt(event.date.split('.')[1]) - 1;

      if (options.month !== getMonthByIndex(month, true)) return false;
    }

    return true;
  });
}

export function getMonthByIndex(index, lowerCase) {
  if (typeof index !== 'number') throw Error('Index must be of type number');
  if (index < 0 || index > 11) throw Error('Index is out of range');

  const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ][index];

  return lowerCase ? month.toLowerCase() : month;
}
