import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'

admin.initializeApp()
const db = admin.firestore()
// const app = require('./app')
const { GoogleSpreadsheet } = require('google-spreadsheet')
// const TikTokScraper = require('tiktok-scraper')
const credenciales = require('./json/phrasal-datum-319715-4804493688b9.json')

let googleId = '1Q1TI1NM0bvrjaDnXjpNlkM_hXojciBwXnzUe2QMqbC4'

const instaTouch = require('instatouch')
const options2 = {
  session: 'sessionid=5436585236%3AVMpD7UQD7BJvhC%3A9',
}

export const taskRunner = functions
  .runWith({ memory: '2GB' })
  .pubsub.schedule('5 4 * * *')
  .onRun(async (context) => {
    // leer sheet todo
    let todos: any
    let follow: any
    ;(async function accederGoogle() {
      const documento = new GoogleSpreadsheet(googleId)
      await documento.useServiceAccountAuth(credenciales)
      await documento.loadInfo()
      acceder(documento.sheetsByIndex[0])
    })()
    ;(async () => {
      try {
        const user = await instaTouch.followers('deniseiudesneider', options2)

        followers(user)
      } catch (error) {
        console.log(error)
      }
    })()

    function followers(user: any) {
      follow = user.stats.followerCount
    }
    function acceder(doc: any) {
      todos = doc
    }
    // Consistent timestamp
    const now = admin.firestore.Timestamp.now()

    // Query all documents ready to perform
    const query = db
      .collection('usuarios')
      .where('performAt', '<=', now)
      .where('status', '==', 'scheduled')

    const tasks = await query.get()

    // Jobs to execute concurrently.
    const jobs: Promise<any>[] = []

    // Loop over documents and push job.
    tasks.forEach((snapshot) => {
      const { worker, options } = snapshot.data()
      const job = workers[worker](options)

        // Update doc with status on success or error
        // .then(() => snapshot.ref.update({ status: todos._rawProperties.title }))
        .then(() => snapshot.ref.update({ status: 'follow' }))

        .catch((err: any) => snapshot.ref.update({ status: 'error' }))

      console.log(follow)
      console.log(todos._rawProperties.title)
      jobs.push(job)
    })

    // Execute all jobs concurrently
    return await Promise.all(jobs)
  })

interface Workers {
  [key: string]: (options: any) => Promise<any>
}

const workers: Workers = {
  helloWorld: async (options) => preparar(options),
}

const preparar = function (options: any) {
  db.collection('logs').add({ hello: options.phoneNumber.toString() })
  db.collection('usuarios').add({ hello: options.phoneNumber.toString() })
}
//  mi worker deberia para cada usuario, scrap(sessionId, nombreusuario), subit leer spreadsheet(permison.json), actualizarTodo(permission.js), actualizarInd,
