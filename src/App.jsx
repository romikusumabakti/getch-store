import { useState } from "react";

let name = "Romi";

function App() {
  let [count, setCount] = useState();

  return (
    <div>
      <h1>{count}</h1>
      <h2>{name}</h2>
      <button
        onClick={() => {
          name = "Kusuma Bakti";
          setCount(5);
          console.log(`name = ${name}`);
          console.log(`count = ${count}`);
        }}
      >
        Tambah
      </button>
    </div>
  );
}

export default App;

// rendering = mengubah JSX jadi HTML = menjalankan function komponen
// 1 kali di mode production, 2 kali di mode development
// setter state digunakan untuk merender ulang
// setter state = mempertahankan nilai baru untuk menggantikan nilai lama pada render berikutnya

// 2 syarat perubahan tampilan:
// 1. nilai barunya disimpan (menggunakan state atau variabel global)
// 2. harus ada rendering
