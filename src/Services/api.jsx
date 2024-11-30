import axios from "axios";

export async function  fetchLivres() {
  return  await axios.get("https://gahi-said.com/apis/auteurs.php").then((res) => res.data);
}
