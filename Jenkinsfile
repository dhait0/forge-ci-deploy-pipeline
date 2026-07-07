pipeline {
  agent any

  options {
    timestamps()
    disableConcurrentBuilds()
    buildDiscarder(logRotator(numToKeepStr: '20'))
  }

  environment {
    APP_NAME = 'forge-ci-deploy-pipeline'
    IMAGE_NAME = 'forge-ci-deploy-pipeline'
    RELEASE_VERSION = "demo-${env.BUILD_NUMBER}"
    DEPLOY_TARGET = 'local-linux'
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install') {
      steps {
        sh 'npm ci'
      }
    }

    stage('Quality Gate') {
      parallel {
        stage('Lint') {
          steps {
            sh 'npm run lint'
          }
        }
        stage('Build') {
          steps {
            sh 'npm run build'
          }
        }
      }
    }

    stage('Test') {
      steps {
        sh 'npm run test'
      }
    }

    stage('Docker Image') {
      steps {
        sh 'docker build -t ${IMAGE_NAME}:${RELEASE_VERSION} .'
      }
    }

    stage('Smoke Test') {
      steps {
        sh 'docker compose up -d --build'
        sh 'BASE_URL=http://localhost:4020 npm run smoke'
      }
      post {
        always {
          sh 'docker compose down'
        }
      }
    }
  }

  post {
    failure {
      sh 'npm run rollback'
    }
    always {
      archiveArtifacts artifacts: 'docs/**/*.md,Jenkinsfile,Dockerfile,docker-compose.yml', fingerprint: true
    }
  }
}
