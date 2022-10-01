import React from "react";
import { Link } from "react-router-dom";
import beropini1 from "../assets/beropini1.png";
import beropini2 from "../assets/beropini2.png";
import beropini3 from "../assets/beropini3.png";

class Awards extends React.Component {
  render() {
    return (
      <>
        <section id="beropini">
          <div class="container">
            <div class="row">
              <div class="col mt-5 text-center">
                <h2>Beropini</h2>
              </div>
            </div>
            <div class="row mt-5 mb-5">
              <div class="col-4">
                <div class="card">
                  <img src={beropini1} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h3>Turning 20</h3>
                    <p class="card-text">
                      Usia 20an, usia awal menuju pendewasaan. Dipaksa dan
                      terpaksa menjadi dewasa. Jadi dewasa itu menyenangkan,
                      tapi susah dijalanin!
                    </p>
                    <Link to="turning20">Read More</Link>{" "}
                  </div>
                </div>
              </div>
              <div class="col-4">
                <div class="card">
                  <img src={beropini2} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h3>Making Decisions</h3>
                    <p class="card-text">
                      Tentang pilihan, tentang keputusan. Yang baik? yang buruk?
                      atau tidak keduanya? it depends, semuanya abu-abu. Hanya
                      gradasinya yang membedakan.
                    </p>
                    <Link to="making-decision">Read More</Link>{" "}
                  </div>
                </div>
              </div>
              <div class="col-4">
                <div class="card">
                  <img src={beropini3} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h3>Setting Boundaries</h3>
                    <p class="card-text">
                      Ga setiap hal musti kita terima. Ada kalanya kita perlu
                      membuat suatu batasan antara diri kita dengan suatu hal
                      dan juga orang lain. We deserve better, right?
                    </p>
                    <Link to="setting-boundaries">Read More</Link>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Awards;
