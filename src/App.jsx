import { useState } from 'react'
import { PersonalInfoForm } from './components/PersonalInfoForm'
import { EducationForm } from './components/EducationForm'
import { ExperienceForm } from './components/ExperienceForm'
import { CVPreview } from './components/CVPreview'

import './App.css'

function App() {
    const [school, setSchool] = useState('')
    const [subject, setSubject] = useState('')
    const [schoolStartDate, setSchoolStartDate] = useState('')
    const [schoolEndDate, setSchoolEndDate] = useState('')
    const [educationFormStatus, setEducationFormStatus] = useState('editing');

    let educationFormProps = {
      school: school,
      subject: subject,
      schoolStartDate: schoolStartDate,
      schoolEndDate: schoolEndDate,
    }

    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [personalInfoFormStatus, setPersonalFormStatus] = useState('editing')

    let personalInfoFormProps = {
      name: fullName,
      email: email,
      phoneNumber: phoneNumber,
    }

    const [companyName, setCompanyName] = useState('')
    const [positionTitle, setPositionTitle] = useState('')
    const [mainResponsibilities, setMainResponsibilities] = useState('')
    const [workStartDate, setWorkStartDate] = useState('')
    const [workEndDate,setWorkEndDate] = useState('')
    const [workExperienceFormStatus, setWorkExperienceFormStatus] = useState('editing')

    let workExperienceFormProps = {
      companyName: companyName,
      positionTitle: positionTitle,
      mainResponsibilities: mainResponsibilities,
      workStartDate: workStartDate,
      workEndDate: workEndDate,
    }

  return (
    <>
    <div className='left'>
      <PersonalInfoForm 
        name={fullName}
        setName={setFullName}

        email={email}
        setEmail={setEmail}

        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}

        status={personalInfoFormStatus}
        setStatus={setPersonalFormStatus}
        />

      <hr></hr>
      <EducationForm 
        school={school}
        setSchool={setSchool}
        subject={subject}
        setSubject={setSubject}
        schoolStartDate={schoolStartDate}
        setSchoolStartDate={setSchoolStartDate}
        schoolEndDate={schoolEndDate}
        setSchoolEndDate={setSchoolEndDate}

        status = {educationFormStatus}
        setStatus = {setEducationFormStatus}
      />

      <hr></hr>
      <ExperienceForm 
        companyName={companyName}
        setCompanyName={setCompanyName}
        positionTitle={positionTitle}
        setPositionTitle={setPositionTitle}
        mainResponsibilities={mainResponsibilities}
        setMainResponsibilities={setMainResponsibilities}
        workStartDate={workStartDate}
        setWorkStartDate={setWorkStartDate}
        workEndDate={workEndDate}
        setWorkEndDate={setWorkEndDate}

        status={workExperienceFormStatus}
        setStatus={setWorkExperienceFormStatus}
      />

    </div>

    <div className='right'>
      <h2>CV Preview:</h2>
      <CVPreview
        personalInfoFormStatus={personalInfoFormStatus}
        personalInfoForm={personalInfoFormProps}

        educationFormStatus = {educationFormStatus}
        educationForm={educationFormProps}

        workExperienceFormStatus = {workExperienceFormStatus}
        workExperienceForm={workExperienceFormProps}
       />
    </div>


    </>
  )
}

export default App
