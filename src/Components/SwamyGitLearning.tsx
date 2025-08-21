import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../Redux/counterSlice';

export const SwamyGitLearning: React.FC = () => {

    const dispatch = useDispatch();
    const counterValue = useSelector((state: any) => state.counter.value);

    const handleClick = () => {
        dispatch(increment());
    }
    return (
        <div>
            <button onClick={handleClick}>Click me</button>
            <p>counter values : {counterValue}</p>
            <p>I created a new branch named swamy and added a new component called SwamyGitLearning</p>
            <p>After that, I staged the changes, committed them, and pushed to the swamy branch</p>
            <p>Now I’m making changes again. Previously, I merged directly into main,
                but this time I want to follow a different approach
            </p>
            <p>First, I will merge the latest changes from main into my swamy branch.
                After resolving any conflicts, I will then merge the swamy branch back into main</p>
            <p>This change is part of the merge practice task.</p>
            <p>Common change from swamy brach</p>
            <p>A fresh start with bracnh</p>
        </div>
    )
}
