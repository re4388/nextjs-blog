import { format, parseISO } from 'date-fns';

type DateInput = { dateString: string };

export default function Date({ dateString }: DateInput) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}
