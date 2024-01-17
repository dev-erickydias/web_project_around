export class Api {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    async fetchPorts() {
        try {
            const response = await fetch(`${this._baseUrl}/cards`, {
                method: "GET",
                headers: {
                    ...this._headers,
                    'Authorization': "0c0f253c-4ca4-4bd1-943e-23d7fcba2ec6"
                }
            });
            const data = await response.json();
            return data; 
        } catch (error) {
            console.error("Deu Error no requerimento dos cards >>>>>>>>>>>", error);
        }
    }

    async addPost({name, link}){
        try {
            const response = await fetch(`${this._baseUrl}/cards`,{
                method:"POST",
                headers: {
                    ...this._headers,
                    'Authorization': "0c0f253c-4ca4-4bd1-943e-23d7fcba2ec6"
                },
                body: JSON.stringify({name, link}),
                
            })
            const data = await response.json();
            console.log(data)
            return data; 
        } catch {
            console.error("Deu Error no post dos cards >>>>>>>>>>>", error);
        }
    }
}