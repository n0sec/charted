export type HarEntry = {
	request?: {
		url?: string;
		bodySize?: number | string;
		cookies?: Cookies[];
		headers?: Headers[];
		headersSize?: number | string;
		httpVersion?: string;
		method?: string;
		postData?: {
			mimeType?: string;
			params?: PostDataParams[];
			text?: string;
		};
	};
	queryString?: [];
	url?: string;
	response?: {
		bodySize?: number | string;
		content?: {
			mimeType?: string;
			size?: number | string;
			text?: string;
		};
		cookies?: Cookies[];
		headers?: Headers[];
		headersSize?: number | string;
		httpVersion?: string;
		redirectURL?: string;
		status?: number | string;
		statusText?: string;
	};
	serverIPAddress?: string;
	startedDateTime?: string | Date;
	time?: number | string;
	timings?: Timings;
	_resourceType?: string;
	_fromCache?: CacheOption;
};

interface Cookies {
	name: string;
	value: string;
	path: string;
	domain: string;
	expires: string;
	httpOnly: boolean;
	secure: boolean;
}

interface Headers {
	name: string;
	value: string;
}

interface PostDataParams {
	name: string;
	value: string;
}

export interface Timings {
	blocked: number | string;
	connect: number | string;
	dns: number | string;
	ssl: number | string;
	receive: number | string;
	send: number | string;
	wait: number | string;
}

enum CacheOption {
	Disk = 'disk',
	Memory = 'memory',
	None = 'none',
	null = 'null'
}
