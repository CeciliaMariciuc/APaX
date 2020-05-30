"use strict";
class Car {
    constructor(id, judet, categorie_nationala, categorie_comunitara, marca, descriere_comerciala, value_name, total_value) {
        this.id = id;
        this.judet = judet;
        this.categorie_nationala = categorie_nationala;
        this.categorie_comunitara = categorie_comunitara;
        this.marca = marca;
        this.descriere_comerciala = descriere_comerciala;
        this.value_name = value_name;
        this.total_value = total_value;
    }
}

const _Car = Car;
export { _Car as Car };