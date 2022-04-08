import React, {Component} from "react";
import '../css/legal-page.css'

class ScratchLegal extends Component {
    render() {
        return(
            //scratch legal page
            <div className="legal-page">
                {/* scratch legal intro image */}
                <div>
                    <img width="300px" alt='Buymore Dollars Logo' src={require("../images/logo_main.png")}/>
                </div>
                {/* scratch legal information */}
                <div className="legal_info">
                    <h1>Legal Agreement</h1>
                    <h2>Conditions for Data Usage</h2>
                    <p> When visiting our website, we collect user information through the form.
                        This information may include your first and last name, username, email address, postal address, phone number and birthdate and any other information you give us, such as to participate in our Scratch to Win contest.
                    </p>
                    <h3>What we do with your Data</h3>
                    <p>Your personal data such as first name, last name, email, postal address, phone number and birthdate will be used for promotional use, enhancing user experience and for promotion for our upcoming contest and offers.</p>

                    <h3>Third-Party Advertising and Promotions</h3>
                    <p>Buy more Dollars may provide third-party content on the Sites or links to third-party web pages, content, applications, products, and services, including advertisements and promotions. We do not control any Third-Party Content, including endorsement by Buy more Dollars of any site, and can make no guarantee as to if it is genuine or not. by visiting or participating in such a third-party contest You acknowledge and agree that Buy more Dollars is not responsible for any kind of financial or data loss. by participating  You agree to use such Third-Party Content at your own risk. when the user participates in such third-party events or co
                        ntests they should know that we don't have any control over the involvement of third-party brands. 
                        You should review the applicable terms and policies of that particular brand.</p>

                    <h2>Conditions for Age Restriction</h2>
                    <ul>
                        <li>In order to participate in the Scratch to Win contest, users must be 16 years of age or older.</li>
                        <li>Users under 16 years of age cannot participate in the contest without their guardian's permission. The user's guardian must contact Buymore Dollars via email or phone stating they give the user permission to play and to provide their information.</li>
                    </ul>

                    <h2>Conditions for Prize Distribution and Chances of Winning</h2>
                    <ul>
                        <li>Every user has an equal chance to win prizes while playing.</li>
                        <li>From all the winning participants, 10% of participants will be selected by random draw for prizes.</li>
                        <li>All winners of the contest must answer a skill-testing question to get their winning prizes.</li>
                        <li>Prize money will be distributed to all winning participants between 6 to 8 weeks from the winning date.</li>
                    </ul>

                    <h2>Conditions for Opting Out of Communication</h2>
                    <p>Each user can opt-out from our communication services. We mostly communicate with user in two ways:</p>
                    <ol>
                        <li>Opt-out from Text-Message: - Users can easily stop our communication and promotion message by just replying "STOP" to any of our messages.</li>
                        <li>Opt-out from email: - To unsubscribe from our email and our brand's newsletter, users can click on the "Unsubscribe from this Newsletter" link on the bottom of every email. When users click on the link, they will be redirected to a simple form where users can enter their email address and press the confirm button to stop receiving our promotional newsletter.</li>
                    </ol>
                </div>
            </div>
        )
    }
}   

export default ScratchLegal;