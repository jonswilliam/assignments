import React from "react"

export default function EditForm({ editedMeme, setEditedMeme, onSaveChanges, onCancel }) {
    function handleInputChange(event) {
        const {name, value} = event.target
        setEditedMeme(prevEditedMeme => ({
            ...prevEditedMeme,
            [name]: value
        }))
    }

    function saveChanges() {
        const updatedMeme = {
            ...editedMeme,
        }
        onSaveChanges(updatedMeme)
    }
  
    return (
      <div className="edit--form">
        <input
          type="text"
          placeholder="Top text"
          className="form--input"
          name="topText"
          value={editedMeme.topText}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="form--input"
          name="bottomText"
          value={editedMeme.bottomText}
          onChange={handleInputChange}
        />
        <div className="edit--buttons">
            <button
                className="edit--save"
                onClick={saveChanges}
            >
                SAVE
            </button>
            <button
                className="edit--cancel"
                onClick={onCancel}
            >
                CANCEL
            </button>
        </div>
      </div>
    )
  }