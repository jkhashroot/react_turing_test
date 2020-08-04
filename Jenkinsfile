pipeline {
  agent any
  stages {
    stage('Build') {
      parallel {
        stage('Build') {
          steps {
            sh 'echo "building"'
          }
        }

        stage('Test') {
          steps {
            sh 'echo "Testing"'
          }
        }

      }
    }

  }
  environment {
    env = 'Dev'
  }
}