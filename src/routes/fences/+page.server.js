/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
    return {imageDatas: await (await fetch("/api/products?driveId=17yd1JkcrnMbDgVCt_v-5dYNSiKNS7t4r", {
        method: "POST", headers: {'content-type': 'application/json'}
    })).json()}
}