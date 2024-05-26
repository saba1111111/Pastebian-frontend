import { addDaysToDate, addHoursToDate } from '../../../shared/helpers';
import { ISelectInputParameter } from '../../../shared/interfaces';

export const ContentExpireTimeOptions: ISelectInputParameter[] = [
  {
    label: 'Expire in one hour',
    value: addHoursToDate(1),
  },
  {
    label: 'Expire in one day',
    value: addDaysToDate(1),
  },
  {
    label: 'Expire in one week',
    value: addDaysToDate(7),
  },
  {
    label: 'Expire in 21 days',
    value: addDaysToDate(21),
  },
];
