CREATE TABLE "garages" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(100) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "service_visits" (
	"id" serial PRIMARY KEY NOT NULL,
	"vehicle_id" integer NOT NULL,
	"odometer" integer NOT NULL,
	"notes" text NOT NULL,
	"date" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE "vehicles" (
	"id" serial PRIMARY KEY NOT NULL,
	"garage_id" integer NOT NULL,
	"name" varchar(100),
	"vin" varchar(17),
	"year" varchar(4),
	"make" varchar(100),
	"model" varchar(100),
	"photo" varchar
);
--> statement-breakpoint
ALTER TABLE "service_visits" ADD CONSTRAINT "service_visits_vehicle_id_vehicles_id_fk" FOREIGN KEY ("vehicle_id") REFERENCES "public"."vehicles"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "vehicles" ADD CONSTRAINT "vehicles_garage_id_garages_id_fk" FOREIGN KEY ("garage_id") REFERENCES "public"."garages"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE UNIQUE INDEX "vin_idx" ON "vehicles" USING btree ("vin");