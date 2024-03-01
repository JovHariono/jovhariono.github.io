import axios from 'axios';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Paragon } from '../type';

interface IParagonListProps {
}

const ParagonList: React.FunctionComponent<IParagonListProps> = (props) => {
  const [data, setData] = useState<Paragon[]>([]);
  const [isLoaded, setIsLoaded] = useState(Boolean);

  useEffect(() => {
    if (!isLoaded) {
      axios
        .get(`https://sodindonesia.com:3001/api/data3?_sort=id&_order=desc&_limit=10`)
        .then((res) => {
          setData(res.data);
          setIsLoaded(true);
        })
        .catch((err) => console.log(err));
      setInterval(() => {
        axios
          .get(`https://sodindonesia.com:3001/api/data3?_sort=id&_order=desc&_limit=10`)
          .then((res) => {
            setData(res.data);
          })
          .catch((err) => console.log(err))
      }, 20000);
    }
  }, []);

  return (
    <>
      <div className='scroll-list'>
        <div className="scroll">
          <div className="RightToLeft">
            <p>{data.length > 0 ? data[0].kata : ""}</p>
          </div>
          <div className="LeftToRight">
            <p>{data.length > 1 ? data[1].kata : ""}</p>
          </div>
          <div className="RightToLeft">
            <p>{data.length > 2 ? data[2].kata : ""}</p>
          </div>
          <div className="LeftToRight">
            <p>{data.length > 3 ? data[3].kata : ""}</p>
          </div>
          <div className="RightToLeft">
            <p>{data.length > 4 ? data[4].kata : ""}</p>
          </div>
          <div className="LeftToRight">
            <p>{data.length > 5 ? data[5].kata : ""}</p>
          </div>
          <div className="RightToLeft">
            <p>{data.length > 6 ? data[6].kata : ""}</p>
          </div>
          <div className="LeftToRight">
            <p>{data.length > 7 ? data[7].kata : ""}</p>
          </div>
          <div className="RightToLeft">
            <p>{data.length > 8 ? data[8].kata : ""}</p>
          </div>
          <div className="LeftToRight">
            <p>{data.length > 9 ? data[9].kata : ""}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ParagonList;