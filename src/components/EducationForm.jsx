import  {EditButton } from "./EditButton"
import { SubmitButton } from "./SubmitButton.jsx"
import { CustomInput } from "./CustomInput"

export function EducationForm({
    school,
    setSchool,
    subject,
    setSubject,
    schoolStartDate,
    setSchoolStartDate,
    schoolEndDate,
    setSchoolEndDate,

    status,
    setStatus,

}) {
    function checkFormFilledIn() {
        return (school !== "" && subject !== "" && schoolStartDate !== "" && schoolEndDate !== "") ? true : false;
    }

    if (status === 'editing') {
        return (
            <form className="education-form form">
                <div className="form-container">
                    <h2>Highest Level Education</h2>

                    <h3>School</h3>
                    <CustomInput value={school} inputType="text" changeParentVariable={setSchool}/>

                    <h3>Main Subject</h3>
                    <CustomInput value={subject} changeParentVariable={setSubject}/>

                    <h3>Start Date of Study</h3>
                    <CustomInput value={schoolStartDate} inputType="date" changeParentVariable={setSchoolStartDate} />

                    <h3>End Date of Study</h3>
                    <CustomInput value={schoolEndDate} inputType="date" changeParentVariable={setSchoolEndDate} />
                </div>

                <SubmitButton 
                    clickFunction = {(e) => {
                        if (checkFormFilledIn()) {
                            e.preventDefault();
                            setStatus('submitted')
                        }
                    }}
                />
            </form>
        )
    }

    return (
        <form className="education-form form">
            <div className="form-container">
                <h2>Education</h2>
                <h3>School</h3>
                {school}

                <h3>Subject</h3>
                {subject}
                
                <h3>Start Date of Study</h3>
                {schoolStartDate}

                <h3>End Date of Study</h3>
                {schoolEndDate}

                </div>

            <EditButton 
            clickFunction= {(e) => {
                e.preventDefault();
                setStatus('editing')
                }}
                />
        </form>
    )
}