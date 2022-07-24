import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="base-page-size">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
