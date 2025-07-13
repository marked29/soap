import { get, set } from 'lodash';
import { useEffect, useState } from 'react';

async function getExternalData() {
  const res = await fetch('https://simple-server-pearl.vercel.app/');
  console.log('first call: ', res);

  const data = await res.text();
  console.log('data: ', data);

  return data;
}

const NicePage = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const result = getExternalData();
    if (!result) {
      return;
    }

    setData(result);
  }, []);
  return (
    <>
      <h4>Was it worth it ?</h4>
      <pre>{data}</pre>
    </>
  );
};

export default NicePage;
