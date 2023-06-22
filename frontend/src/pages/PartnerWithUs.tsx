import * as React from "react";
import Navbar from "../components/Navbar";
import "./css/PartnerWithUs.css";
import { Link } from "react-router-dom";
import * as Button from "../atom/Button";

//Image
import Driver from "../image/DriverIcon.png";
import Dokumen from "../image/DokumenIcon.png";
import Kendaraan from "../image/KendaraanIcon.png";

const PartnerWithUs = () => {
  return (
    <div className="partner-1">
      <Navbar />
      <div className="background-1">
        <div className="main-title">
          <h1 className="title-1">
            Kolaborasi untuk Kebutuhan Bumi: Bersama, <br /> Kita Bisa Mengubah
            Tata Kelola Sampah melalui Aplikasi Kami!
          </h1>
          <Link to="/">
            <Button.GeneralButton text="Daftar Sekarang" />
          </Link>
        </div>
      </div>
      <div></div>
      <div className="main-3">
        <div className="main-3-title">Persyaratan</div>
        <div className="main-card">
          <div className="role-card">
            <div className="role-image">
              <img src={Driver} alt="Driver" />
            </div>
            <div className="role-content">
              <div className="role-title">Driver</div>
              <ul className="role-desc">
                <li>WNI</li>
                <li>
                  Umur Min 18 Tahun dan Maks 65 Tahun Pada Saat Pendaftaran
                </li>
              </ul>
            </div>
          </div>
          <div className="role-card">
            <div className="role-image">
              <img src={Dokumen} alt="Driver" />
            </div>
            <div className="role-content">
              <div className="role-title">Dokumen</div>
              <ul className="role-desc">
                <li>e-KTP Asli</li>
                <li>SIM C / A Asli (dalam masa berlaku)</li>
                <li>STNK dan SKPD Asli (pajak 5 tahunan dalam masa berlaku)</li>
                <li>SKCK Asli / Legalisir</li>
                <li>Rekening bank</li>
              </ul>
            </div>
          </div>
          <div className="role-card">
            <div className="role-image">
              <img src={Kendaraan} alt="Driver" />
            </div>
            <div className="role-content">
              <div className="role-title">Kendaraan</div>
              <ul className="role-desc">
                <li>
                  Batas maksimal umur kendaraan 8 tahun (dihitung dari tahun
                  pendaftaran)
                </li>
                <li>Maksimal CC tidak boleh lebih dari sama dengan 250 cc</li>
                <li>Kendaraan 4 Tak</li>
                <li>Bukan kendaraan motor tipe Trail, Sport atau Touring</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerWithUs;
