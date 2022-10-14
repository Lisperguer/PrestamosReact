    const Mensaje = ({ error }) => {
  return error ? (
    ""
  ) : (
    <p> Agrega una cantidad y un plazo para pagar para cotizar</p>
  );
};

export default Mensaje;
