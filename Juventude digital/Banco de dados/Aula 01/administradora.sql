create database administrador;

use administrador;

create table condominio(
    id serial primary key,
    nome text,
    dendereco text
);

create table pessoa(
    id serial primary key,
    nome text,
    cpf char(11),
    unique (cpf)
);

create table unidade(
    id serial primary key,
    numero text,
    bloco text,
    condominio_id integer references condominio (id),
    locatario_id integer references pessoa (id)
);

create table proprietario(
    pessoa_id integer references pessoa (id),
    unidade_id integer references unidade (id),
    primary key (pessoa_id, unidade_id)
);