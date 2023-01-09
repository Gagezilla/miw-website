import { error } from '@sveltejs/kit';
import ImageKit from "imagekit";

const imagekit = new ImageKit({
    publicKey : "public_AgjiMEEYDFj5FbjagSnXz86royM=",
    privateKey : "private_2zUJF1rP3uafHy5+hEe59oV6fLw=",
    urlEndpoint : "https://ik.imagekit.io/a6gpsxnkl"
});

const categories = {
    "gates": {
        "seoTitle": "Gates",
        "seoDescription": "super nice gates",
        "title": "Gates",
        "image": "/pages/product-categories/gates.jpg",
        "folders": [
            {"name": "default", "path": "/Gates"}
        ]
    },
    "fences": {
        "seoTitle": "Fences",
        "seoDescription": "super nice fences",
        "title": "Fences",
        "image": "/pages/product-categories/fences.jpg",
        "folders": [
            {"name": "default", "path": "/Fences"}
        ]
    },
    "railings": {
        "seoTitle": "Railings",
        "seoDescription": "super nice railings",
        "title": "Railings",
        "image": "/pages/product-categories/railings.jpg",
        "folders": [
            {"name": "Interior", "path": "/Railings/Interior"},
            {"name": "Exterior", "path": "/Railings/Exterior"},
            {"name": "Balcony", "path": "/Railings/Balcony"}
        ]
    }
}

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {

    let cc = categories[params.slug]

    if (!cc) throw error(404, 'Not found');

    let catData = Object.assign({}, cc)
    catData["subcategories"] = await getSubcategories(catData["folders"])
    delete catData["folders"]

    return catData
}

async function getSubcategories(folders) {

    let subcategories = [];

    for (let folder of folders) {

        let results = await imagekit.listFiles({path: folder.path})

        const products = results.map(r => {
            return {
                link: r.url+"?tr=w-396,h-316",
                sku: r.name.split(".")[0]
            }
        })

        subcategories.push({"name": folder.name, "products": products})

    }

    return subcategories;
}