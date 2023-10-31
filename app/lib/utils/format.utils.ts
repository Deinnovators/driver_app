import { formatDistanceToNow } from 'date-fns';
import format from 'date-fns/format';

export const formatChar = (str?: string, limit = 10): string => {
  if (!str) {
    return '';
  }
  if (limit === 0) {
    return str;
  }
  if (str.length <= limit) {
    return str;
  }
  const strArr = str.split(' ');
  const newStr: string[] = [];
  strArr.reduce((acc, cur) => {
    if (acc + cur.length <= limit) {
      newStr.push(cur);
    }
    return acc + cur.length;
  }, 0);
  return newStr.join(' ') + '...';
};

export const formatDate = (date?: Date, frmt?: string, options?: any) => {
  const ops = frmt
    ? {
        ...options,
      }
    : options;
  return format(date ?? new Date(), frmt ?? 'yyyy-MM-dd', ops);
};

export const formatDurationFromNow = (
  date: Date = new Date(),
  options?: any,
) => {
  const ops = {
    ...options,
  };

  return formatDistanceToNow(date ?? new Date(), ops);
};
