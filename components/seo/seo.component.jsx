import PropTypes from "prop-types";
import Head from "next/head";

const SEO = ({ data }) => {
  if (!data) return null;

  const {
    description,
    featuredImage,
    title,
    canonical,
    opengraphSiteName,
    opengraphDescription,
    twitterDescription,
    twitterTitle,
    twitterImage,
    opengraphTitle,
    opengraphImage,
    opengraphUrl,
    opengraphType,
    opengraphAuthor,
    openGraphAuthor,
  } = data;

  return (
    <Head>
      {title && <title>{title}</title>}

      {description && <meta name="description" content={description} />}

      {process.env.NEXT_PUBLIC_ACTIVE_ENV === "production" ? (
        <meta name="robots" content="index, follow" />
      ) : (
        <meta name="robots" content="noindex" />
      )}

      {canonical && <link rel="canonical" href={canonical} />}

      {opengraphUrl && <meta property="og:url" content={opengraphUrl} />}

      {(opengraphTitle || title) && (
        <meta property="og:title" content={opengraphTitle ?? title} />
      )}

      {(opengraphDescription || description) && (
        <meta
          property="og:description"
          content={opengraphDescription ?? description}
        />
      )}

      {opengraphType && <meta property="og:type" content={opengraphType} />}

      {opengraphSiteName && (
        <meta property="og:site_name" content={opengraphSiteName} />
      )}

      {(opengraphImage || featuredImage) && (
        <meta
          property="og:image"
          content={opengraphImage?.sourceUrl ?? featuredImage}
        />
      )}

      {opengraphAuthor && (
        <meta property="og:author" content={openGraphAuthor} />
      )}

      {twitterTitle && <meta name="twitter:title" content={title} />}

      {twitterDescription && (
        <meta name="twitter:description" content={twitterDescription} />
      )}

      {(twitterImage || featuredImage) && (
        <meta
          name="twitter:image"
          content={twitterImage?.sourceUrl ?? featuredImage}
        />
      )}
    </Head>
  );
};

SEO.defaultProps = {
  meta: [],
};

SEO.propTypes = {
  data: PropTypes.object,
};

export default SEO;
