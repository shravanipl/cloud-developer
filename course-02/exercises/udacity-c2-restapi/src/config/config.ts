export const config = {
	postgres: {
		username: process.env.POSTGRES_USERNAME,
		password: process.env.POSTGRES_PASSWORD,
		database: process.env.POSTGRES_DATABASE,
		host: process.env.POSTGRES_HOST,
		dialect: 'postgres',
	},
	aws: {
		aws_region: process.env.aws_region,
		aws_profile: process.env.aws_profile,
		aws_media_bucket: process.env.aws_media_bucket,
	},
	jwt: {
		secret: 'helloworld',
	},
};
