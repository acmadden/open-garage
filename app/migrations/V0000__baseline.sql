CREATE TABLE "garages" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(100) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "odometer_logs" (
	"id" serial PRIMARY KEY NOT NULL,
	"vehicle_id" integer NOT NULL,
	"distance" integer NOT NULL,
	"date" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE "parts" (
	"id" serial PRIMARY KEY NOT NULL,
	"garage_id" integer NOT NULL,
	"number" varchar(100) NOT NULL,
	"name" varchar(100) NOT NULL,
	"quantity" integer NOT NULL,
	"notes" text NOT NULL,
	"added_on" timestamp NOT NULL,
	"updated_on" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE "purchases" (
	"id" serial PRIMARY KEY NOT NULL,
	"vehicle_id" integer NOT NULL,
	"odometer_log_id" integer NOT NULL,
	"seller" varchar(150) NOT NULL,
	"buyer" varchar(150) NOT NULL,
	"currency" varchar(3) NOT NULL,
	"amount" numeric(12, 2) NOT NULL,
	"date" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE "receipts" (
	"id" serial PRIMARY KEY NOT NULL,
	"part_id" integer NOT NULL,
	"vendor" varchar(150),
	"price" numeric(12, 2) NOT NULL,
	"rebate" numeric(12, 2),
	"image" varchar,
	"date" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE "service_logs" (
	"id" serial PRIMARY KEY NOT NULL,
	"vehicle_id" integer NOT NULL,
	"odometer_log_id" integer NOT NULL,
	"notes" text NOT NULL,
	"date" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE "titles" (
	"id" serial PRIMARY KEY NOT NULL,
	"vehicle_id" integer NOT NULL,
	"number" varchar(20) NOT NULL,
	"issue_date" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE "vehicles" (
	"id" serial PRIMARY KEY NOT NULL,
	"garage_id" integer NOT NULL,
	"name" varchar(100),
	"vin" varchar(17),
	"year" varchar(4),
	"make" varchar(100),
	"model" varchar(100)
);
--> statement-breakpoint
ALTER TABLE "odometer_logs" ADD CONSTRAINT "odometer_logs_vehicle_id_vehicles_id_fk" FOREIGN KEY ("vehicle_id") REFERENCES "public"."vehicles"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "parts" ADD CONSTRAINT "parts_garage_id_garages_id_fk" FOREIGN KEY ("garage_id") REFERENCES "public"."garages"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "purchases" ADD CONSTRAINT "purchases_vehicle_id_vehicles_id_fk" FOREIGN KEY ("vehicle_id") REFERENCES "public"."vehicles"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "purchases" ADD CONSTRAINT "purchases_odometer_log_id_odometer_logs_id_fk" FOREIGN KEY ("odometer_log_id") REFERENCES "public"."odometer_logs"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "receipts" ADD CONSTRAINT "receipts_part_id_parts_id_fk" FOREIGN KEY ("part_id") REFERENCES "public"."parts"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "service_logs" ADD CONSTRAINT "service_logs_vehicle_id_vehicles_id_fk" FOREIGN KEY ("vehicle_id") REFERENCES "public"."vehicles"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "service_logs" ADD CONSTRAINT "service_logs_odometer_log_id_odometer_logs_id_fk" FOREIGN KEY ("odometer_log_id") REFERENCES "public"."odometer_logs"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "titles" ADD CONSTRAINT "titles_vehicle_id_vehicles_id_fk" FOREIGN KEY ("vehicle_id") REFERENCES "public"."vehicles"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "vehicles" ADD CONSTRAINT "vehicles_garage_id_garages_id_fk" FOREIGN KEY ("garage_id") REFERENCES "public"."garages"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE UNIQUE INDEX "part_no_idx" ON "parts" USING btree ("number");--> statement-breakpoint
CREATE UNIQUE INDEX "title_no_idx" ON "titles" USING btree ("number");--> statement-breakpoint
CREATE UNIQUE INDEX "vin_idx" ON "vehicles" USING btree ("vin");