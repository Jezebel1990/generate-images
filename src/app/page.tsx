"use client";
import { api } from "../../convex/_generated/api";
import * as React from 'react';
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "convex/react";
import  { useRef } from 'react'
import { ReactSketchCanvas, ReactSketchCanvasRef } from 'react-sketch-canvas';
import { Button } from "@/components/button";
import { Label } from "@/components/label";

export default function Home() {
  const saveSketchMutation = useMutation(api.sketches.saveSketch);
  const sketchesQuery = useQuery(api.sketches.getSketches);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{
   prompt: string;
  }>();
  
const canvasRef = useRef<ReactSketchCanvasRef>(null);

const sortedSketches = (sketchesQuery ?? []).sort((a, b) => {
  return b._creationTime - a._creationTime;
});

  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-8">
          <div className="container mx-auto flex gap-4">
        <form 
        className="flex flex-col gap-2 w-1/4"
        onSubmit={handleSubmit(async (formData) => {
          if (!canvasRef.current) return;
         const image = await canvasRef.current.exportImage("jpeg");
         await saveSketchMutation({...formData, image });
        })}
        >
      <Label htmlFor="prompt">Prompt (Descrição detalhada)</Label>
      <input id="prompt"
        className="text-black"
      {...register("prompt", { required: true })} />
      {errors.prompt && <span>Este campo é obrigatório!</span>}

     <Label className="mt-4">Canvas (Desenhe algo abaixo)</Label>
      <ReactSketchCanvas
      ref={canvasRef}
      style={{width: 256, height: 256}}
      strokeWidth={4}
      strokeColor="black"
    />

    <Button
    className="bg-orange-500 rounded"
    type="button"
    variant={"ghost"}
    onClick={() => {
      canvasRef.current?.clearCanvas();
    }}
    >
      Apagar
    </Button>


      <Button className="bg-purple-600 rounded" type="submit">Enviar</Button>
    </form>

 <section>
   <h2>Esboços recentes</h2>
    <div className="grid grid-cols-4 gap-4">
            {sortedSketches.map((sketch) => (
              <img
                key={sketch._id}
                width="256"
                height="256"
                src={sketch.result}
              />
            ))}
            </div>
            </section>
          </div>
      </main>
  );
}
