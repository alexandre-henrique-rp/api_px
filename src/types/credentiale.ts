export interface Credenciais {
	sandbox: boolean;
	client_id: string,
	client_secret: string,
	certificate?: string,
	validateMtls?: boolean,
};