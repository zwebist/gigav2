import moment, { MomentInput } from 'moment';
export const Giga1 = 'MMM D, YYYY h:mm';

export const format = (date: MomentInput, f = Giga1) => moment(date).format(f);
