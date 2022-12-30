const form = document.querySelector("form");
const email = document.querySelector("#email-input");
const passwd = document.querySelector("#password-input");

let token_access = "";
let token_refresh = "";

form.onsubmit = async (event) => {
	event.preventDefault();

	const body = {
		email: `${email.value}`,
		password: `${passwd.value}`,
	};

	const response = await fetch("http://127.0.0.1:8000/users/login/", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(body),
	});

	data = await response.json();

	if (data["message"] === "Correo inválido o contraseña incorrecta") {
		console.error("Invalid email or incorrect password");
	}

	if (data["message"] === "Logeado correctamente") {
		token_access = await data["tokens"]["access"];
		token_refresh = await data["tokens"]["refresh"];
	}

	console.log(token_access, token_refresh);
	const saveToken_access = setCookie("token_access", token_access, 1);
};
