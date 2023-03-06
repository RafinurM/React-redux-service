export default function Form({submitForm}) {
  return (
    <form onSubmit={submitForm}>
      <input name="name" type="text" required />
      <input name="price" type="number" required />
      <button type="submit">Save</button>
    </form>
  );
}
