// src/components/SEO.jsx
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, ogImage }) => (
  <Helmet>
    <title>{title} | Killis Bird</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={`${title} | Killis Bird`} />
    <meta property="og:description" content={description} />
    {ogImage && <meta property="og:image" content={ogImage} />}
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#f15d30" />
  </Helmet>
);

export default SEO;
