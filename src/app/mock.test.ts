import { Task } from "./Task";

export const Tasks : Task[] = [
    {
        id : 1  , 
    text : 'mockDoctor Appointment',
    day : 'May 5th at 2:23',
    reminder:true
    // time : 2
    //wont as this property doesnt exist in task
    },
    {
        id : 2  , 
    text : 'MOckTest',
    day : 'May 6th at 11:23',
    reminder:true
    },
    {
        id : 3  , 
    text : 'Food Shopping',
    day : 'May 7th at 12:23',
    reminder:false
    }
]