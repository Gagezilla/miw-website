import { error } from '@sveltejs/kit';
import google from "@googleapis/drive";

const creds = {
    "type": "service_account",
    "project_id": "secure-approach-373418",
    "private_key_id": "6c560ce98c4a76ea94b0ab2a24be80b6ce329bf7",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCx39MKmikhWWYW\npPxZU6sCicL0DhcatjKmo6kRJTVRQo4iGQjPd5j6NSlKkUXAQ+FyPyp7W6xhK9Rg\nuh+r0/Xm5bqwfjECl+vnGVKRoUk46WwOE3yjGEcUkpuuGq/eUw/Ves2NCFs0Y7EA\ngkmRJDp0JBX7NnxedPXRVofyZVl2dSJmValA4dFuO/RWCA7nlUb9mk4eiJEKvNYd\n+Y5gt6Pa063TnwKzt8fYhU7QHSN0tChI3FOYgOZImLcxCRYJDStvr6uNDgkzSZvz\nc5/UFU7MHz9oqg1mbM1r2dCBctoCSAjwtBkRMvLLF4luGVlWC3+7Jcri886lcW7I\nxsB5+IZFAgMBAAECggEAC3BWripIUK/4WqadC4c6f+UJRRspMrX6r2XmepG0lPzN\nTwA3pWnuS/xCYxx7tRfYcM8C8HXD3JLjlfMvlA6t6WhRghtMvmXejUPUYBpUbw/E\ne7+WkWwqBAwX7WbOHmN5PklnByBoBx2NyuKAuyVZNKdZGjOV5MLWR8euDJv7wxw9\nUTs9Je7EkONnNyYSoPp+rBZd9mfM34B+Q//ZmtZqXdnKs8F0cCsXJoSh5qa3xNUi\nNw2dfFpBrD0FdXYVn6Rrhq7DwzSti8F55vpIc9Pc0UZTjWIzGOhDZD/Pn3zZ8lLR\nxv/+JlnXn1WRc2XoSvIm5Pb8MF22hj7d4w1IiRPbkQKBgQDgZ1Na6YH65vNpDWXd\nEValo+2+gs4CaSZdyI7mik7L9n6FKC6HIeAPokZ1JSSTH9vpNHwTbl+hVLvB2ATp\nDpkaN+KKbYDAVryaV/mKQKDr+5/XybyO6PQgJKSIjIsFDXQTff3vuoyiXg/N9Yyw\nWUByqDMor89ggZ0pEW5EM1GakQKBgQDK61ct5mZ79V/FedjXD4qqFPpnOAvP9Jqr\nlvwuSE8GovXL7gSHPBWGYIZOscL/7kIe92RxytUFpnD+Xm9S1PFgdtQFlXb/WR6+\n7626mUq/wCy/Ao3BrxcolSRu3mW6RSXATNaJp1CYKTX9aGadPi9KDSY0MiViKUWs\nddSn7VvCdQKBgCFGcQ/MDGAeGv365J3xUj3hnwFe+BlXaj8B3F7HJ4QLGxu3p56W\nIVlwIK6CQXgngz6Db9qZxUhw/h5yX9gHOCCxJMCOGEdtFS512STtDG+xsjQXUASI\n+ppBlLxCyuKG6i1xw1Pm/6+b7xAFV0VXFr1pv5xK5Z9T2PAcC5PFYFZhAoGAF+Jv\nloWCFqEhLrtS3K2FotNpTfD44vdlpUDWWhREyQExcVmIyuo1lmWSKX0e+MTwn3h7\nKDG5tTqMHkS7UcKizrnt5uJa6V9yEQNhLY+RjtRt7+W7DcswLKSxbyNaUfyFnwbs\nUbOR9vcS1csOGQASzOKTVp14bP9ypgQQjduQa2kCgYEAv3hrhnBKvIGOsJNhp0IQ\nQUJooIZByNkj/mEJJdOLN0c27Rlf/7YUocvwJbsF8SZDAKJzNO107zDhsWsTwznz\nej3IL8K8FWpGmsVmllrBRF/rMxdsw7nsuxRB1GAHo6XPhLt6uGlDYjBTuiNRWDQM\nccpbFwnmYfb2J3Tl8teUQTA=\n-----END PRIVATE KEY-----\n",
    "client_email": "miw-666@secure-approach-373418.iam.gserviceaccount.com",
    "client_id": "105870948888497955825",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/miw-666%40secure-approach-373418.iam.gserviceaccount.com"
}

const scopes = [
    'https://www.googleapis.com/auth/drive.readonly'
];

const auth = new google.auth.JWT(
    creds.client_email, null,
    creds.private_key, scopes
);

const drive = google.drive({version: 'v2', auth});

const categories = {
    "gates": {
        "seoTitle": "Gates",
        "seoDescription": "super nice gates",
        "title": "Gates",
        "image": "/pages/product-categories/gates.jpg",
        "folders": [
            {"name": "default", "id": "1uXO26n1IdZZ4u3TxVmzRwkwN8vuiPxcf"}
        ]
    },
    "fences": {
        "seoTitle": "Fences",
        "seoDescription": "super nice fences",
        "title": "Fences",
        "image": "/pages/product-categories/fences.jpg",
        "folders": [
            {"name": "default", "id": "12kuCMUOAvPV4NFKziK6sJfxIqZ9TeWbt"}
        ]
    },
    "railings": {
        "seoTitle": "Railings",
        "seoDescription": "super nice railings",
        "title": "Railings",
        "image": "/pages/product-categories/railings.jpg",
        "folders": [
            {"name": "Interior", "id": "1dE3jicsqv4KbpEjojozjXeiKHyTYFy9-"},
            {"name": "Exterior", "id": "1GLJtnnVVQ4n80WhXR0FVr3xdxXxEsd-9"},
            {"name": "Balcony", "id": "14TjG-3v0bWtOIMFjV27NDF2gAS6lg2eM"}
        ]
    }
}

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {

    if (!Object.keys(categories).includes(params.slug))
        throw error(404, 'Not found');

    const categoryData = categories[params.slug]

    let category = Object.assign({
        "subcategories": await getSubcategories(categoryData["folders"])
    }, categoryData)

    delete category.folders

    return category
}

async function getSubcategories(folders) {

    let subcategories = [];

    for (let folder of folders) {

        const products = (await drive.files.list({
            q: `'${folder.id}' in parents`,
            supportsAllDrives: true
        })).data.items.map(i => {
            return {
                link: `https://drive.google.com/uc?id=${i.id}&export=media`,
                sku: i.title.split(".")[0]
            }
        })

        subcategories.push({"name": folder.name, "products": products})

    }

    return subcategories;
}