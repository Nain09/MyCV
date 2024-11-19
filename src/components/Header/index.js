import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const Header = () => {
  const [imageBase64, setImageBase64] = useState(null);

  useEffect(() => {
    const database = getDatabase();
    const imageRef = ref(database, "image");

    onValue(imageRef, (snapshot) => {
      const data = snapshot.val();

      if (data) {
        const firstImage = Object.values(data)[0]; // Ambil gambar pertama
        setImageBase64(firstImage); // Simpan data Base64 atau URL
      } else {
        setImageBase64(null); // Tidak ada data gambar
      }
    });
  }, []);

  return (
    <div
      className="container-fluid bg-primary d-flex align-items-center mb-5 py-5"
      id="home"
      style={{ minHeight: "100vh" }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 px-5 pl-lg-0 pb-5 pb-lg-0">
            {imageBase64 ? (
              <img
                className="img-fluid w-100 rounded- shadow-sm"
                src={
                  imageBase64.startsWith("data:image")
                    ? imageBase64
                    : `data:image/jpeg;base64,${imageBase64}`
                }
                alt="Image from Firebase"
              />
            ) : (
              <div className="text-white">Loading image...</div>
            )}
          </div>
          <div className="col-lg-7 text-center text-lg-left">
            <h4 className="text-white font-weight-normal mb-3"></h4>
            <h1>NAIN KING ROBERTO NAJOAN</h1>
            <h1 className="typed-text-output d-inline font-weight-lighter text-white" />
            <div className="typed-text d-none">
              Web Designer, Web Developer, Front End Developer, Apps Designer,
              Apps Developer
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
