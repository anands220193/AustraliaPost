pipeline {
  agent any
  stages {
    stage('checkout') {
      steps {
        git(url: 'https://github.com/anands220193/AustraliaPost.git', branch: 'master')
      }
    }

    stage('configure') {
      steps {
        bat 'npx cypress run'
      }
    }

  }
}