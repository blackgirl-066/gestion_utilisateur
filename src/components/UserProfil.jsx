export default function UserProfil({
  prenom,
  age,
  isOnline,
  onChangeStatuts,
  onDelete,
  darkMode
}) {
  return (
    <div
      style={{
        border: "3px solid grey",
        borderRadius: "10px",
        padding: "20px",
        margin: "10px",
        width: "300px",
        backgroundColor: darkMode ? "#333" : "#fff",
        color: darkMode ? "#fff" : "#000"
      }}
    >
      <h2>Prénom : {prenom}</h2>

      <p>Age : {age} ans</p>

      <p>Statut : {isOnline ? "🟢 En Ligne" : "🔴 Hors Ligne"}</p>

      <button
        style={{
          padding: "10px",
          marginTop: "2px",
          borderRadius: "5px",
          border: "1px solid grey",
          backgroundColor: isOnline ? "#e96161" : "#3fdc79",
        }}
        onClick={onChangeStatuts}
      >
        {isOnline ? "Déconnecter" : "Connecter"}
      </button>

      <button
        style={{
          padding: "10px",
          marginTop: "10px",
          marginLeft: "5px",
          borderRadius: "5px",
          backgroundColor: "#e96161",
          color: "white",
          border: "none"
        }}
        onClick={onDelete}
      >
        Supprimer
      </button>
    </div>
  );
}