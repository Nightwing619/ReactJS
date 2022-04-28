import React from "react"
import Star from "./components/Star";
export default function App() {
    const [contact,setContact]=React.useState({
        firstName: "Rakshit",
        lastName: "Raj",
        phone: "(+91) 6203648649",
        email: "Rakshitraj97@gmail.com",
        isFavorite: false
    })
    function toggleFunction(){
        setContact(prevContact => ({
            ...prevContact,
            isFavorite: !prevContact.isFavorite
        }))
    }
    return (
        <main>
            <article className="card">
                <img src="../images/man.png" className="card--image"/>
                <div className="card--info">
                    <Star isFilled={contact.isFavorite} handleClick={toggleFunction} />
                    <h2 className="card--name"> {contact.firstName} {contact.lastName} </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
            </article>
        </main>
    )
}
