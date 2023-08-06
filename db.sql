CREATE TABLE public.post_tags (
    id SERIAL PRIMARY KEY,
    post_id integer,
    tag_id integer
);

CREATE TABLE public.posts (
    "postId" SERIAL PRIMARY KEY,
    title character varying(50),
    description character varying(500),
    "dateCreate" date,
    likes integer,
    tags text[]
);

CREATE TABLE public.tags (
    tag_id SERIAL PRIMARY KEY,
    tag_name character varying(20)
);
