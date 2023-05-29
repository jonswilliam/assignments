import React from "react"
import BadgeList from "./BadgeList.jsx"
import "./styles.css"

export default function App() {
  const [formData, setFormData] = React.useState(
    {
      firstName: "",
      lastName: "",
      email: "",
      birthPlace: "",
      phone: "",
      favFood: "",
      comments: "Tell us about yourself"
    }
  )
  const [badges, setBadges] = React.useState([])

  function handleInputChange(event) {
    const { name, value } = event.target
    let newValue = value
    if (name === "phone") {
      newValue = value.replace(/[^0-9]/g, "")
    }
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: newValue
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    setBadges(prevBadges => [...prevBadges, formData])
    setFormData(
      {
        firstName: "",
        lastName: "",
        email: "",
        birthPlace: "",
        phone: "",
        favFood: "",
        comments: "Tell us about yourself"
      }
    )
  }

  const formattedNumber = formData.phone.replace(
    /(\d{3})(\d{3})(\d{4})/,
    "$1-$2-$3"
  )

  const submitDisabled = Object.values(formData).some((value) => value.length < 3 || value.trim() === "")

  return (
    <section>
      <form 
        onSubmit={handleSubmit}
        className="form--container"
      >
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          placeholder="First Name"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          placeholder="Last Name"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="email"
          value={formData.email}
          placeholder="Email"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="birthPlace"
          value={formData.birthPlace}
          placeholder="Place of Birth"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="phone"
          value={formattedNumber}
          placeholder="Phone Number (no dashes)"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="favFood"
          value={formData.favFood}
          placeholder="Favorite Food"
          onChange={handleInputChange}
        />
        <textarea
          name="comments"
          value={formData.comments}
          onChange={handleInputChange}
        />
        <button disabled={submitDisabled}>Submit</button>
      </form>
      <BadgeList
        badges={badges}
        formattedNumber={formattedNumber}
      />
    </section>
  )
}