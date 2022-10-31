import React from 'react'

export const DoctorsInfomation = () => {
    const DoctorsInformation=[
        {
         doctors_des:'General Physician',
         doctors_name:'Dr.Robert Angali'
        },
        {
        doctors_des:'General Physician',
        doctors_name:'Dr.Robert Angali'
        },
        {
        doctors_des:'General Physician',
        doctors_name:'Dr.Robert Angali'
        },
        {
        doctors_des:'General Physician',
        doctors_name:'Dr.Robert Angali'
        },
        {
        doctors_des:'General Physician',
        doctors_name:'Dr.Robert Angali'
        },
    ]
  return (
   <div>
    <p>{DoctorsInformation[0].doctors_des}</p>
    <p>{DoctorsInformation[0].doctors_name}</p>
    <p>{DoctorsInformation[1].doctors_des}</p>
    <p>{DoctorsInformation[1].doctors_name}</p>
    <p>{DoctorsInformation[2].doctors_des}</p>
    <p>{DoctorsInformation[2].doctors_name}</p>
    <p>{DoctorsInformation[3].doctors_des}</p>
    <p>{DoctorsInformation[3].doctors_name}</p>
    <p>{DoctorsInformation[4].doctors_des}</p>
    <p>{DoctorsInformation[4].doctors_name}</p>
    </div>
  )
}
