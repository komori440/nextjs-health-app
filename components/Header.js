import Head from 'next/head';
import Link from 'next/link';
import styles from './header.module.css';

function Header() {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico " />
      </Head>
      <header>
        <header className="mb-5 row d-flex align-items-center">
          <ul className="col-1 m-auto">
            <li>
              <i className="fa-solid fa-gears fa-2x btn"></i>
            </li>
          </ul>
          <ul className="nav nav-tabs col-10 d-flex justify-content-center">
            <li className="nav-item">
              <Link className="nav-link" href="profile" value="profile">
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                href="/"
              >
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="analysis">
                Analysis
              </Link>
            </li>
          </ul>

          <ul className="col-1 m-auto">
            <Link href="login">
              <li className="row btn">
                <i className="fa-solid fa-arrow-right-from-bracket fa-2x mr-2 col"></i>
              </li>
            </Link>
          </ul>
        </header>
      </header>
    </div>
  );
}

export default Header;
