/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
    return {imageDatas: await (await fetch("/api/products?driveId=1n9eJNXuVeGiEAsd0nKHHKlmt8AeQBhJZ", {
        method: "POST", headers: {'content-type': 'application/json'}
    })).json()}
}