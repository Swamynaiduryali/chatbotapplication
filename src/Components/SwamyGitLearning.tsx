import React from 'react'

export const SwamyGitLearning: React.FC = () => {
    return (
        <div>
            <p>I created a new branch named swamy and added a new component called SwamyGitLearning</p>
            <p>After that, I staged the changes, committed them, and pushed to the swamy branch</p>
            <p>Now I’m making changes again. Previously, I merged directly into main,
                but this time I want to follow a different approach
            </p>
            <p>First, I will merge the latest changes from main into my swamy branch.
                After resolving any conflicts, I will then merge the swamy branch back into main</p>
        </div>
    )
}
