<template>
  <v-container class="mt-10">
    <v-row align="center" justify="center">
      <v-col cols="12" md="4" class="text-center">
        <v-avatar size="180" class="mx-auto mb-4">
          <img
            src="https://avatars.githubusercontent.com/u/209976736?s=400&u=ffdfb94b3213f99306577c90cd717015443f5f17&v=4"
            alt="Shreyas Makde"
          />
        </v-avatar>
        <h1 class="text-h3 font-weight-bold mb-2">Shreyas Makde</h1>
        <h2 class="subtitle-1 mb-4">Full-Stack Software Engineer</h2>
        <v-btn
          color="primary"
          class="mr-2"
          :href="'/Resume.pdf'"
          target="_blank"
          rel="noopener"
          >View Resume</v-btn
        >
        <v-btn
          color="secondary"
          :href="'https://github.com/smakde'"
          target="_blank"
          rel="noopener"
          >GitHub</v-btn
        >
      </v-col>
      <v-col cols="12" md="8">
        <v-card outlined class="skill-card">
          <v-card-title class="font-weight-bold">About Me</v-card-title>
          <v-card-text>
            <p>
              I am a passionate Full-Stack Software Engineer with experience in
              building scalable web, mobile, and cloud solutions. I enjoy
              working with modern technologies and frameworks, and I am always
              eager to learn and contribute to impactful projects.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mt-8">
      <v-col cols="12" md="6">
        <v-card outlined>
          <v-card-title class="font-weight-bold">Back-end</v-card-title>
          <v-card-text>
            C, C++, C#, Java, Swift, Python, Objective-C, MS SQL, ASP.NET, Core
            .NET, MySQL Server, Node
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card outlined>
          <v-card-title class="font-weight-bold">Front-end</v-card-title>
          <v-card-text>
            HTML, CSS, JavaScript, J-Query, JSON, XML, AJAX, Ember.JS, Angular,
            React, Vue.JS, Razor, AFL
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mt-4">
      <v-col cols="12" md="6">
        <v-card outlined>
          <v-card-title class="font-weight-bold"
            >DevOps Technologies</v-card-title
          >
          <v-card-text>
            Power-Shell Scripting, Datadog Logs, Kubernetes, Docker Containers,
            ELK Stack, GitHub Actions
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card outlined>
          <v-card-title class="font-weight-bold"
            >Project Methodologies</v-card-title
          >
          <v-card-text>
            Agile and Scrum, JIRA, GitHub, Bitbucket, Source-Tree, Monday
            Boards, Bamboo, Service Now
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mt-4">
      <v-col cols="12" md="6">
        <v-card outlined>
          <v-card-title class="font-weight-bold"
            >Cloud Technologies</v-card-title
          >
          <v-card-text>
            <strong>AWS:</strong> S3, RDS, EC2, CLI, DynamoDB, CodePipeline,
            IAM, Elastic Beanstalk, Redshift, VPC, Cloud Formation, Lambda, IoT,
            Security.<strong>Azure:</strong> Boards, Pipeline, Repos, Test
            Artifacts<strong>GCP:</strong> Storage, Functions, Run, Firestone
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card outlined>
          <v-card-title class="font-weight-bold"
            >Web3 Technologies</v-card-title
          >
          <v-card-text>
            Solidity, Rust, ETH Virtual Machine, Smart Contracts, IPFS Storage,
            Chainlink CCIP, Metamask SDK, Metamask Wallet API, ENS Domains,
            Coinmarketcap API, DeFi-Fundamentals
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped>
.skill-card {
  min-height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
</style>
