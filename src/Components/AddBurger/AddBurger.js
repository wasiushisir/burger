import React from 'react';
import { useForm } from "react-hook-form";
import './AddBurger.css'

const AddBurger = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url=`http://localhost:5000/service`;
        fetch(url,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)

        })
          .then(response=>response.json())
          .then(result=>console.log(result))
                              };
    return (
        <div className='form-container'>
            <h2>Add Burger</h2>
            <form className='form-inner' onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input defaultValue="test" {...register("img")} />
                <input defaultValue="test" {...register("Name")} />
                <input defaultValue="test" {...register("Review")} />
                <input type="number" defaultValue="test" {...register("Ratings")} />

                {/* include validation with required or other standard HTML validation rules */}
               {/*  <input {...register("description", { required: true })} /> */}
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" value="Add burger"/>
            </form>


        </div>
    );
};

export default AddBurger;