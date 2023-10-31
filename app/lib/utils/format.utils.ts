import { BaseData, ID } from '@app/api/response.types';
import { getDateLocale } from '@app/config/translation/languages';
import { Message } from '@app/lib/types/chat.types';
import useAppStore from '@app/zustores/app.store';
import { formatDistanceToNow } from 'date-fns';
import format from 'date-fns/format';
import numbro from 'numbro';
import { FormatDateOptions } from '../types/types';

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

export const formatCurrency = (num: number | string) => {
  let cur;
  if (+num > 99999) {
    cur = numbro(num).formatCurrency({
      thousandSeparated: true,
      optionalMantissa: true,
      mantissa: 0,
      average: false,
    });
  } else {
    cur = numbro(num).formatCurrency({
      thousandSeparated: true,
      optionalMantissa: true,
      mantissa: 2,
      average: false,
    });
  }
  return cur;
};
export const formatNumber = (num: number | string) => {
  const cur = numbro(num).format({
    thousandSeparated: true,
    optionalMantissa: true,
    mantissa: 2,
    average: true,
  });
  return cur;
};

export const formatDate = (
  date?: Date,
  frmt?: string,
  options?: FormatDateOptions,
) => {
  const { dateLocale } = useAppStore.getState().language;
  const ops = frmt
    ? {
        locale: getDateLocale(dateLocale),
        ...options,
      }
    : options;
  return format(date ?? new Date(), frmt ?? 'yyyy-MM-dd', ops);
};

export const formatDurationFromNow = (
  date: Date = new Date(),
  options?: FormatDateOptions,
) => {
  const { dateLocale } = useAppStore.getState().language;
  const ops = {
    locale: getDateLocale(dateLocale),
    ...options,
  };

  return formatDistanceToNow(date ?? new Date(), ops);
};

export const getUserRoom = (id: ID) => {
  const st = 'ouruserspersonalroom';
  return st + id;
};
export const getMessageRoom = (id: ID) => {
  const st = 'ourpersonalmessage';
  return st + id;
};

export const getUnread = (data: BaseData<Message>): string => {
  const chatId = data.attributes.chat.data.id;
  const unread: any = {
    id: chatId,
    from: data.attributes.sender.data.id,
  };
  if (data.attributes.photos?.data?.length) {
    const msg = data.attributes.sender.data.attributes.name + ' send a photo';
    unread.text = msg;
  } else if (data.attributes.videos?.data?.length) {
    const msg = data.attributes.sender.data.attributes.name + ' send a video';
    unread.text = msg;
  } else {
    unread.text = data.attributes.text;
  }
  return JSON.stringify(unread);
};
