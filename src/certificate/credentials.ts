import path from 'path'

export default {
	// PRODUÇÃO = false
	// HOMOLOGAÇÃO = true,
	sandbox: process.env.SANDBOX,
	client_id: process.env.CLIENT_ID,
	client_secret: process.env.CLIENT_SECRET,
	certificate: path.resolve(__dirname, `./${process.env.CERT_USER}`),
	validateMtls: false,
};