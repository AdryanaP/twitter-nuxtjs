import {
  createServer,
  Model,
  hasMany,
  belongsTo,
  RestSerializer,
} from 'miragejs'

if (process.env.NODE_ENV === 'development') {
  makeServer()
}

export function makeServer({ environment = 'development' } = {}) {
  return createServer({
    environment,

    serializers: {
      application: RestSerializer,
      tweet: RestSerializer.extend({
        include: ['user', 'favorite'],
        embed: true,
      }),
    },

    models: {
      user: Model.extend({
        tweet: hasMany(),
        favorite: belongsTo(),
      }),
      tweet: Model.extend({
        user: belongsTo(),
        favorite: hasMany(),
      }),
      favorite: Model.extend({
        tweet: belongsTo(),
        user: belongsTo(),
      }),
    },

    seeds(server) {
      const gandalf = server.create('user', {
        name: 'Gandalf ex cinzento',
        username: '@reidelas',
        profileImage:
          'https://yaktribe.games/community/media/gandalf-jpg.45940/full',
      })
      const gandalfTweet = server.create('tweet', {
        user: gandalf,
        text: 'passa nada e nem pode',
      })

      const eowyn = server.create('user', {
        name: 'Éowyn',
        username: '@no-man',
        profileImage:
          'https://www.ufrgs.br/tesauros/_acervo/image/2019/12/img-0019425-4ef2d9fde0.jpg',
      })
      const eowynTweet = server.create('tweet', {
        user: eowyn,
        text: 'lute como uma garota!!',
      })

      const legolas = server.create('user', {
        name: 'Legolas',
        username: '@Math.max(flechas)',
        profileImage:
          'https://xmanteigablog.files.wordpress.com/2014/10/legolas-orlando-bloom.jpg?w=440',
      })
      const legolasTweet = server.create('tweet', {
        user: legolas,
        text: 'eu: hoje eu durmo cedo... eu de madrugada:',
        postImage:
          'https://i.pinimg.com/564x/16/cb/e9/16cbe9f35fc7d9fd6e9170109b692d2f.jpg',
      })

      const smeagol = server.create('user', {
        name: 'Smeagol',
        username: '@myprecious',
        profileImage:
          'https://i.pinimg.com/originals/3a/79/e9/3a79e9102bc277c3b43a4d8a55aa1227.jpg',
      })
      server.create('tweet', {
        user: smeagol,
        text: 'hmmm peixinho vivo nham nham',
      })

      const sauron = server.create('user', {
        name: 'Sauron',
        username: '@sinhodoanel',
        profileImage:
          'https://1.bp.blogspot.com/-_R03YXicfKI/UJSDFZNvfqI/AAAAAAAAS6c/PgDDyve_Iag/s1600/eye-o-sauron-03.jpg',
      })
      server.create('tweet', {
        user: sauron,
        text: 'já dizia Beyoncé né: if you liked it then you should have put a ring on it',
      })

      const nazgul = server.create('user', {
        name: 'Nazgul',
        username: '@aaaaaa',
        profileImage:
          'https://i.pinimg.com/originals/d6/81/27/d6812708d7b24741f2385864fde38485.jpg',
      })
      const nazgulTweet = server.create('tweet', {
        user: nazgul,
        text: 'AAAAAAAAAAAAAAAAA',
      })

      server.create('favorite', {
        user: gandalf,
        tweet: eowynTweet,
      })

      server.create('favorite', {
        user: legolas,
        tweet: gandalfTweet,
      })

      server.create('favorite', {
        user: gandalf,
        tweet: legolasTweet,
      })

      server.create('favorite', {
        user: eowyn,
        tweet: nazgulTweet,
      })
      server.create('favorite', {
        user: smeagol,
        tweet: nazgulTweet,
      })
      server.create('favorite', {
        user: sauron,
        tweet: nazgulTweet,
      })
      server.create('favorite', {
        user: eowyn,
        tweet: legolasTweet,
      })
    },

    routes() {
      this.get('/api/tweets', (schema) => {
        return schema.tweets.all()
      })

      this.get('/api/users', (schema) => {
        return schema.users.all()
      })

      this.get('/api/users/:id', (schema, request) => {
        const id = request.params.id

        const user = schema.users.find(id)
        return user
      })

      this.get('/api/favorites', (schema, request) => {
        const userId = request.queryParams.userId

        if (userId) {
          return schema.db.favorites.where({ userId })
        }

        return schema.db.favorites
      })

      this.post('/api/favorites', (schema, request) => {
        const attrs = JSON.parse(request.requestBody)

        schema.favorites.create(attrs)
        return schema.db.favorites
      })

      this.delete('/api/favorites/:id', (schema, request) => {
        const id = request.params.id

        const favorite = schema.favorites.find(id)
        favorite.destroy()
        return schema.db.favorites
      })

      this.post('/api/tweets', (schema, request) => {
        const attrs = JSON.parse(request.requestBody)

        return schema.tweets.create(attrs)
      })

      this.delete('/api/tweets/:id', (schema, request) => {
        const id = request.params.id

        const tweet = schema.tweets.find(id)
        return tweet.destroy()
      })

      this.put('/api/tweets/:id', (schema, request) => {
        const attrs = JSON.parse(request.requestBody)
        const id = request.params.id

        return schema.db.tweets.update(id, attrs)
      })
    },
  })
}
