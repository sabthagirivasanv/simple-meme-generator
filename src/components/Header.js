import trollFaceIcon from '../images/troll_face.svg'

export default function Header(){
    return (
        <header className="header">
            <img className="header--image" src={trollFaceIcon}/>
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    );
}