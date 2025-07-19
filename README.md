## Getting Started

OpenGarage comes with a dockerized developer experience (dvx) suite for running the application.

```bash
> npm run dvx:start
```

This will stand stand up a postgres instance, apply migrations, seed data, and stand up supporting services such as grafana logging.

To tear down the suite simply use the following.

```bash
> npm run dvx:stop
```

NOTE: At this time I don't think this removes the postgres volume so the data is persisted between tear downs.

Once the dvx suite is running you can run the svelte development server.

```bash
> npm run dev
```

### Migrations

Flyways are used to apply the application migrations and data seeds. Flyways require a specific naming convention. For example `V0000__baseline.sql`. Note the version must increment and there must be a double underscore (`__`).

Drizzle is used to generate the migrations. However, as previously stated the filename has an expected format that Drizzle cannot natively generate. After a migration is generated it needs to be manually updated to the correct one.

```bash
> npx drizzle-kit generate --name {migration_name}
```

NOTE: Would love some improvement from the dvx side here.
