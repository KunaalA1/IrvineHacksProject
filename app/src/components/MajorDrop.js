export default function MajorDrop(props) {
    const depart = props.department;
    if (depart === 'ics') {
        return ICSDrop();
    }
    else if (depart === 'arts') {
        return ArtsDrop();
    }
    else if (depart === 'bioscis') {
        return BioSciDrop();
    }
    else if (depart === 'bus') {
        return BusinessDrop();
    }
    else if (depart === 'edu') {
        return EducationDrop();
    }
    else if (depart === 'engine') {
        return EngineeringDrop();
    }
    else if (depart === 'human') {
        return HumanitiesDrop();
    }
    else if (depart === 'nurse') {
        return NursingDrop();
    }
    else if (depart === 'pharm') {
        return PharmacyDrop();
    }
    else if (depart === 'phy') {
        return PhysicalDrop();
    }
    else if (depart === 'pub') {
        return PublicDrop();
    }
    else if (depart === 'soceco') {
        return EcologyDrop();
    }
    else if (depart === 'social') {
        return SocialDrop();
    }
}


function ICSDrop() {
    return (
        <div>
            <select>
                <option value="empty"></option>
                <option value="compsci">Computer Science</option>
                <option value="swe">Software Engineering</option>
                <option value="ds">Data Science</option>
                <option value="inf">Informatics</option>
                <option value="cse">Computer Science & Engineering</option>
                <option value="bim">Business Information Management</option>
            </select>
        </div>
    );
}

function ArtsDrop() {
    return (
        <div>
            <select>
                <option value="empty"></option>
                <option value="art">Art</option>
                <option value="dance">Dance</option>
                <option value="dancebf">Dance, BFA</option>
                <option value="drama">Drama</option>
                <option value="musthea">Music Theatre</option>
                <option value="music">Music</option>
            </select>
        </div>
    );
}

function BioSciDrop() {
    return (
        <div>
            <select>
                <option value="empty"></option>
                <option value="biosci">Biological Sciences</option>
                <option value="biochem">Biochemistry & Molecular Biology</option>
                <option value="bioedu">Biology/Education</option>
                <option value="devcell">Developmental & Cell Biology</option>
                <option value="ecol">Ecology & Evolutionary Biology</option>
                <option value="bim">Business Information Management</option>
                <option value="exercise">Exercise Science</option>
                <option value="genetic">Genetics</option>
                <option value="humanbio">Human Biology</option>
                <option value="microbio">Microbiology & Immunology</option>
                <option value="neurobio">Neurobiology</option>
            </select>
        </div>
    );
}

function BusinessDrop() {
    return (
        <div>
            <select>
                <option value="empty"></option>
                <option value="busadmin">Business Administration</option>
                <option value="bim">Business Information Management</option>
            </select>
        </div>
    );
}

function EducationDrop() {
    return (
        <div>
            <select>
                <option value="empty"></option>
                <option value="education">Education</option>
            </select>
        </div>
    );
}

function EngineeringDrop() {
    return (
        <div>
            <select>
                <option value="empty"></option>
                <option value="aero">Aerospace Engineering</option>
                <option value="bme">Biomedical Engineering</option>
                <option value="bmep">Biomedical Engineering, Premed</option>
                <option value="cheme">Chemical Engineering</option>
                <option value="civil">Civil Engineering</option>
                <option value="compe">Computer Engineering</option>
                <option value="cse">Computer Science & Engineering</option>
                <option value="ee">Electrical Engineering</option>
                <option value="enve">Environmental Engineering</option>
                <option value="material">Materials Science & Engineering</option>
                <option value="me">Mechanical Engineering</option>
            </select>
        </div>
    );
}

function HumanitiesDrop() {
    return (
        <div>
            <select>
                <option value="empty"></option>
                <option value="african">African American Studies</option>
                <option value="arthis">Art History</option>
                <option value="asian">Asian American Studies</option>
                <option value="chinese">Chinese Studies</option>
                <option value="classic">Classics</option>
                <option value="complit">Comparative Literature</option>
                <option value="east">East Asian Cultures</option>
                <option value="english">English</option>
                <option value="euro">European Studies</option>
                <option value="film">Film & Media Studies</option>
                <option value="french">French</option>
                <option value="gender">Gender & Sexuality Studies</option>
                <option value="german">German Studies</option>
                <option value="global">Global Cultures</option>
                <option value="globalmid">Global Middle East Studies</option>
                <option value="history">History</option>
                <option value="japan">Japanese Language & Literature</option>
                <option value="korean">Korean Literature & Culture</option>
                <option value="literary">Literary Journalism</option>
                <option value="philo">Philosophy</option>
                <option value="religion">Religious Studies</option>
                <option value="spanish">Spanish</option>
                <option value="visual">Visual Studies</option>
            </select>
        </div>
    );
}

function NursingDrop() {
    return (
        <div>
            <select>
                <option value="empty"></option>
                <option value="nursing">Nursing</option>
            </select>
        </div>
    );
}

function PharmacyDrop() {
    return (
        <div>
            <select>
                <option value="empty"></option>
                <option value="pharmsci">Pharmaceutical Sciences</option>
            </select>
        </div>
    );
}

function PhysicalDrop() {
    return (
        <div>
            <select>
                <option value="empty"></option>
                <option value="appphysic">Applied Physics</option>
                <option value="chem">Chemistry</option>
                <option value="earth">Earth System Sciences</option>
                <option value="math">Mathematics</option>
                <option value="physics">Physics</option>
            </select>
        </div>
    );
}

function PublicDrop() {
    return (
        <div>
            <select>
                <option value="empty"></option>
                <option value="pubpoli">Public Health Policy</option>
                <option value="pubsci">Public Health Sciences</option>
            </select>
        </div>
    );
}

function EcologyDrop() {
    return (
        <div>
            <select>
                <option value="empty"></option>
                <option value="crim">Criminology, Law & Society</option>
                <option value="psychsci">Psychological Science</option>
                <option value="socialeco">Social Ecology</option>
                <option value="urban">Urban Studies</option>
            </select>
        </div>
    );
}

function SocialDrop() {
    return (
        <div>
            <select>
                <option value="empty"></option>
                <option value="anthro">Anthropology</option>
                <option value="busecon">Business Economics</option>
                <option value="chicano">Chicano/Latino Studies</option>
                <option value="cogsci">Cognitive Sciences</option>
                <option value="econ">Economics</option>
                <option value="intern">International Studies</option>
                <option value="lang">Language Science</option>
                <option value="polisci">Political Science</option>
                <option value="psych">Psychology, BA</option>
                <option value="psychs">Psychology, BS</option>
                <option value="quant">Quantitative Economics</option>
                <option value="socpoli">Social Policy & Public Service</option>
                <option value="socio">Sociology</option>
            </select>
        </div>
    );
}