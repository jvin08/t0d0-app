CREATE TABLE "todos" (
	"id" integer PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"text" text NOT NULL,
	"completed" boolean DEFAULT false
);
