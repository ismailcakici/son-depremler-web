import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer footer-center bg-base-300 text-base-content my-2 p-4 rounded-box">
      <aside>
        <p>
          Bu sitede kullanılan deprem verileri{" "}
          <a
            className="underline"
            href="https://github.com/orhanayd/kandilli-rasathanesi-api"
          >
            Kandilli Rasathanesi API
          </a>
          'den alınmaktadır.
        </p>
      </aside>
    </footer>
  );
};
export default Footer;
