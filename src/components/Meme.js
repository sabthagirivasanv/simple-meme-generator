import React from "react";

/**
 * Challenge:
 * As soon as the Meme component loads the first time,
 * make an API call to "https://api.imgflip.com/get_memes".
 *
 * When the data comes in, save just the memes array part
 * of that data to the `allMemes` state
 *
 * Think about if there are any dependencies that, if they
 * changed, you'd want to cause to re-run this function.
 *
 * Hint: for now, don't try to use an async/await function.
 * Instead, use `.then()` blocks to resolve the promises
 * from using `fetch`. We'll learn why after this challenge.
 */
export default function Meme(){
    const [allMemesData, setAllMemesData] = React.useState([]);
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: ""
    })

    React.useEffect(function(){
        console.log("effect ran")
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemesData(data))
    }, [])

    function getMemeImage() {
        const memes = allMemesData.data.memes;
        let randomIndex = Math.floor(Math.random() * memes.length);
        setMeme(prevState => {
            return {
                ...prevState,
                randomImage: memes[randomIndex].url
            }
        });
    }

    function handleOnChange(event){
        const {name, value, type} = event.target
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }

    return (
        <main>
            <div className="form">
                <input type="text"
                       placeholder="Top Text"
                       value={meme.topText}
                       className="form--input"
                       onChange={handleOnChange}
                       name="topText"

                />
                <input type="text"
                       placeholder="Bottom Text"
                       value={meme.bottomText}
                       className="form--input"
                       onChange={handleOnChange}
                       name="bottomText"
                />
                <button className="form--button" onClick={getMemeImage}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img className="meme--image" src={meme.randomImage}/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>

            </div>
        </main>
    )
}