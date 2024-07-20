type TMethod = "GET" | "POST" | "PATCH" | "PUT" | "DELETE";

interface IOptions extends RequestInit {
  params?: Record<string, string>;
}

const DEFAULT_HEADERS = {
  accept: "application/json",
  "content-type": "application/json",
};

export class Api {
  constructor(private baseUrl: string = "", private options: RequestInit) {
    this.baseUrl = baseUrl;
    this.options = { ...options, method: "GET", headers: DEFAULT_HEADERS };
  }

  private parseResponse<T>(res: Response) {
    return new Promise(async (resolve: (value: T) => void, reject) => {
      try {
        if (!res.ok) reject(res);
        resolve(await res.json());
      } catch (e) {
        reject(e);
      }
    });
  }

  create(baseUrl: string, options: Partial<RequestInit>) {
    return new Api(baseUrl, { ...this.options, ...options });
  }

  get Request(): RequestInit {
    return this.options;
  }

  get Headers(): HeadersInit {
    return this.options.headers || {};
  }

  set Headers(headers: HeadersInit) {
    this.options = {
      ...this.options,
      headers: { ...this.options.headers, ...headers },
    };
  }

  private filterParams(params: Record<string, string>) {
    for (const key in params)
      if (params?.[key] === undefined) delete params[key];
    return params;
  }

  private parseUri(url: string, options?: IOptions) {
    const uri = url.startsWith("http") ? url : this.baseUrl + url;
    if (!options?.params) return uri;
    const params = new URLSearchParams(this.filterParams(options.params));
    return uri + "?" + params;
  }

  private parseBody(body: string | object) {
    return typeof body == "object" ? JSON.stringify(body) : body;
  }

  async get<T>(url: string, options: IOptions = {}): Promise<T> {
    return fetch(this.parseUri(url, options), {
      ...this.options,
      ...options,
      cache: "no-cache",
    }).then((res) => this.parseResponse<T>(res));
  }

  async post<T>(url: string, body: object | string): Promise<T> {
    return fetch(this.parseUri(url), {
      ...this.options,
      method: "POST",
      body: this.parseBody(body),
    }).then((res) => this.parseResponse<T>(res));
  }

  async put<T>(url: string, body: any): Promise<T> {
    return fetch(this.parseUri(url), {
      ...this.options,
      method: "PUT",
      body: this.parseBody(body),
    }).then((res) => this.parseResponse<T>(res));
  }

  async delete(url: string, options: IOptions = {}) {
    const uri = this.parseUri(url, options);
    return fetch(uri, {
      ...this.options,
      method: "DELETE",
    });
  }

  async patch<T>(url: string, body: string | object): Promise<T> {
    return fetch(this.baseUrl + url, {
      ...this.options,
      method: "PATCH",
      body: this.parseBody(body),
    }).then((res) => this.parseResponse<T>(res));
  }
}

const instance = new Api("", {
  headers: {
    accept: "application/json",
    "content-type": "application/json",
  },
});

export default instance;
