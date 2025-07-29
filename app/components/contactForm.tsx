"use client";

import { useForm, SubmitHandler } from "react-hook-form";
// @ts-ignore
import emailjs from "@emailjs/browser";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, isSubmitSuccessful, errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const timestamp = Date.now();
    const fecha = new Date(timestamp);

    const formatFecha = fecha.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });

    try {
      const res = await emailjs.send(
        "service_d9xt4x4",
        "template_kgsnrpj",
        {
          name: data.name,
          email: data.email,
          time: formatFecha,
          message: data.message,
        },
        "b6OBi1S8TM8PMPe4O"
      );
      if (res.status !== 200) throw new Error("Error en el envio") 
      reset();
    } catch (error) {
      console.log("Failed...", error)
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col max-w-lg mx-auto"
    >
      <label htmlFor="name">Nombre</label>
      <input
        id="name"
        autoComplete="false"
        {...register("name", { required: true })}
      />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        autoComplete="false"
        {...register("email", { required: true })}
      />
      <label htmlFor="message">Mensaje</label>
      <textarea
        id="message"
        autoComplete="false"
        {...register("message", { required: true })}
      />

      {(errors.email || errors.name || errors.message) && (
        <span className="pt-4 text-center text-red-500">
          Todos los campos son requeridos
        </span>
      )}
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Enviando...' : 'Enviar'}
      </button>

      {isSubmitSuccessful && <p className="text-green-600 pt-4">Mensaje enviado con éxito</p>}

    </form>
  );
}
