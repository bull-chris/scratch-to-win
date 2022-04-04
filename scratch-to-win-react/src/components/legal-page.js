import React, {Component} from "react";
import '../css/legal-page.css'

class ScratchLegal extends Component {
    render() {
        return(
            <div className="legal-page">
                <div className="legal_info">
                    <h1>Legal page</h1>
                    <h2>Information We Collect from User</h2>
                    <p>when user visit our website, we collect user information.
This information may include your first and last name, username, email address, postal address, phone number and Birthdate and any other information you give us, such as to participate in our scratch and win the contest.</p>
                    <h2>What we do With Your Data</h2>
                    <p>Your personal data such as First Name, Last Name, Email, Postal Adress, Phone Number and birthdate will be used for promotional use, enhancing user experience And Promotion for our upcoming contest and offers.</p>

                    <h2>Age Restriction for Contest</h2>
                    <ul>
                        <li>In order to participate in the contest age of the user must be 16 years or more.</li>
                        <li>Users below 16 years of age cannot participate in the contest without their guardian's permission.</li>
                    </ul>

                    <h2>Chance of winning the contest</h2>
                    <ul>
                        <li>Every user has an equal chance to win prizes.</li>
                        <li>From all the participants 10% of participants will be selected by random draw for prizes.</li>
                    </ul>

                    <h2>Prize distribution</h2>
                    <ul>
                        <li>All winners of the contest must answer a skill-testing question to get their winning prizes.</li>
                        <li>All prize money will be distributed to all winning participants between 6 to 8 weeks from the winning date.</li>
                    </ul>

                    <h2>Opt-Out from our communication</h2>
                    <p>Each user can opt-out from our communication services. we mostly communicate with user in two-way (1) Message (2) Email</p>
                    <ul>
                        <li>Opt-out from Text-Message: - user easily can stop our communication and promotion message buy just replying "STOP" to any of our message.</li>
                        <li>Opt-out from email: - to unsubscribe from our email and our brand's newsletter user can click on the "Unsubscribe from this Newsletter" link on the bottom of our every email. when user clicks on link they will redirect to simple form where user have to put thier email address and press on confirm button to stop receiving our promotional newsletter.</li>
                    </ul>
                
                
                </div>
                
            </div>
        )
    }
}   

export default ScratchLegal;