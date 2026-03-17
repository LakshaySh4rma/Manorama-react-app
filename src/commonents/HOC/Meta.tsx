import { Helmet } from "react-helmet-async";

const Meta = () => {
  return (
    <Helmet>
      <title>Manorama Charitable Trust</title>

      <meta charSet="utf-8" />

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />

      <meta
        name="description"
        content="Manorama Charitable Trust"
      />

    </Helmet>
  );
};

export default Meta;