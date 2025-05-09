<template>
  <v-container class="mt-10">
    <v-row align="center" justify="center">
      <v-col cols="12" md="4" class="text-center">
        <v-avatar size="180" class="mx-auto mb-4">
          <img src="/dp.jpg" alt="Shreyas Makde" />
        </v-avatar>
        <h1 class="text-h3 font-weight-bold mb-2">Shreyas Makde</h1>
        Let’s Create Something Awesome!
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
              I am a dedicated and innovative Full-Stack Software Engineer with
              a strong background in designing, developing, and deploying
              scalable web, mobile, and cloud-based applications. My expertise
              spans a wide range of technologies and frameworks, allowing me to
              deliver robust solutions tailored to diverse business needs. I
              thrive in dynamic environments where I can collaborate with
              cross-functional teams, tackle complex challenges, and
              continuously expand my technical skill set.
            </p>
            <p>
              With a passion for learning and a commitment to excellence, I stay
              up-to-date with the latest industry trends, best practices, and
              emerging technologies. I take pride in writing clean, maintainable
              code and architecting systems that are both efficient and secure.
              Whether working independently or as part of a team, I am driven by
              a desire to create impactful software that makes a difference for
              users and organizations alike.
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
