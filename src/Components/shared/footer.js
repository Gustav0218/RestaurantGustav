const Footer = () => {
  return (
    <>
      <div className="footer-cont">
        <footer class="py-3 my-4">
          <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item">
              <a href="/" class="nav-link px-2 text-muted">
                Inicio
              </a>
            </li>
            <li class="nav-item">
              <a href="contactanos" class="nav-link px-2 text-muted">
                Contacto
              </a>
            </li>
            <li class="nav-item">
              <a href="direccion" class="nav-link px-2 text-muted">
                Donde encontrarnos
              </a>
            </li>
            <li class="nav-item">
              <a href="/" class="nav-link px-2 text-muted">
                FAQs
              </a>
            </li>
            <li class="nav-item">
              <a href="*" class="nav-link px-2 text-muted">
                Acerca de nosotros
              </a>
            </li>
          </ul>
          <p class="text-center text-muted">&copy; Proyecto UCAMP 2022</p>
        </footer>
      </div>
    </>
  );
};

export default Footer;
