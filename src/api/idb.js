const DB_NAME = 'articleDb'
const STORAGE_NAME = 'articles'
const DB_VERSION = 1
let DB
export default {
    async getDb () {
        return new Promise((resolve, reject) => {
            if (DB) {
                return resolve(DB)
            }
            const request = window.indexedDB.open(DB_NAME, DB_VERSION)
            request.onerror = e => {
                console.log('Error opening db', e)
                reject('Error')
            }
            request.onsuccess = e => {
                DB = e.target.result
                resolve(DB)
            }
            request.onupgradeneeded = e => {
                let db = e.target.result
                db.createObjectStore(STORAGE_NAME, { autoIncrement: true, keyPath: 'id' })
            }
        })
    },
    async getArticles() {
        let db = await this.getDb()
        return new Promise(resolve => {
            let trans = db.transaction([STORAGE_NAME], 'readonly')
            trans.oncomplete = () => {
                resolve(article)
            }
            const store = trans.objectStore(STORAGE_NAME)
            const article = []
            store.openCursor().onsuccess = e => {
                const cursor = e.target.result
                if (cursor) {
                    article.push(cursor.value)
                    cursor.continue()
                }
            }
        })
    },
    async saveArticle (article) {
        let db = await this.getDb()
        return new Promise(resolve => {
            let trans = db.transaction([STORAGE_NAME], 'readwrite')
            trans.oncomplete = () => {
                resolve()
            }
            let store = trans.objectStore(STORAGE_NAME)
            store.put(article)
        })
    }
}