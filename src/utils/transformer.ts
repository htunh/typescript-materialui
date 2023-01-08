import _ from 'lodash';

export const transformToAnimeChartData = (data: any) => {
  const filteredData = _.sortBy(data, 'year')
    .filter((item: Record<string, any>) => item.year)
    .map((item) => ({
      year: item.year,
      name: item.title,
    }));

  const groupedData = _.groupBy(filteredData, 'year');

  return _.entries(groupedData).map(([key, value]) => {
    return {
      year: key,
      count: value.length,
      name: value.map((item) => item.name).join(''),
    };
  });
};
