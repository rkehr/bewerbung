import {
  min,
  max,
  isBefore,
  eachMonthOfInterval,
  startOfYear,
  endOfYear,
} from 'date-fns';

const intervalIntersection = (intervals) => {
  const intersection = intervals.reduce((intersection, val) => {
    return {
      start: max([intersection.start, val.start]),
      end: min([intersection.end, val.end]),
    };
  }, intervals[0]);
  if (isBefore(intersection.start, intersection.end)) {
    return intersection;
  } else {
    return null;
  }
};

const intervalUnion = (intervals) => {
  return intervals.reduce((totalInterval, interval) => {
    return {
      start: min([totalInterval.start, interval.start]),
      end: max([totalInterval.end, interval.end]),
    };
  }, intervals[0]);
};

const getMonthsInYear = (date) => {
  const yearInterval = {
    start: startOfYear(date),
    end: endOfYear(date),
  };
  return eachMonthOfInterval(yearInterval);
};

export { intervalIntersection, intervalUnion, getMonthsInYear };
