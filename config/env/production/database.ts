export default ({ env }) => ({
	connection: {
		client: 'mysql',
		connection: {
		host: env('DATABASE_HOST', '43.155.117.54'),
			port: env.int('DATABASE_PORT', 10005),
			database: env('DATABASE_NAME', 'crtl-p-studios-website-strapi-cms-db'),
			user: env('DATABASE_USERNAME', 'studioadmin'),
			password: env('DATABASE_PASSWORD', 'crtl-p-studios-website-strapi-cms-admin-password-114514'),
			ssl: env.bool('DATABASE_SSL', false)
		}
	}
});
