import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import * as React from "react";
import {useState} from 'react'
import logoNovo from "../../public/assets/Paragon/LogoNovoClub.png"

interface IFormParagonProps {}

const FormParagon: React.FunctionComponent<IFormParagonProps> = (props) => {
    const [kata, setKata] = useState("")
    const [isPending, setIsPending] = useState(false)
    const [berhasil, setBerhasil] = useState(false)

    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        try {
            const postData = {
                kata,
            };

            const postResponse = await axios.post("https://sodindonesia.com:3001/api/data3", postData, {
                headers: { "Content-Type": "application/json" },
            });

            if (postResponse.status === 201) {
              setBerhasil(true)
              setKata("")
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsPending(true);
        }
    }

  return (
    <>
      <div className="containerFormParagon">
        <div className="containerInputFormParagon">
          <Image className="imageNovo" src={logoNovo} alt="logoNovo"></Image>
          <form className="formParagon" onSubmit={handleSubmit}>
            <h1>What is your opinion?</h1>

            <div className="inputWrapper">
            <input 
                  type="text" 
                  required value={kata} 
                  placeholder="Enter a word..." 
                  onChange={(e) => setKata(e.target.value)}
                  maxLength={40}/>
            
            <p>You can submit more than one response.</p>
            { berhasil ? (<p>Thankyou, we receive your input! Add another if you want</p>) : null }
            <button className="submit-button">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormParagon;
