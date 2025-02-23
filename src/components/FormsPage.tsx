import React from 'react'
import { useForm } from 'react-hook-form'



interface FormValues {
  password: string;
  email: string;
  send?: () => void;
}

const FormsPage = () => {

  const {
    register,
    handleSubmit,
    formState: { errors},

  } = useForm<FormValues>(
    {
      defaultValues: {
        email: 'email@default.com',
        password: 'passwordDefecto',
      },
    }
  );  


  const sendDataAPI = (data: FormValues) => {
    console.log('Value form:',data);
  }

  

  return (
    <div>
        <form onSubmit={handleSubmit(sendDataAPI)} className='flex flex-col space-y-4 items-center'>
          <h3>Formulario</h3>

          <div className='flex flex-col space-y-2 w-[500px]'>
                <input {...register('email',{required:true})}   type="email" placeholder="Email" className='border border-amber-300 p-2 rounded-xl'/>
                <input {...register('password',{required:true})} type="password" placeholder="Password" className='border border-amber-300 p-2 rounded-xl'/>

                <button  type="submit" className='bg-blue-500 text-white rounded-xl p-2 dark:bg-amber-400'>Submit</button>
          </div>
            
        </form>
    </div>
  )
}

export default FormsPage
