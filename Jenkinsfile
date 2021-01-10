// Instead of annotating an unnecessary import statement, the symbol _ is annotated, according to the annotation pattern.
def repoName = "open.workplus.io"
def version = env.BRANCH_NAME

pipeline {
    agent {
        docker {
            image 'node:10.23.0-alpine3.10' 
            args '-e HOME=/tmp -e NPM_CONFIG_PREFIX=/tmp/.npm'
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage("Git Checkout") {
            steps {
                checkout scm
            }
        }

        stage("Bootstrap") {
            steps {
                sh 'npm install'
            }
        }

        stage("Build") {
            steps {
                sh 'npm run build'
            }
        }

        stage("Deploy") {
            steps {
                sh 'echo "Deploy:open"'
            }
        }
    }

    post {
        always {
            emailext(subject: '$DEFAULT_SUBJECT', body: '$DEFAULT_CONTENT', to: 'hejianxian@foreverht.com')
            cleanWs deleteDirs: true
        }
    }
}