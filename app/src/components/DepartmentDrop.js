import React from 'react'

export default class DepartmentDrop extends React.Component {
    constructor() {
        super()
        this.state = {selectValue: ''}
    }
    handleChange = (event) => {
        this.setState({selectValue: event.target.value}, ()=> {alert(`Value: ${this.state.selectValue}`)});
        }
    
    render() {
        return (
        <div>
            <select onChange={this.handleChange}>
                    <option value=""> </option>
                    <option value="arts">Arts</option>
                    <option values="bioscis">Biological Sciences</option>
                    <option value="bus">Business</option>
                    <option value="edu">Education</option>
                    <option value="engine">Engineering</option>
                    <option value="human">Humanities</option>
                    <option value="ics">Information & Computer Science</option>
                    <option value="nurse">Nursing</option>
                    <option value="pharm">Pharmacy and Pharmaceutical Sciences</option>
                    <option value="phy">Physical Sciences</option>
                    <option value="pub">Public Health</option>
                    <option value="soceco">Social Ecology</option>
                    <option value="social">Social Sciences</option>
            </select>
        </div>
    );
    }
    
}