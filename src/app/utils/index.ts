import { ArtWork } from '../models/artwork';

export const getStyleTitles = (data: ArtWork[]) => {
  const arrObj: string[] = [];
  data.map((v: ArtWork) => {
    if (v.style_titles.length > 0) {
      const str = v.style_titles.toString();
      const arr = str.split(',');
      if (arr.length > 1) {
        arr.map((d: string) => arrObj.push(d));
      } else {
        arrObj.push(str);
      }
    }
  });

  const uniqueElements = [...new Set(arrObj)];

  return uniqueElements.map((element) => {
    const c = arrObj.filter((el) => el === element).length;
    const obj = {
      value: element,
      name: `${element} (${c})`,
    };
    return obj;
  });
};

export const checkDateMatches = (start: number, end: number) => {
  if (start === end) {
    return start;
  }
  return `${start} - ${end}`;
};

export const getFilterData = (data: ArtWork[], values: string[]) => {
  return data.filter((v: ArtWork) => {
    const data = v.style_titles.filter((a) => values.includes(a));
    if (data.length > 0) return data;
    return;
  });
};

export const stopLoading = () => {
  setTimeout(() => {
    return false;
  }, 1000);
};
