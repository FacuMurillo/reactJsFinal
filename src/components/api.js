import lg24 from '../assets/monitorlg24.png';
import samsung27 from '../assets/monitorsamsung27.jpg';
import asus21 from '../assets/monitorasus21.png';

import gtx from '../assets/gtx1660.png';
import rtx from '../assets/rtx3050.png';
import rx from '../assets/rx580.png';

export const productos = async () => {
    const productosList = [
        { id: 1, name: "Monitor LG 24''", precio: 380000, image: lg24 , category: "monitores" },
        { id: 2, name: "Monitor Samsung 27''", precio: 530000, image: samsung27 , category: "monitores" },
        { id: 3, name: "Monitor Asus 21''", precio: 130000, image: asus21 , category: "monitores" },
        { id: 4, name: "Placa NVIDIA GTX 1660", precio: 400000, image: gtx , category: "placas" },
        { id: 5, name: "Placa AMD Radeon RX 580 8GB", precio: 285000, image: rx , category: "placas" },
        { id: 6, name: "Placa GeForce RTX 3050 8Gb", precio: 510000, image: rtx , category: "placas"},
    ];

    return new Promise((resolve) => {
        setTimeout(() => resolve(productosList), 500);
    });
};

export const productosPorCategoria = async (categoryId) => {
    const productos = {
        monitores: [
            { id: 1, name: "Monitor LG 24''", precio: 380000, image: lg24 , category: "monitores" },
            { id: 2, name: "Monitor Samsung 27''", precio: 530000, image: samsung27 , category: "monitores"  },
            { id: 3, name: "Monitor Asus 21''", precio: 130000, image: asus21 , category: "monitores" },
        ],
        placas: [
            { id: 4, name: "Placa NVIDIA GTX 1660", precio: 400000, image: gtx , category: "placas"},
            { id: 5, name: "Placa AMD Radeon RX 580 8GB", precio: 285000, image: rx , category: "placas"},
            { id: 6, name: "Placa GeForce RTX 3050 8Gb", precio: 510000, image: rtx , category: "placas"},
        ],
    };
    return new Promise((resolve) => {
        setTimeout(() => resolve(productos[categoryId] || []), 500);
    });
};
