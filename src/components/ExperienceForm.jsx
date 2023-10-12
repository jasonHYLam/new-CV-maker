import { EditButton } from "./EditButton"
import { SubmitButton } from "./SubmitButton.jsx"
import { CustomInput } from "./CustomInput"

export function ExperienceForm({
    companyName,
    setCompanyName,
    positionTitle,
    setPositionTitle,
    mainResponsibilities,
    setMainResponsibilities,
    workStartDate,
    setWorkStartDate,
    workEndDate,
    setWorkEndDate,

    status,
    setStatus,
}) {
    function checkFormFilledIn() {
        return (companyName !== "" && positionTitle !== "" && mainResponsibilities!== "" && workStartDate !== "" && workEndDate !== "") ? true : false;
    }
    if (status === "editing") {
        return (
            <form className="experience-form form">
                <div className="form-container">
                    <h2>Working Experience</h2>

                    <h3>Company Name</h3>
                    <CustomInput value={companyName} changeParentVariable={setCompanyName} />
                    <h3>Position Title</h3>
                    <CustomInput value={positionTitle} changeParentVariable={setPositionTitle} />
                    <h3>Main Responsibilities</h3>
                    <CustomInput value={mainResponsibilities} changeParentVariable={setMainResponsibilities} />
                    <h3>Work Start Date</h3>
                    <CustomInput value={workStartDate} inputType="date" changeParentVariable={setWorkStartDate} />
                    <h3>Work End Date</h3>
                    <CustomInput value={workEndDate} inputType="date" changeParentVariable={setWorkEndDate} />
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
        <div className="form">
            <div>
                <h2>Working Experience</h2>
                <h3>Company Name</h3>
                {companyName}
                <h3>Position Title</h3>
                {positionTitle}
                <h3>Main Responsibilities</h3>
                {mainResponsibilities}
                <h3>Work Start Date</h3>
                {workStartDate}
                <h3>Work End Date</h3>
                {workEndDate}
            </div>
            <EditButton 
                clickFunction= {(e) => {
                    e.preventDefault();
                    setStatus('editing')
                    }}
            />
        </div>
    )
}