import axios from "axios";
// Création d'une instance Axios isolée et pré-configurée
export const apiClient = axios.create({
  baseURL: "https://dummyjson.com",
  timeout: 8000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
// Intercepteur de requête : journalisation ou injection d'en-têtes d'authentification
apiClient.interceptors.request.use(
  (config) => {
    console.log(`[API REQUEST] ${config.method?.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
// Intercepteur de réponse : centralisation du formatage d'erreur
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    let messageErreur = "Une erreur inattendue est survenue.";
    if (error.response) {
      messageErreur = `Erreur ${error.response.status} :
${error.response.data?.message || "Action refusée par le serveur."}`;
    } else if (error.request) {
      messageErreur =
        "Impossible de joindre le serveur. Veuillez vérifier votre connexion réseau.";
    } else {
      messageErreur = error.message;
    }
    return Promise.reject(new Error(messageErreur));
  }
);
