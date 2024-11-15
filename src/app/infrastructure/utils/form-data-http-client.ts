const defaultBaseURL ="https://communnityvolunteering-production.up.railway.app/api/v1"

export class HTTPClient{
    private baseUrl:string;

    constructor(baseURL?:string){
        this.baseUrl=baseURL||defaultBaseURL;
    }

    private async getHeader(){
        return {
            "Content-Type": "multipart/form-data"
        }
    }

    private async handleResponse(response: Response) {
        if (!response.ok) {
            const errorData = await response.json();
            throw errorData;
        }
        return await response.json();
    }


    async post<T, B extends BodyInit>(url: string, formData: B): Promise<T> {
        const headers = await this.getHeader();
        const response = await fetch(`${this.baseUrl}/${url}`, {
            headers: headers,
            method: "POST",
            body: formData,
        })
        return this.handleResponse(response);
    }

    async put<T, B extends BodyInit>(url: string, formData: B): Promise<T> {
        const headers = await this.getHeader();
        const response = await fetch(`${this.baseUrl}/${url}`, {
            headers: headers,
            method: "PUT",
            body: formData,
        })
        return this.handleResponse(response);
    }
}