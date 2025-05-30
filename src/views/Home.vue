<template>
  <v-container class="mt-10">
    <v-row align="center" justify="center">
      <v-col cols="12" md="4" class="text-center">
        <v-avatar size="180" class="mx-auto mb-4">
          <img src="/dp.jpg" alt="Shreyas Makde" />
        </v-avatar>
        <h1 class="text-h3 font-weight-bold mb-2">Shreyas Makde</h1>
        Let’s Create Something Awesome!
        <h2 class="subtitle-1 mb-4">Senior Software Engineer</h2>
        <v-btn
          class="button-secondary"
          color="mr-2"
          :href="'https://github.com/smakde'"
          target="_blank"
          rel="noopener"
          >GitHub</v-btn
        >
        <v-btn
          class="button-secondary"
          color="mr-2"
          :href="'https://github.com/smakde'"
          target="_blank"
          rel="noopener"
          >LinkedIn</v-btn
        >
      </v-col>
      <v-col cols="12" md="8">
        <v-card outlined class="skill-card">
          <v-card-title class="font-weight-bold">About Me</v-card-title>
          <v-card-text>
            <p>
              Full-Stack Senior Software Engineer with 10 years of expertise
              across modern back-end, front-end, DevOps, and cloud technologies.
              Experienced in building scalable applications, leveraging cloud
              platforms, and implementing Web3 solutions. Strong collaborator
              with a proven record in volunteering and customer service,
              committed to delivering high-quality solutions in dynamic
              environments.
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
            C, C++, C#, Java, Swift, Python, Objective-C, MS-SQL, MySQL,
            ASP.NET, .NET Core, Node.js
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card outlined>
          <v-card-title class="font-weight-bold">Front-end</v-card-title>
          <v-card-text>
            JavaScript, jQuery, AJAX, Ember.js, Angular, React, Vue.js, Razor
            Views, Axios, Routing Libraries (React Router, Vue Router)
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mt-4">
      <v-col cols="12" md="6">
        <v-card outlined>
          <v-card-title class="font-weight-bold">DevOps</v-card-title>
          <v-card-text>
            PowerShell, GitHub Actions, Docker, Kubernetes, ELK Stack, Datadog
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card outlined>
          <v-card-title class="font-weight-bold"
            >Project Management</v-card-title
          >
          <v-card-text>
            Agile-Scrum, JIRA, GitHub, SourceTree, Monday.com, Bamboo,
            ServiceNow
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mt-4">
      <v-col cols="12" md="6">
        <v-card outlined>
          <v-card-title class="font-weight-bold">Cloud</v-card-title>
          <v-card-text>
            AWS – S3, RDS, EC2, DynamoDB, Lambda, VPC, CloudFormation, Redshift,
            IoT, Elastic Beanstalk. Azure – Boards, Pipelines, Repos, Test
            Plans, Artifacts.
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card outlined>
          <v-card-title class="font-weight-bold">Web3</v-card-title>
          <v-card-text>
            Solidity, Rust, EVM, Smart Contracts, IPFS, Chainlink (CCIP),
            MetaMask SDK, Wallet API, ENS, CoinMarketCap API, DeFi Fundamentals
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

/* Only apply stronger border and shadow in light mode */
.v-theme--light .skill-card {
  background: #fff;
  border: 1.5px solid #d1d5db;
  box-shadow: 0 4px 24px rgba(60, 60, 60, 0.1),
    0 1.5px 6px rgba(60, 60, 60, 0.08);
}

.button-secondary {
  margin: 3px;
}
</style>
