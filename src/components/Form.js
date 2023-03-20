export default function Form({submitForm, name, price}) {
  return (
    <form name='form' onSubmit={(e) => {
        e.preventDefault();
         submitForm()
         }}>
      <input name="name" type="text" value={name} required />
      <input name="price" type="number" value={price} required />
      <button type="submit">Save</button>
    </form>
  );
}
