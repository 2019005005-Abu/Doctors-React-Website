import React from 'react'
export const TimeTable = () => {
    const timeTable=[
        {id:0,first_time_table:'8.00'},
        {id:1,second_time_table:'6.00'},
        {id:2,third_time_table:'9.00'},
        {id:3,fourth_time_table:'10.00'},
        {id:4,fifth_time_table:'11.00'}
    ]
  return (
    <div>
    <p>{timeTable[0].first_time_table}</p>
    <p>{timeTable[1].second_time_table}</p>
    <p>{timeTable[2].third_time_table}</p>
    <p>{timeTable[3].fourth_time_table}</p>
    <p>{timeTable[4].fifth_time_table}</p>
    
    </div>
  )
}
