PGDMP         8                {            raccoon    12.14    12.14                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16393    raccoon    DATABASE     �   CREATE DATABASE raccoon WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Russian_Russia.1251' LC_CTYPE = 'Russian_Russia.1251';
    DROP DATABASE raccoon;
                postgres    false            �            1259    16413 	   post_tags    TABLE     v   CREATE TABLE public.post_tags (
    id integer NOT NULL,
    post_id integer NOT NULL,
    tag_id integer NOT NULL
);
    DROP TABLE public.post_tags;
       public         heap    postgres    false            �            1259    16411    post_tags_id_seq    SEQUENCE     �   ALTER TABLE public.post_tags ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.post_tags_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    207            �            1259    16403    posts    TABLE     �   CREATE TABLE public.posts (
    post_id integer NOT NULL,
    title character varying(50) NOT NULL,
    description character varying(500),
    date_create date NOT NULL,
    likes integer NOT NULL
);
    DROP TABLE public.posts;
       public         heap    postgres    false            �            1259    16401    posts_post_id_seq    SEQUENCE     �   ALTER TABLE public.posts ALTER COLUMN post_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.posts_post_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    205            �            1259    16396    tags    TABLE     g   CREATE TABLE public.tags (
    tag_id integer NOT NULL,
    tag_name character varying(20) NOT NULL
);
    DROP TABLE public.tags;
       public         heap    postgres    false            �            1259    16394    tags_tag_id_seq    SEQUENCE     �   ALTER TABLE public.tags ALTER COLUMN tag_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.tags_tag_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    203                      0    16413 	   post_tags 
   TABLE DATA           8   COPY public.post_tags (id, post_id, tag_id) FROM stdin;
    public          postgres    false    207   �                 0    16403    posts 
   TABLE DATA           P   COPY public.posts (post_id, title, description, date_create, likes) FROM stdin;
    public          postgres    false    205   �                 0    16396    tags 
   TABLE DATA           0   COPY public.tags (tag_id, tag_name) FROM stdin;
    public          postgres    false    203   �                  0    0    post_tags_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.post_tags_id_seq', 1, false);
          public          postgres    false    206                       0    0    posts_post_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.posts_post_id_seq', 1, true);
          public          postgres    false    204                       0    0    tags_tag_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.tags_tag_id_seq', 4, true);
          public          postgres    false    202            �
           2606    16410    posts posts_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_pkey PRIMARY KEY (post_id);
 :   ALTER TABLE ONLY public.posts DROP CONSTRAINT posts_pkey;
       public            postgres    false    205            �
           2606    16400    tags tags_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_pkey PRIMARY KEY (tag_id);
 8   ALTER TABLE ONLY public.tags DROP CONSTRAINT tags_pkey;
       public            postgres    false    203            �
           2606    16416    post_tags fk_post    FK CONSTRAINT     u   ALTER TABLE ONLY public.post_tags
    ADD CONSTRAINT fk_post FOREIGN KEY (post_id) REFERENCES public.posts(post_id);
 ;   ALTER TABLE ONLY public.post_tags DROP CONSTRAINT fk_post;
       public          postgres    false    2703    205    207            �
           2606    16421    post_tags fk_tag    FK CONSTRAINT     q   ALTER TABLE ONLY public.post_tags
    ADD CONSTRAINT fk_tag FOREIGN KEY (tag_id) REFERENCES public.tags(tag_id);
 :   ALTER TABLE ONLY public.post_tags DROP CONSTRAINT fk_tag;
       public          postgres    false    2701    207    203                  x������ � �         �  x��RIn�@<�W�
��<!�X,�%���!����NP�Xfz�����@�$j&�I�S��%r�\N����CjĽP�r8�Z�Z��]3�3TE��/Aκf�Y�5C-���C�!|F}p��?Z(�A�Q1}AӍ a��:�"�
e������)#�M`�3��NV��PI\�b4/�l-M^9y7U�]�L���o�S�Rj��3����M�`�|��:c(�������ʑ��,P���x��������Mm��+�P�4O�	�v��0�P��+[䔮��M��ې�P4Y�<:�iʥ�q�$hЭm�1+a`A���'Ш������5�����#��l�7)#�
������8|�ϣM{?aʆ|@�1'����޽��H����|��35����d8'σ��e�$�7h�G�         H   x�3估��/���e�ya�ņ.6^�w���.c���;�x߅-@N�܅�@�m�r��qqq Ux&k     