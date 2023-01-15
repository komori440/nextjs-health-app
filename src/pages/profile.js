import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import {Grid, Row, Col} from 'react-bootstrap';

import Header from '../../components/header';
import Navbar from '../../components/Navbar';

function profile() {
  return (
    <div className={styles.container}>
    <Head>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />

      {/* bootstrap */}
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
        integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
        crossorigin="anonymous"
      />

      {/* fontawsome */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
      />

      {/* bootstrap-datepickerを読み込む */}
      <link
        rel="stylesheet"
        type="text/css"
        href="../bootstrap-datepicker-1.6.4-dist/css/bootstrap-datepicker.min.css"
      />
      <script
        type="text/javascript"
        src="../bootstrap-datepicker-1.6.4-dist/js/bootstrap-datepicker.min.js"
      ></script>
      <script
        type="text/javascript"
        src="../bootstrap-datepicker-1.6.4-dist/locales/bootstrap-datepicker.ja.min.js"
      ></script>

    </Head>

    <main className={styles.main}>
      <Navbar></Navbar>
      <div class="m-auto container">
        <Header></Header>

        {/* user-profile */}
        <section class="">
        <div class="row m-auto">
          <div class="col-3 mx-5">
            <img src="" className={styles.user_img} alt="" />
            <div class=" my-5" className={styles.user_info}>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>User Name</td>
                    <td>2000/12/12</td>
                  </tr>
                  <tr>
                    <td>User ID</td>
                    <td>@sibusHfiAo9q</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>23</td>
                  </tr>
                  <tr>
                    <td>Password</td>
                    <td>*********</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="col mx-5" className={styles.user_info}>
            <table class="table mb-4">
              <thead>
                <tr>
                  <th scope="col">UserInfo</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Birth</td>
                  <td>2000/12/12</td>
                </tr>
                <tr>
                  <td>Age</td>
                  <td>23</td>
                </tr>
                <tr>
                  <td>Gender</td>
                  <td>female</td>
                </tr>
                <tr>
                  <td>Brood Type</td>
                  <td>A</td>
                </tr>
                <tr>
                  <td>Height</td>
                  <td>160 cm</td>
                </tr>
              </tbody>
            </table>
            <table class="table mt-4">
              <thead>
                <tr>
                  <th scope="col">Goals</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Weight</td>
                  <td>kg</td>
                </tr>
                <tr>
                  <td>Caloric Intake</td>
                  <td>female</td>
                </tr>
                <tr>
                  <td>Energy expenditure</td>
                  <td>A</td>
                </tr>
                <tr>
                  <td>Water Intake</td>
                  <td>23</td>
                </tr>
                <tr>
                  <td>Protein Intake</td>
                  <td>160 cm</td>
                </tr>
                <tr>
                  <td>Carbohydrates Intake</td>
                  <td>160 cm</td>
                </tr>
                <tr>
                  <td>Lipid Intake</td>
                  <td>160 cm</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        </section>
      </div>
    </main>

    <footer className={styles.footer}>
    </footer>
  </div>
  );
}

export default profile;