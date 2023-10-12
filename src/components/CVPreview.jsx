export function CVPreview({
    personalInfoFormStatus,
    personalInfoForm,

    educationFormStatus, 
    educationForm,

    workExperienceFormStatus,
    workExperienceForm

}) {

    let name = ' ';
    let email = ' ';
    let phoneNumber = ' ';

    if (personalInfoFormStatus === 'submitted') {
        name = personalInfoForm.name;
        email = personalInfoForm.email;
        phoneNumber = personalInfoForm.phoneNumber;
    }

    let school = '';
    let subject = ' ';
    let schoolStartDate = ' ';
    let schoolEndDate = ' ';

    if (educationFormStatus === 'submitted') {
        school = educationForm.school;
        subject= educationForm.subject;
        schoolStartDate = educationForm.schoolStartDate;
        schoolEndDate = educationForm.schoolEndDate;
    }

    let companyName = ' ';
    let positionTitle = ' ';
    let mainResponsibilities = ' ';
    let workStartDate = ' '
    let workEndDate = ' '

    // add if statement for workExperienceFormStatus
    if (workExperienceFormStatus === 'submitted') {
        companyName = workExperienceForm.companyName;
        positionTitle = workExperienceForm.positionTitle;
        mainResponsibilities = workExperienceForm.mainResponsibilities;
        workStartDate = workExperienceForm.workStartDate;
        workEndDate = workExperienceForm.workEndDate;
    }


    return (
        <div className="CV-preview">
            <h2>Personal Information</h2>
            <h3>Full Name</h3>
            <p>{name}</p>
            <h3>Email Address</h3>
            <p>{email}</p>
            <h3>Phone Number</h3>
            <p>{phoneNumber}</p>

            <hr />

            <h2>Education</h2>
            <h3>School</h3>
            <p>{school}</p>
            <h3>Main Subject</h3>
            <p>{subject}</p>
            <h3>Start Date of Study</h3>
            <p>{schoolStartDate}</p>
            <h3>End Date of Study</h3>
            <p>{schoolEndDate}</p>

            <hr />

            <h2>Working Experience</h2>
            <h3>Company Name</h3>
            <p>{companyName}</p>
            <h3>Position Title</h3>
            <p>{positionTitle}</p>
            <h3>Main Responsibilities</h3>
            <p>{mainResponsibilities}</p>
            <h3>Work Start Date</h3>
            <p>{workStartDate}</p>
            <h3>Work End Date</h3>
            <p>{workEndDate}</p>
        </div>
    )
}