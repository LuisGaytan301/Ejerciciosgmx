function zodiaco(mes = "marzo", dia = "20") {
    const zodiaco =
    {
        aries: {
            desde: { mes: "marzo", dia: 21 },
            hasta: { mes: "abril", dia: 20 },
        },
        tauro: {
            desde: { mes: "abril", dia: 21 },
            hasta: { mes: "mayo", dia: 20 },
        },
        geminis: {
            desde: { mes: "mayo", dia: 21 },
            hasta: { mes: "junio", dia: 21 },
        },
        cancer: {
            desde: { mes: "junio", dia: 22 },
            hasta: { mes: "julio", dia: 21 },
        },
        leo: {
            desde: { mes: "julio", dia: 22 },
            hasta: { mes: "agosto", dia: 23 },
        },
        virgo: {
            desde: { mes: "agosto", dia: 24 },
            hasta: { mes: "septiembre", dia: 23 },
        },
        libra: {
            desde: { mes: "septiembre", dia: 24 },
            hasta: { mes: "octubre", dia: 22 },
        },
        escorpio: {
            desde: { mes: "octubre", dia: 23 },
            hasta: { mes: "noviembre", dia: 22 },
        },
        sagitario: {
            desde: { mes: "noviembre", dia: 23 },
            hasta: { mes: "diciembre", dia: 21 },
        },
        capricornio: {
            desde: { mes: "diciembre", dia: 22 },
            hasta: { mes: "enero", dia: 20 },
        },
        acuario: {
            desde: { mes: "enero", dia: 21 },
            hasta: { mes: "febrero", dia: 19 },
        },
        piscis: {
            desde: { mes: "febrero", dia: 20 },
            hasta: { mes: "marzo", dia: 20 },
        }
    }

    for (signo in zodiaco) {
        const esDesde = zodiaco[signo].desde.mes === mes && zodiaco[signo].desde.dia <= dia;
        const esHasta = zodiaco[signo].hasta.mes === mes && zodiaco[signo].hasta.dia >= dia;
        if (esDesde || esHasta) {
            esSigno = signo;
        }
    }

    return esSigno;
}
console.log(zodiaco("febrero", "29"));