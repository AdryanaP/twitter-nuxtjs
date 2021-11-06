import { createServer, Model } from "miragejs";

export function makeServer({ environment = "development" } = {}) {
  return createServer({
    environment,

    models: {
      tweet: Model,
    },

    seeds(server) {
      server.create("tweet", {
        name: "Éowyn",
        user: "@no_men",
        text: "lute como uma garota!!",
        profileImage: "https://www.ufrgs.br/tesauros/_acervo/image/2019/12/img-0019425-4ef2d9fde0.jpg",
        favorite: false,
      });
      server.create("tweet", {
        name: "Legolas",
        user: "@Math.max(flechas)",
        text: "eu: hoje eu durmo cedo... eu de madrugada:",
        profileImage: "https://xmanteigablog.files.wordpress.com/2014/10/legolas-orlando-bloom.jpg?w=440",
        postImage: "https://i.pinimg.com/564x/16/cb/e9/16cbe9f35fc7d9fd6e9170109b692d2f.jpg",
        favorite: false,
      });
      server.create("tweet", {
        name: "Smeagol",
        user: "@myprecious",
        text: "hmmm peixinho vivo nham nham",
        profileImage: "https://i.pinimg.com/originals/3a/79/e9/3a79e9102bc277c3b43a4d8a55aa1227.jpg",
        favorite: false,
      });
      server.create("tweet", {
        name: "Sauron",
        user: "@sinhodoanel",
        text: "já dizia Beyoncé né: if you liked it then you should have put a ring on it",
        profileImage: "https://1.bp.blogspot.com/-_R03YXicfKI/UJSDFZNvfqI/AAAAAAAAS6c/PgDDyve_Iag/s1600/eye-o-sauron-03.jpg",
        favorite: false,
      });
      server.create("tweet", {
        name: "Nazgul",
        user: "@aaaaaa",
        text: "AAAAAAAAAAAAAAAAA",
        profileImage: "https://i.pinimg.com/originals/d6/81/27/d6812708d7b24741f2385864fde38485.jpg",
        favorite: false,
      });
    },

    routes() {
      this.get("/api/tweets", (schema) => {
        return schema.tweets.all();
      });

      this.post("/api/tweets", (schema, request) => {
        const attrs = JSON.parse(request.requestBody);

        return schema.tweets.create(attrs);
      });

      this.delete("/api/tweets/:id", (schema, request) => {
        const id = request.params.id;

        const tweet = schema.tweets.find(id);
        return tweet.destroy();
      });

      this.put("/api/tweets/:id", (schema, request) => {
        const attrs = JSON.parse(request.requestBody);
        const id = request.params.id;

        return schema.db.tweets.update(id, attrs);
      });
    },
  });
}
