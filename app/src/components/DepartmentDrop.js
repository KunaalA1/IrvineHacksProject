import React from 'react'
import MajorDrop from './MajorDrop'

export default class DepartmentDrop extends React.Component {
    constructor() {
        super()
        this.state = {selectValue: ''}
    }
    handleChange = (event) => {
        this.setState({selectValue: event.target.value});
        }
    
    render() {
        return (
        <div>
            <select onChange={this.handleChange}>
                    <option value="empty"> </option>
                    <option value="arts">Arts</option>
                    <option value="bioscis">Biological Sciences</option>
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
            <h1>Now select your major!</h1>
            <MajorDrop department={this.state.selectValue} />
        </div>
    );
    }
    
}
