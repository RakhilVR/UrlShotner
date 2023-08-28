import React, { useState } from 'react'
import "./index.css"
import Button from 'react-bootstrap/Button';
import axios from 'axios';


function Urlshorter() {

    const [inputdata, setInputdata] = useState("");
    const [generatedurl, setGeneratedurl] = useState("");

    console.log("generated url ", generatedurl);

    const getInputurl = (e) => {
        // console.log(e.target.value);
        setInputdata(e.target.value)
    }

    const dataThatSend = { "url": inputdata };
    // console.log(dataThatSend);

    // const lastData = JSON.stringify(dataThatSend);
    // console.log(lastData);

    const generater = async () => {
        await axios.post("http://localhost:8000/shortUrl", dataThatSend).then(async (res) => {

            const shortUrl = res.data;
            console.log("ress", shortUrl);
            setGeneratedurl(`http://localhost:8000/${shortUrl}`)


        })
    }
    return (
        <>
            <h1 className='URL' >URL Shortner</h1>
            <div class="input-wrapper">
                <button class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="25px" width="25px">
                        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="#fff" d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"></path>
                        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="#fff" d="M22 22L20 20"></path>
                    </svg>
                </button>
                <input placeholder="Enter Your URL..." class="input" name="text" onChange={getInputurl} type="text" />


            </div>

            <Button onClick={generater} className='btnn' as="a" variant="success">
                Shorten
            </Button>

            {/* <h2>{generatedurl}</h2> */}
            <a className='tag_have_link' target="_blank" href={generatedurl} rel="noreferrer">{generatedurl}</a>
        </>
    )
}

export default Urlshorter
