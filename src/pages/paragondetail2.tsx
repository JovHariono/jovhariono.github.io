import axios from "axios";
import { useRouter } from "next/router";
import * as React from "react";
import { useEffect, useState } from "react";
import { Paragon } from "../type";

interface IParagonDetailProps {}

const ParagonDetail: React.FunctionComponent<IParagonDetailProps> = (props) => {
  const router = useRouter();
  const [data, setData] = useState<Paragon | null>(null);
  const [isPending, setIsPending] = useState(true)

  const { id } = router.query;

  useEffect(() => {
    axios
      .get(`https://sodindonesia.com:3001/api/data2/${id}`)
      .then((res) => {
        setData(res.data)
        setIsPending(false)
    })
      .catch((err) => console.log(err));
  }, [id]);

  const handleDelete = () => {
    const deleteKata = window.confirm("Are you sure want to delete?")

    if(deleteKata){
        axios
            .delete(`https://sodindonesia.com:3001/api/data2/${id}`)
            .then((res) => {
                if(res.status === 200){
                    alert("berhasil delete data")
                    router.push("/paragonlistall")
                }
            })
            .catch((err) => console.log(err))
    }

  }

  return (
    <>
      <div>
        <h2>Paragon Detail</h2>
        {isPending && <div>Loading...</div>}
        { data && <div>{data.kata}</div>}
        <button onClick={handleDelete}>Delete</button>
      </div>
    </>
  );
};

export default ParagonDetail;
