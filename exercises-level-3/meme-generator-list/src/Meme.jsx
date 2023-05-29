import React from "react"
import MemeList from "./MemeList.jsx"
import EditForm from "./EditForm.jsx"

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/kka0a.jpg?a467640" 
    })
    const [allMemes, setAllMemes] = React.useState([])
    const [savedMemes, setSavedMemes] = React.useState([])
    const [editIndex, setEditIndex] = React.useState(-1)
    const [editMode, setEditMode] = React.useState(false)
    const [editedMeme, setEditedMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "",
    })
    
    React.useEffect(() => {
        axios.get("https://api.imgflip.com/get_memes")
            .then(response => setAllMemes(response.data.data.memes))
            .catch(error => console.log(error))
    }, [])
      
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }
    
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    function saveMeme() {
        setSavedMemes((prevSavedMemes) => [...prevSavedMemes, meme])
    }

    function onDelete(index) {
        setSavedMemes((prevSavedMemes) => {
          const updatedMemes = [...prevSavedMemes]
          updatedMemes.splice(index, 1)
          return updatedMemes
        })
    }
    
    function onEdit(index) {
        setEditIndex(index)
        setEditMode(true)
        const selectedMeme = savedMemes[index]
        setEditedMeme({
            ...selectedMeme,
        })
    }
    
    function onCancelEdit() {
        setEditIndex(-1)
        setEditMode(false)
    }
    
    function onSaveChanges(updatedMeme) {
        setSavedMemes((prevSavedMemes) => {
            const updatedMemes = [...prevSavedMemes]
            updatedMemes[editIndex] = updatedMeme
            return updatedMemes
        });
        onCancelEdit()
    }
    
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    REFRESH MEME IMAGE
                </button>
            </div>
            <div className="meme">
                <div className="meme--container">
                    <img
                        src={meme.randomImage}
                        className="meme--image"
                    />
                    <h2 className="meme--text top">{meme.topText}</h2>
                    <h2 className="meme--text bottom">{meme.bottomText}</h2>
                </div>
            </div>
            <button 
                className="save--meme"
                onClick={saveMeme}
            >
                SAVE MEME
            </button>
            <MemeList
                savedMemes={savedMemes}
                onDelete={onDelete}
                onEdit={onEdit}
            />
            {editMode && editIndex !== -1 && (
                <EditForm
                    editedMeme={editedMeme}
                    setEditedMeme={setEditedMeme}
                    onSaveChanges={onSaveChanges}
                    onCancel={onCancelEdit}
                />
            )}
        </main>
    )
}