import React from "react"

export default function Form() {
  const [formData, setFormData] = React.useState(
      {
          logger: ""
      }
  )
  const handleChange = (event) => {
    const {name, value, type, checked} = event.target
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }
    })
  }
  
  return (
    <form style={{width: "100%", padding: "10px"}}>
      <fieldset>
        <legend>Select a tracker</legend>
        
        <input 
            type="radio"
            id="period"
            name="logger"
            value="period"
            checked={formData.logger === "period"}
            onChange={handleChange}
        />
        <label htmlFor="period">Period Tracker</label>
        <br />
        
        <input 
            type="radio"
            id="self-check"
            name="logger"
            value="self-check"
            checked={formData.logger === "self-check"}
            onChange={handleChange}
        />
        <label htmlFor="self-check">Self-Check Tracker</label>
        <br />
      </fieldset>
    </form>
  )
}