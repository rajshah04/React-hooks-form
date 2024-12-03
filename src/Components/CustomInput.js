import React from 'react';

const CustomInput = ({ label, type, name, register, validationRules, errors }) => {
    
    
    
    return (
        <div className="mb-4">
            <label htmlFor={name} className='block text-sm font-medium text-gray-700'>
                {label}

                <sup className='text-red-600'>
                    *
                </sup>
            </label>

            <input type={type} id={name} name={name} 
                {...register(name, validationRules)}
                className={`mt-1 p-2 border rounded w-full ${
                errors[name] ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors[name] && (
                <p className='text-red-500 text-sm mt-1'>
                    {errors[name].message}
                </p>
            )}
        </div>
    )
}

export default CustomInput
