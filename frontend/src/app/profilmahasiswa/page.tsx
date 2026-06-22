"use client";
import "@/app/globals.css";
import { useState, useEffect } from "react";
import { apihelper } from "../api/nextapi";

export default function Home() {
  const [initialData, setInitialData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [data, setData] = useState(null);

  // ✅ Fetch data
  useEffect(() => {
    const fetchData = async () => {
      const result = await apihelper('get','/profilmahasiswa', {});
      const data=(await result.json()).biodata.biodata
      console.log(data)
      setInitialData(data);
      setData(data);  // ← Set data here too
      setLoading(false);
    };
    fetchData();
  }, []);

  // ✅ Handle field change
  const handleFieldChange = (sectionIndex: number, fieldIndex: number, value: string) => {
    const newData = [...data];
    newData[sectionIndex][1][fieldIndex + 1] = value;
    setData(newData);
  };

  const handleSave = async () => {
    console.log("Saving data:", data);
    const resp = await apihelper('PUT', '/profilmahasiswa', { biodata: data });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setData(initialData);
    setIsEditing(false);
  };

  // ✅ Show loading while fetching
  if (loading) {
    return (
      <main>
        <p className="header" style={{ marginTop: "1vh" }}>PROFIL MAHASISWA</p>
        <p>Loading...</p>
      </main>
    );
  }

  // ✅ Handle case where data is null
  if (!data || !Array.isArray(data)) {
    return (
      <main>
        <p className="header" style={{ marginTop: "1vh" }}>PROFIL MAHASISWA</p>
        <p>No data available</p>
      </main>
    );
  }

  // ✅ Render data
  let a = 1;
  const wall = [];

  for (let i = 0; i < data.length; i++) {
    const temp = [];
    const sectionData = data[i][1];

    for (let j = 0; j < sectionData.length; j += 2) {
      const label = sectionData[j];
      const value = sectionData[j + 1];
      const isImage = label.toLowerCase().includes("gambar");

      temp.push(
        <tr key={a}>
          <td className="bold">{label}</td>
          <td>
            {isImage ? (
              <img src={value} alt={label} style={{ maxWidth: "150px" }} />
            ) : isEditing ? (
              <input
                defaultValue={value}
                onChange={(e) => handleFieldChange(i, j, e.target.value)}
                style={{
                  width: '100%',
                  padding: '0',
                  fontSize: '14px',
                }}
              />
            ) : (
              <span>{value}</span>
            )}
          </td>
        </tr>
      );
      a++;
    }

    wall.push(
      <p key={a} className="bold" style={{ fontSize: "24px", margin: "2vh 1vw 2vh 1vw" }}>
        {data[i][0]}
      </p>
    );
    a++;

    wall.push(
      <table key={a}>
        <thead>
          <tr style={{ fontWeight: "bold", margin: "0", padding: "0" }}>
            <th style={{ width: "18vw", margin: "0", padding: "0" }}></th>
            <th style={{ width: "48vw", margin: "0", padding: "0" }}></th>
          </tr>
        </thead>
        <tbody>{temp}</tbody>
      </table>
    );
    a++;
  }

  return (
    <main>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1vh 2vw",
        }}
      >
        <p className="header" style={{ marginTop: 
            "1vh" }}>
          PROFIL MAHASISWA
        </p>
        <div>
          {isEditing ? (
            <>
              <button onClick={handleSave} style={{ background: "#2563eb", color: "white", border: "none", borderRadius: "6px", padding: "8px 20px", fontSize: "14px", cursor: "pointer", fontWeight: "bold", marginRight: "10px" }}>
                💾 Save
              </button>
              <button onClick={handleCancel} style={{ background: "#dc2626", color: "white", border: "none", borderRadius: "6px", padding: "8px 20px", fontSize: "14px", cursor: "pointer", fontWeight: "bold" }}>
                Cancel
              </button>
            </>
          ) : (
            <button onClick={() => setIsEditing(true)} style={{ background: "#2563eb", color: "white", border: "none", borderRadius: "6px", padding: "8px 20px", fontSize: "14px", cursor: "pointer", fontWeight: "bold" }}>
              ✏️ Edit
            </button>
          )}
        </div>
      </div>
      {wall}
      <p style={{ height: "5vh" }}></p>
    </main>
  );
}