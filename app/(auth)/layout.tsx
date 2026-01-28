import React from 'react'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex justify-center items-center min-h-screen bg-linear-to-r from-rose-100 to-teal-200'>
            {children}
        </div>
    )
}

export default AuthLayout