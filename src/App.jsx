import UserProfil from "./components/UserProfil";
import { useState } from "react";
import UserForm from "./components/UserForm";

function App() {
  const [usersList, setUser] = useState([
    { id: 1, prenom: "Fatima Ba", age: 30, isOnline: true },
    { id: 2, prenom: "Adama Diallo", age: 29, isOnline: false },
    { id: 3, prenom: "Mouhamed Gueye", age: 20, isOnline: false },
    { id: 4, prenom: "Ramatoulaye Sy", age: 24, isOnline: true },
    { id: 5, prenom: "Moussa Faye", age: 35, isOnline: true },
  ]);

  // Changer le statut d'un utilisateur
  const changeStatuts = (idUser) => {
    const usersListM = usersList.map((u) =>
      u.id == idUser ? { ...u, isOnline: !u.isOnline } : u
    );
    setUser(usersListM);
  };

  // Ajouter un utilisateur
  const addUser = (newUser) => {
    let u = {
      id: Math.max(0, ...usersList.map((u) => u.id)) + 1,
      prenom: newUser.prenom,
      age: newUser.age,
      isOnline: true
    };
    setUser([...usersList, u]);
  };

  // Supprimer une carte utilisateur avec filter
  const deleteUser = (idUser) => {
    const usersListM = usersList.filter((u) => u.id !== idUser);
    setUser(usersListM);
  };

  // Gérer le mode clair/sombre
  const [darkMode, setDarkMode] = useState(false);

  const changeMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div style={{
      padding: "10px",
      minHeight: "100vh",
      backgroundColor: darkMode ? "#222" : "#fff",
      color: darkMode ? "#fff" : "#000"
    }}>
      <button onClick={changeMode}>
        {darkMode ? "Mode clair" : "Mode sombre"}
      </button>

      <h2 style={{ margin: "10px" }}>Ajouter Un Utilisateur</h2>

      <UserForm onAddUser={addUser}></UserForm>

      <h2>Listes des utilisateurs</h2>

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {usersList.map((u) => (
          <UserProfil
            key={u.id}
            prenom={u.prenom}
            age={u.age}
            isOnline={u.isOnline}
            onChangeStatuts={() => changeStatuts(u.id)}
            onDelete={() => deleteUser(u.id)}
            darkMode={darkMode}
          ></UserProfil>
        ))}
      </div>
    </div>
  );
}

export default App;