import React from "react"

export default function MemeList({ savedMemes, onDelete, onEdit }) {
  return (
    <div>
      {savedMemes.map((meme, index) => (
        <div className="saved--meme" key={index}>
          <img
            src={meme.randomImage}
            className="saved--image"
          />
          <h2 className="saved--text top">{meme.topText}</h2>
          <h2 className="saved--text bottom">{meme.bottomText}</h2>
          <div>
            <button
              className="saved--button"
              onClick={() => onDelete(index)}
            >
              DELETE
            </button>
            <button
              className="saved--button"
              onClick={() => onEdit(index)}
            >
              EDIT
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}