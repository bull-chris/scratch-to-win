import React, { Component } from "react";
import { Link }  from 'react-router-dom';
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
        this.checkDropDown = this.checkDropDown.bind(this);
        let success = false;
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

    showError(ele, index){
        let msg ,msg2;
        let err = document.getElementsByClassName('invalidInput')
        if(ele.validity.valid){
            err[index].classList.add('hidden');
            ele.classList.remove('error');
        }
        switch(ele.name) {
            case "phone":
                msg = "The Phone number format is not recognized"
                msg2 = "Please Enter Your Phone Number"
                if (ele.validity.valueMissing){
                    err[index].innerHTML = msg2
                    err[index].classList.remove('hidden');
                    ele.classList.add('error');
                    break;
                } else if(ele.validity.patternMismatch) {
                    err[index].innerHTML = msg
                    err[index].classList.remove('hidden');
                    ele.classList.add('error');
                    break;
                } else if(ele.validity.tooShort) {
                    err[index].innerHTML = msg
                    err[index].classList.remove('hidden');
                    ele.classList.add('error');
                    break;
                }
                break;
            case "email":
                msg = "Invalid email! Please Enter a valid email"
                msg2 = "Please Enter Your Email"
                if (ele.validity.valueMissing){
                    err[index].innerHTML = msg2
                    err[index].classList.remove('hidden');
                    ele.target.classList.add('error');
                    break;
                } else if(ele.validity.typeMismatch) {
                    err[index].innerHTML = msg
                    err[index].classList.remove('hidden');
                    ele.classList.add('error');
                    break;
                }  else if (ele.validity.tooShort) {
                    err[index].classList.remove('hidden');
                    ele.classList.add('error');
                    break;
                }
                break;
                default: {
                    if (ele.validity.valueMissing){
                        err[index].classList.remove('hidden');
                        ele.classList.add('error');
                        break;
                    }else if(ele.validity.patternMismatch) {
                        err[index].classList.remove('hidden');
                        ele.classList.add('error');
                        break;
                    }
                }
        }
        
    }

    checkDropDown(e){
        let dropDown = document.getElementsByClassName('dropdownBday');
        let err = document.getElementsByClassName('invalidInput')
        for(let i = 0; i < dropDown.length; i++){
            if(!dropDown[i].validity.valid){
                e.preventDefault();
                dropDown[i].classList.add('error');
                err[5].classList.remove('hidden')
            } else {
                dropDown[i].classList.remove('error');
                err[5].classList.add('hidden')
            }
        }
    }

    checkBoxValidate(e){
        let checkBox = document.getElementById('rules');
        let errorBoxes = document.getElementsByClassName('errorAlert');
        if(!checkBox.validity.valid){
            e.preventDefault();
            errorBoxes[1].classList.remove('hidden')
        } else {
            errorBoxes[1].classList.add('hidden')
        }
    }

    checkAge(select){
        let err = document.getElementsByClassName('invalidInput')
        let age = this.state.currentYear - select.target.value;
        if(age < 16){
            err[5].innerHTML = "Must be 16 years of age to play"
            err[5].classList.remove('hidden')
        } else {
            err[5].innerHTML = "Please Select your Date of Birth"
            err[5].classList.add('hidden')
        }
        console.log(age)
    }

    handleSubmit(e){
        let validationElements = document.getElementsByClassName('formInput');

        this.checkDropDown(e);
        this.checkBoxValidate(e);
        for(let i = 0; i < validationElements.length; i++){
            console.log(validationElements[i].target)
            if (!validationElements[i].validity.valid) {
                e.preventDefault();
                this.showError(validationElements[i], i);
            }  
        }
            

        
    }

    render() {
        const dayItems = [];
        const monthItems = [];
        const yearItems = [];

        // Populate Day Options
        for(let i = 1; i <= this.state.Days[0]; i++) {
            dayItems.push(<option key={i} defaultValue={i}>{i}</option>)
        }

        // Populate Month options
        for(let i = 1; i <= 12; i++) {
            monthItems.push(<option key={this.state.Months[i]} defaultValue={i}> {this.state.Months[i]} </option>)
        }

        // Populate Year options    
        for(let i = 1930; i <= this.state.currentYear; i++) {
            let option = document.createElement("option");
            option.text = i;
            option.value = i;
            yearItems.push(<option key={i} defaultValue={i}> {i} </option>)
        }
        
        return (
                <form name="myForm" id="form" >
                    <fieldset className="formWrapper">

                        <legend >
                            <img src={darkLogo} alt='logo'/>
                        </legend>

                        <div className="formContent">
                            <input onChange={ (e) => this.showError( e.target ,0 )}   className="formInput" type="text" autoComplete="given-name" id="fName" name="fName" placeholder="First Name" pattern="^(?! )[A-Za-z\s]*$" required />
                            <div className="invalidInput hidden"><p>Please Enter Your First Name </p></div>

                            <input onChange={(e) => this.showError( e.target , 1 )}  className="formInput" type="text" autoComplete="family-name" id="lName" name="lName" placeholder="Last Name" pattern="^(?! )[A-Za-z\s]*$" required />
                            <div className="invalidInput hidden"><p>Please Enter Your Last Name </p></div>

                            <input onChange={(e) => this.showError( e.target , 2 )} className="formInput" type="text" autoComplete="street-address" id="address" name="address" placeholder="Address" required />
                            <div className="invalidInput hidden"><p>Please Enter Your Full Address </p></div>

                            <input onChange={(e) => this.showError( e.target , 3 )} className="formInput" type="tel" autoComplete="tel" id="phone" name="phone" placeholder="Phone Number" maxLength="10" minLength="10" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" required/>
                            <div className="invalidInput hidden"><p>Please Enter Your Phone Number </p></div>

                            <input onChange={(e) => this.showError( e.target , 4 )} className="formInput" type="email" autoComplete="email" id="email" name="email" placeholder="Email" required/>
                            <div className="invalidInput hidden" ><p>Please Enter Your Email </p></div>

                            <div id="bday">
                                <div className="labelContainer">
                                    <label htmlFor="bday">Date of Birth</label>
                                </div>

                                <div className="errorAlert hidden" id="errorBox">
                                    <img src="img/alert_icon.png" width="35px" alt="alert"/>
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
                                    <select onChange={(e) => {this.change_year(e); this.checkAge(e); }} className="dropdownBday" id="year" name="yyyy" required>
                                        <option defaultValue="Year" disabled >Year</option>
                                        {yearItems}
                                    </select>
                                </div>
                                <div className="invalidInput hidden" ><p>Please Select your Date of Birth </p></div>
                            </div>

                            <div className="checkboxSection">
                                <div className="checkContainer">
                                    <div className="errorAlert hidden" id="errorBox2">
                                        <img src="img/alert_icon.png" width="35px" alt="alert"/>
                                        <p>You cannot Participate in our contest without <span>reviewing our Consent to Rules and Regulations.</span></p>
                                    </div>
                                    <input type="checkbox" id="rules" name="rules" required />
                                    <label htmlFor="rules">Consent to <span><a href="/legal">Rules and Regulations</a></span></label>
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
                            <Link to="/game"><input type="submit" defaultValue="SUBMIT" onClick={(e) => this.handleSubmit(e)}></input></Link>
                        </div>
                    </fieldset>
                </form>
        )
    }
}

export default Form;