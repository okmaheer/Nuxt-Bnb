import getApis from './apis'
import bodyParser from 'body-parser'
import userRouter from './routers/user'
import homesRouter from './routers/homes'
export default function(){
    const algoliaConfig = this.options.privateRuntimeConfig.algolia
    const apis = getApis(algoliaConfig)
    this.nuxt.hook('render:setupMiddleware', (app) => {
        app.use(bodyParser.json())
        app.use('/api/user', userRouter(apis))
        app.use('/api/homes', homesRouter(apis))
    })

}
