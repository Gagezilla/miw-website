/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
    return {imageDatas: await (await fetch("/api/products?driveId=1oLKFxte0idbAjp6Mo_gD8QyMNfLLZU8k", {
        method: "POST", headers: {'content-type': 'application/json'}
    })).json()}
}