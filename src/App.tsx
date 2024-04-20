import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { FormValues, formSchema } from "./formSchema";
import Input from "./components/Input";

function App() {
  const { register, handleSubmit, formState, control } = useForm<FormValues>({
    defaultValues: {
      ingredients: [],
      title: "",
    },
    resolver: zodResolver(formSchema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "ingredients",
  });

  const { errors } = formState;

  const onSubmit = (props: FormValues) => {
    console.log(props);
  };

  return (
    <section className="flex h-screen justify-center w-screen items-center">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <Input
          {...register("title")}
          label="Title"
          errorMessage={errors.title?.message}
        />

        {fields.map((x, index) => (
          <div key={x.id}>
            <Input {...register(`ingredients.${index}.name`)} />
            <Input
              {...register(`ingredients.${index}.qty`, { valueAsNumber: true })}
              type="number"
            />
            <select {...register(`ingredients.${index}.unit`)}>
              <option value="g">G</option>
              <option value="l">L</option>
              <option value="b">b</option>
            </select>

            <button type="button" onClick={() => remove(index)}>
              remove
            </button>
          </div>
        ))}

        <button
          onClick={() => append({ name: "", qty: 0, unit: "g" })}
          type="button"
        >
          Add ingredient
        </button>

        <button className="mt-12" type="submit">
          save recipe
        </button>
      </form>
    </section>
  );
}

export default App;
