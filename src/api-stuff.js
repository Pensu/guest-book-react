export function getMessages() {
  const apiUrl = process.env.REACT_APP_API_URL;
  return fetch(`${apiUrl}/messages`).then((res) => res.json());
}

export function createMessage(text) {
  const apiUrl = process.env.REACT_APP_API_URL;
  return fetch(`${apiUrl}/messages`, {
    method: "POST",
    body: JSON.stringify({ text }),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((res) => res.json());
}
