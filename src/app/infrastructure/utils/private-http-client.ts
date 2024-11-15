const defaultBaseURL ="https://communnityvolunteering-production.up.railway.app/api/v1"

export class PrivateHTTPClient{
    private baseUrl:string;

    constructor(baseURL?:string){
        this.baseUrl=baseURL||defaultBaseURL;
    }

    private async getHeader(token:string){
        return {
            "Content-Type": "application/json",
            "Authorization" : `Bearer ${token}`
        }
    }

    private async handleResponse(response: Response) {
        if (!response.ok) {
            const errorData = await response.json();
            throw errorData;
        }
        return await response.json();
    }

    async get<T>(url: string, token:string): Promise<T> {
        const headers = await this.getHeader(token);
        const response = await fetch(`${this.baseUrl}/${url}`, {
            headers: headers,
            method: "GET",
            cache: "no-store"
        })
        return this.handleResponse(response)
    }

    async delete<T>(url: string, token:string): Promise<T> {
        const headers = await this.getHeader(token);
        const response = await fetch(`${this.baseUrl}/${url}`, {
            headers: headers,
            method: "DELETE",
        })
        return this.handleResponse(response)
    }

    async post<T, B>(url: string, token:string, body: B): Promise<T> {
        const headers = await this.getHeader(token);
        const response = await fetch(`${this.baseUrl}/${url}`, {
            headers: headers,
            method: "POST",
            body: JSON.stringify(body),
        })
        return this.handleResponse(response);
    }

    async put<T, B>(url: string, token:string, body: B): Promise<T> {
        const headers = await this.getHeader(token);
        const response = await fetch(`${this.baseUrl}/${url}`, {
            headers: headers,
            method: "PUT",
            body: JSON.stringify(body),
        })
        return this.handleResponse(response);
    }

    async patch<T, B>(url: string, token:string, body: B): Promise<T> {
        const headers = await this.getHeader(token);
        const response = await fetch(`${this.baseUrl}/${url}`, {
            headers: headers,
            method: "PATCH",
            body: JSON.stringify(body),
        });
        return this.handleResponse(response);
    }
}