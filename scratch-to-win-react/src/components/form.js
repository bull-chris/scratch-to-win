import React, { Component } from "react";
import '../css/form-style.css'
import darkLogo from '../images/scratch_dark_logo.png'

class Form extends Component {

    constructor() {
        super()
        // Drop Down Menu For Birthday
        // drop down variables
        let curentDate = new Date();
        this.state = {
            Days :[31,28,31,30,31,30,31,31,30,31,30,31],
            Months :["","January","February","March","April","May","June","July","August","September","October","November","December"],
            date : curentDate,
            currentYear : curentDate.getFullYear(),
        }
        this.myRef = React.createRef();
        this.change_year = this.change_year.bind(this);
        this.isLeapYear = this.isLeapYear.bind(this);
        this.change_month = this.change_month.bind(this);
    }

    isLeapYear(year) {
        year = parseInt(year);
        if (year % 4 !== 0) {
            return false;
        } else if (year % 400 === 0) {
            return true;
        } else if (year % 100 === 0) {
            return false;
        } else {
            return true;
        }
    }
    
    change_year(select) {
        if( this.isLeapYear(select.target.value)) {
            let newDays = this.state.Days;
            newDays[1] = 29;
            this.setState({
                Days : newDays
            })
        } else {
            let newDays = this.state.Days;
            newDays[1] = 28;
            this.setState({
                Days : newDays
            })
        }
    }
    
    change_month(select) {
        let month = select.target.selectedIndex - 1
        let dayOptions = document.getElementById('day');
        if (month > 0) {
            this.removeOptions(dayOptions)
        }
        for(let i = 1; i <= this.state.Days[month]; i++) {
            let option = document.createElement("option");
            option.text = i;
            option.value = i;
            dayOptions.append(option)
        }
    }
    
    removeOptions(selectElement){
        let remove = selectElement.options.length - 1;
        for(let i = remove; i >= 1; i--) {
            selectElement.remove(i);
        }
    }

    render() {
        const dayItems = [];
        const monthItems = [];
        const yearItems = [];

        for(let i = 1; i <= this.state.Days[0]; i++) {
            dayItems.push(<option key={i} defaultValue={i}>{i}</option>)
            // dayOptions.append(option)
        }

        // Populate Mopnth options
        for(let i = 1; i <= 12; i++) {
            monthItems.push(<option key={this.state.Months[i]} defaultValue={i}> {this.state.Months[i]} </option>)
            // monthOptions.append(option)
        }

        // Populate Year options    
        for(let i = 1930; i <= this.state.currentYear; i++) {
            let option = document.createElement("option");
            option.text = i;
            option.value = i;
            yearItems.push(<option key={i} defaultValue={i}> {i} </option>)
            // yearOptions.append(option)
        }

        return (
                <form name="myForm" id="form">
                    <fieldset className="formWrapper">

                        <legend >
                            <img src={darkLogo} />
                        </legend>

                        <div className="formContent">
                            <input className="formInput" type="text" autoComplete="given-name" id="fName" name="fName" placeholder="First Name" pattern="^(?! )[A-Za-z\s]*$" required />
                            <div className="invalidInput hidden"><p>Please Enter Your First Name </p></div>

                            <input className="formInput" type="text" autoComplete="family-name" id="lName" name="lName" placeholder="Last Name" pattern="^(?! )[A-Za-z\s]*$" required />
                            <div className="invalidInput hidden"><p>Please Enter Your Last Name </p></div>

                            <input className="formInput" type="text" autoComplete="street-address" id="address" name="address" placeholder="Address" required />
                            <div className="invalidInput hidden"><p>Please Enter Your Full Address </p></div>

                            <input className="formInput" type="tel" autoComplete="tel" id="phone" name="phone" placeholder="Phone Number" maxLength="10" minLength="10" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" required/>
                            <div className="invalidInput hidden"><p>Please Enter Your Phone Number </p></div>

                            <input className="formInput" type="email" autoComplete="email" id="email" name="email" placeholder="Email" required/>
                            <div className="invalidInput hidden" ><p>Please Enter Your Email </p></div>


                            <div id="bday">
                                <div className="labelContainer">
                                    <label htmlFor="bday">Date of Birth</label>
                                </div>

                                <div className="errorAlert hidden" id="errorBox">
                                    <img src="img/alert_icon.png" width="35px" />
                                    <p>Please Select your Date of Birth</p>
                                </div>

                                <div className="optionContainer">
                                    <select className="dropdownBday" ref={this.myRef} id="day" name="dd" required>
                                        <option defaultValue="Day" disabled >Date</option>
                                        {dayItems}
                                    </select>
                                    <select onChange={this.change_month} className="dropdownBday" id="month" name="mm" required>
                                        <option defaultValue="Month" disabled >Month</option>
                                        {monthItems}
                                    </select>
                                    <select onChange={this.change_year} className="dropdownBday" id="year" name="yyyy" required>
                                        <option defaultValue="Year" disabled >Year</option>
                                        {yearItems}
                                    </select>
                                </div>
                                <div className="invalidInput hidden" ><p>Please Select your Date of Birth </p></div>
                            </div>

                            <div className="checkboxSection">
                                <div className="checkContainer">
                                    <div className="errorAlert hidden" id="errorBox2">
                                        <img src="img/alert_icon.png" width="35px" />
                                        <p>You cannot Participate in our contest without <span>reviewing our Consent to Rules and Regulations.</span></p>
                                    </div>
                                    <input type="checkbox" id="rules" name="rules" required />
                                    <label htmlFor="rules">Consent to <span>Rules and Regulations</span></label>
                                </div>

                                <div className="checkContainer">
                                    <input type="checkbox" name="sponsor" id="sponsor" />
                                    <div>
                                        <label htmlFor="sponsor">Consent to receiving communications regarding Future Promotions and Offers from BuyMore Dollar</label>
                                    </div>
                                </div>

                            </div>


                        </div>
                        <div className="btnLegend">
                            <input type="submit" defaultValue="SUBMIT"></input>
                        </div>
                    </fieldset>
                </form>
        )
    }
}

                                export default Form;