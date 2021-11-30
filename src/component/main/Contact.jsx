
import React from "react";
import { useState } from "react";
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { firebaseCrear } from "../../firebaseConfig";



const Contact = () => {


    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .required('Email es requerido')
            .email('Email es invalido'),
        name: Yup.string()
            .required('Name es requerido')
        ,
        info: Yup.string()
            .required('consulta es requerido'),
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;
    const [correo, setCorreo] = useState('send')
    const [types, setTypes] = useState('submit')

    function onSubmit(data) {
        firebaseCrear('contacto', data)
        reset()
        setCorreo('Thanks')
        setTypes('button')
        return false;
    }

    return (

        <React.Fragment>

            <section className="contact section" id="contact">
                <h2 className="section-title">Contact</h2>

                <div className="contact__container bd-grid">
                    <form onSubmit={handleSubmit(onSubmit)} action="" class="contact__form">
                        <span className="error">{errors.name?.message}</span>
                        <input type="text" placeholder="Name" name="name" className="contact__input"  {...register('name')} />
                        <span className="error">{errors.email?.message}</span>
                        <input type="mail" placeholder="Email" name="email" className="contact__input" {...register('email')} />
                        <span className="error">{errors.info?.message}</span>
                        <textarea name="info" id="" cols="0" rows="10" className="contact__input" {...register('info')}></textarea>
                        <input type={types} value={correo} className="contact__button button" />
                    </form>
                </div>

            </section>
        </React.Fragment>
    )


}


export default Contact;