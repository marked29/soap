import { useState, useEffect } from 'react';
import Login from '@react-login-page/base';
import isEmpty from 'lodash/isEmpty';

type LoginData = {
  [key: string]: any;
  timeObject?: Date;
  expiresIn?: number;
};

const Demo = () => {
  const [data, setData] = useState<LoginData>({});
  const [isLoginExpired, setIsLoginExpired] = useState(false);

  const handle = (even: any) => {
    even.preventDefault();
    const formData = new FormData(even.target);
    const timeObject = new Date();
    const data = Object.fromEntries(formData);

    setData({ ...data, timeObject: timeObject, expiresIn: 10000 });
  };

  useEffect(() => {
    if (isEmpty(data)) {
      return;
    }

    setIsLoginExpired(false);
    const timer = setTimeout(() => {
      setData({});
      setIsLoginExpired(true);
    }, data.expiresIn);

    return () => {
      clearTimeout(timer);
    };
  }, [data]);

  return (
    <form onSubmit={handle}>
      <Login style={{ minHeight: 380 }} />
      <h3>Result:</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      {isLoginExpired && <>Login is expired</>}
    </form>
  );
};

export default Demo;
