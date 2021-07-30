pipeline {
  agent any
  stages {
    stage('GitCheckout') {
      steps {
        git(url: 'https://github.com/anands220193/AustraliaPost.git', branch: 'master', changelog: true)
      }
    }

  }
}