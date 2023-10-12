import { EditButton } from "./EditButton"
import { SubmitButton } from "./SubmitButton.jsx"
import { CustomInput } from "./CustomInput"


export function PersonalInfoForm({
    name,
    setName,
    email,
    setEmail,
    phoneNumber,
    setPhoneNumber,

    status,
    setStatus,
}) {
    function checkFormFilledIn() {
        return (name !== "" && email !== "" && phoneNumber !== "") ? true : false;
    }
    if (status === 'editing') {
        return (
            <form className="personal-info-form form">
                <div className="form-container">

                <h2>Personal Info</h2>

                <h3>Full Name</h3>
                <CustomInput value={name} inputType="text" changeParentVariable={setName}/>

                <h3>Email Address</h3>
                <CustomInput value={email} inputType="text" changeParentVariable={setEmail}/>

                <h3>Phone Number</h3>
                <CustomInput value={phoneNumber} inputType="text" changeParentVariable={setPhoneNumber}/>

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
                <h2>Personal Info</h2>
                <h3>Name</h3>
                {name}
                <h3>Email</h3>
                {email}
                <h3>Phone Number</h3>
                {phoneNumber}
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
