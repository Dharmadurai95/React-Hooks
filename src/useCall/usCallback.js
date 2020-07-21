import React, { useState, useCallback } from 'react';
import Buttom from './Button';
import Count from './Count';
import Title from './Title';

function UseCallback() {
    const [age, setage] = useState(25);
    const [salary, setsalary] = useState(10000)
    const ageHandler = useCallback(() => {
        console.log('age hadler')
        return setage(age + 1)
    },[age]);
    const salaryHandler = useCallback(() => {
        console.log('salary hadler')
        return setsalary(salary + 1000)
    },[salary]);

    return (
        <div>
            <Title />
            <Count title='Age' count={age} />
            <Buttom handler={ageHandler} > Incresr Age </Buttom>
            <Count title='Salary' count={salary} />
            <Buttom handler={salaryHandler}> Increase Salary </Buttom>
           
        </div>
    )
}

export default UseCallback;




