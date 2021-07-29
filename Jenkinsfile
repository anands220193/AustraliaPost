pipeline {
  agent any
  stages {
    stage('checkout') {
      steps {
        git(url: 'https://github.com/anands220193/AustraliaPost.git', branch: 'master')
        sh 'npm install'
      }
    }

    stage('configure') {
      steps {
        sh '''node -v
npm install'''
      }
    }

  }
}