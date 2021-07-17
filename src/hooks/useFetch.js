import { useQuery } from 'react-query';

export default useFetch = (queryName, api) => {
  const { isLoading, error, data } = useQuery(queryName, () =>
    fetch(api).then(res => res.json())
  );

  return { isLoading, error, data };
};
