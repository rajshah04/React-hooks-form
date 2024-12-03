import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import CustomInput from './CustomInput';
import CustomSelect from './CustomSelect';

const ValidationForm = () => {
    
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm({ mode: 'onChange' }) ;

    const onSubmit = (data) => {
        console.log('Form Submitted:', data) ;
        toast.success('Form Submitted') ;
       
        localStorage.setItem('formData', JSON.stringify(data)) ;
        reset() ;
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='max-w-md mx-auto p-8 border rounded-lg bg-white box-shadow'>

            <h2 className='text-xl font-semibold mb-4'>
                Validation Form
            </h2>

            {/* name */}
            <CustomInput type="text" label="Name" name="name" register={register}
                validationRules={{
                    required: 'Name is required',
                    minLength: {
                        value: 3,
                        message: 'Name must be at least 3 characters',
                    },
                }}
                errors={errors}
            />

            {/* email */}
            <CustomInput type="email" label="Email" name="email" register={register}
                validationRules={{
                    required: 'Email is required',
                    pattern: {
                        value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                        message: 'Invalid email format',
                    },
                }}
                errors={errors}
            />

            {/* password */}
            <CustomInput type="password" label="Password" name="password" register={register}
                validationRules={{
                    required: 'Password is required',
                    minLength: {
                        value: 8,
                        message: 'Password must be at least 8 characters',
                    },
                }}
                errors={errors}
            />

            {/* confirm password */}
            <CustomInput type="password" label="Confirm Password" name="confirmPassword" register={register}
                validationRules={{
                    required: 'Confirm Password is required',
                    validate: (value) =>
                        value === watch('password') || 'Passwords do not match',
                    }}
                errors={errors}
            />

            {/* role */}
            <CustomSelect label="Role" name="role"
                options={[
                    { value: '', label: 'Select a role' },
                    { value: 'admin', label: 'Admin' },
                    { value: 'user', label: 'User' },
                ]}
                register={register}
                validationRules={{
                    required: 'Role is required',
                }}
                errors={errors}
            />

            {/* buttons wala div */}
            <div className="flex items-center justify-between mt-4">
                <button type="submit" className='bg-blue-500 text-white px-4 py-2 rounded hover:scale-105 transition-all duration-200' >
                    Submit
                </button>

                <button type="button" onClick={() => reset()} className='bg-slate-800 text-white px-4 py-2 rounded hover:scale-105 transition-all duration-200' >
                    Reset
                </button>
            </div>
        </form>
    )
}

export default ValidationForm
