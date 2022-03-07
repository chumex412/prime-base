const axios = require("axios");
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList, GraphQLSchema } = require("graphql");
const { dataStore } = require("./firebaseConfig");

// Services
const ServiceType = new GraphQLObjectType({
  name: "services",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    text: { type: GraphQLString },
    icon: { type: GraphQLString },
    
  })
});

const ChooseUsType = new GraphQLObjectType({
  name: "choose_us",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    text: { type: GraphQLString },
    icon: { type: GraphQLString }
  })
});

const ProjectType = new GraphQLObjectType({
  name: "project",
  fields: () => ({
    projects_id: { type: GraphQLID },
    projects_title: { type: GraphQLString },
    projects_text: { type: GraphQLString },
    projects_image: { type: GraphQLString }
  })
});

const MemberType = new GraphQLObjectType({
  name: "member",
  fields: () => ({
    member_id: { type: GraphQLID },
    member_firstname: { type: GraphQLString },
    member_lastname: { type: GraphQLString },
    member_image: { type: GraphQLString },
    member_position: { type: GraphQLString } 
  })
})

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    services: {
      type: new GraphQLList(ServiceType),
      async resolve(parent, args) {
        // Code to get data from firebase db
        const data = [];
        const services = await dataStore.collection("services")
        .get()
        services.forEach(service => {
          data.push({id: service.id, ...service.data()})
        })
        return data;
      }
    },
    choose_us: {
      type: new GraphQLList(ChooseUsType),
      resolve(parent, args) {

      }
    },
    members: {
      type: new GraphQLList(MemberType),
      async resolve(parent, args) {
        const data = [];
        const members = await dataStore.collection("members")
        .get()
        members.forEach(member => {
          data.push({member_id: member.id, ...member.data()})
        })
        return data;
      }
    },
    member: {
      type: MemberType,
      args: {id: { type: GraphQLID } },
      async resolve(parent, args) {
        const member = await dataStore.doc(`members/${args.id}`)
        .get();

        return { member_id: member.id, ...member.data() }
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});