import './style.css'
import BackGroundImage from '../Images/nurse-portrait-hospital.jpg';
import { Box, Button, Checkbox, FormControl, FormControlLabel, Input, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { useState } from 'react';
import Swal from 'sweetalert2';
import SuccessStoryOne from '../Images/Patel_xOznYxGIr5.webp'
import SuccessStoryTwo from '../Images/Deep_P-vGzCQ88.webp'
import SuccessStoryThree from '../Images/Nasir_kCpBt8epvL.webp'



const ariaLabel = { 'aria-label': 'description' };

const Index = () => {
    const doctorsData = [
        {"name": "Dr. Sharma", "expertise": "Cardiology", "city": "Mumbai"},
        {"name": "Dr. Patel", "expertise": "Dermatology", "city": "Delhi"},
        {"name": "Dr. Gupta", "expertise": "Pediatrics", "city": "Bengaluru"},
        {"name": "Dr. Singh", "expertise": "Orthopedics", "city": "Kolkata"},
        {"name": "Dr. Kumar", "expertise": "Ophthalmology", "city": "Chennai"},
        {"name": "Dr. Das", "expertise": "Neurology", "city": "Hyderabad"},
        {"name": "Dr. Joshi", "expertise": "Gynecology", "city": "Pune"},
        {"name": "Dr. Reddy", "expertise": "Dentistry", "city": "Ahmedabad"},
        {"name": "Dr. Mishra", "expertise": "Psychiatry", "city": "Bengaluru"},
        {"name": "Dr. Malik", "expertise": "Urology", "city": "Bengaluru"},
        {"name": "Dr. Khanna", "expertise": "Endocrinology", "city": "Bengaluru"},
        {"name": "Dr. Verma", "expertise": "Rheumatology", "city": "Bengaluru"},
        {"name": "Dr. Kapoor", "expertise": "Gastroenterology", "city": "Bengaluru"},
        {"name": "Dr. Bansal", "expertise": "Hematology", "city": "Bengaluru"},
        {"name": "Dr. Raj", "expertise": "Allergy and Immunology", "city": "Mumbai"},
        {"name": "Dr. Agarwal", "expertise": "Nephrology", "city": "Mumbai"},
        {"name": "Dr. Choudhary", "expertise": "Pulmonology", "city": "Mumbai"},
        {"name": "Dr. Yadav", "expertise": "Otolaryngology", "city": "Chennai"},
        {"name": "Dr. Desai", "expertise": "Dermatopathology", "city": "Chennai"},
        {"name": "Dr. Sharma", "expertise": "Oncology", "city": "Chennai"},
    ]
    const [doctors,setDoctors]=useState([])
    const [patientName,setPatientName]=useState('')
    const [phoneNumber,setPhoneNumber]=useState('')
    const [age,setAge]=useState('')
    const [anyPreviousExp,setAnyPreviousExp]=useState({
        show:false,
        experience:false
    })
    const [company,setCompany]=useState('')
    const [chiefComplaints,setChiefComplaints]=useState('')
    const [selectedDoctor,setSelectedDoctor]=useState('')


    const handleForm=(e)=>{

        const {name,value,checked}=e.target

        if(name=='PatientName'){
            setPatientName(value)
        }

        else if(name=="PhoneNumber"){
            setPhoneNumber(value)
        }
        
        else if(name=='Age'){
            if(value>=40 || value=='on' ){
                setAnyPreviousExp({
                    ...anyPreviousExp,
                    show:true,
                    experience:checked
                })
            }
            setAge(value)
        }

        else if(name=='Company'){
            setCompany(value)
        }

        else if(name=='ChiefComplaints'){
            setChiefComplaints(value)
        }
        
        else if(name=='City'){
            const filteredData=doctorsData.filter((doctor)=>
                doctor.city.toLocaleLowerCase()==value.toLocaleLowerCase()
            )
            setDoctors(filteredData)
        }

        else if(name=='SelectedDoctor'){
            setSelectedDoctor(value)
        }
    }

    const handlePostData=(event)=>{   
            
        Swal.fire({
            text: "Appointment Booked Successfully!",
            icon: "success"
          }).then((result)=>{
            if(result.isConfirmed){
                window.location.reload();
            }
          })
          
    }


    return (
        <div className='changeTheme'>
            <img src={BackGroundImage} width='100%' height='729px' className='doctor-image' />
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '35ch' },
                  }}
                  className='consult_form'
                noValidate
                autoComplete="off"
            >
                <div className='name-fields'>
                <h2 className='form-heading'>Book an Appointment</h2>
                <div>
                <TextField 
                name='PatientName'
                id="standard-basic"  
                variant="standard" 
                placeholder="Your Name"
                onchange={handleForm}
                />
                </div>
                <div>
                <TextField 
                name='PhoneNumber'
                id="standard-basic" 
                variant="standard" 
                placeholder="Phone No."
                onchange={handleForm}

                />
                </div>
                <div>
                <TextField 
                id="standard-basic" 
                variant="standard" 
                placeholder="Age"
                name='Age'
                onChange={handleForm}
                />
                </div>


                {
                    anyPreviousExp.show==true &&
                    <div>
                                    <FormControlLabel 
                                    className='check-previous'
                                    required control={
                                    <Checkbox 
                                    name='Age'
                                    onChange={handleForm}
                                     />} label="Any previous experience with physiotherapy" />
                    </div>
                }
                

                <div>
                <TextField 
                id="standard-basic" 
                variant="standard" 
                placeholder="Company"
                onChange={handleForm}
                name='Company'
                />
                </div>

                <div>
                <TextField 
                id="standard-basic" 
                variant="standard" 
                placeholder="Chief Complaints"
                name='ChiefComplaints'
                onChange={handleForm}
                />
                </div>

                
                <div>
                <TextField 
                id="standard-basic" 
                variant="standard" 
                placeholder="City"
                name='City'
                onChange={handleForm}
                />
                </div>
                <FormControl sx={{ m: 1, minWidth: '35ch' }}>
                    <InputLabel id="demo-simple-select-label">Available Doctors At Your City</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Available Doctors At Your City"
                    name='SelectedDoctor'
                    value={selectedDoctor}
                    onChange={handleForm}
                    >
                        {
                            doctors.map((doctor)=>(
                                    <MenuItem 
                                    name='SelectedDoctor'
                                    value={doctor.name +'-'+doctor.expertise+'-' +doctor.city } 
                                    >{doctor.name} - {doctor.expertise} - {doctor.city}</MenuItem> 
                                )
                            )
                        }
                    </Select>
                </FormControl>
                
                <Button variant="contained" className='send-data'
                onClick={(event)=>handlePostData(event)}
                >Start Your Recovery</Button>
                </div>
            </Box>
            <div className='testmonialsMain'>
                <div className='headingText'>Patient Recovery Stories</div>
                <div className='testmonials'>
                        <div className='testmonialsOne'>
                            <div className='patientWords'>My Frozen Shoulder is gone</div> 
                            <img src={SuccessStoryOne} alt='successstoryone' className='testmonialsOneImage'/>
                            <div className='patientWordsDescription'>
                            <h4>Your assessment method is so good & patient support resolves issues promptly</h4>
                            <h4>Nishith Patel</h4>
                            </div>
                        </div>
                        <div className='testmonialsTwo'>
                        <div className='patientWords'>Sitting job back pain eased</div> 
                            <img src={SuccessStoryTwo} alt='successstoryone' className='testmonialsTwoImage'/>
                            <h4 className='patientWordsDescription'>They worked around time zone variations to accommodate my schedule</h4>
                            <h4>Pranjal Deep</h4>
                        </div>
                        <div className='testmonialsThree'>
                        <div className='patientWords'>Injury of 12 years fixed</div> 
                            <img src={SuccessStoryThree} alt='successstoryThree' className='testmonialsThreeImage'/>
                            <h4 className='patientWordsDescription'>6 month with Fix Health was less than 1 month of my insurance co-pay</h4>
                            <h4>Dr. Nasir Kamal</h4>
                        </div>

                </div>
            </div>
        </div>

    )

}

export default Index